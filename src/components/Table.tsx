import React, { JSX, useContext, useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions, TouchableOpacity } from 'react-native';
import TextInput from './TextInput';
import { useTranslation } from 'react-i18next';
import Select, { SelectOption } from './Select';
import { highlightText } from './HighlightText';
import { useTheme } from '../context/ThemeContext';

export interface TableProps<T> {
  columns: Array<{
    header: string;
    accessor?: keyof T;
    width?: number;
    minRowWidth?: number;
    render?: (
      value: any,
      row: T,
      rowIndex?: number,
      highlightText?: (text: string, highlight: string) => React.ReactNode,
      highlight?: string,
    ) => React.ReactNode;
    sortable?: boolean;
    filterable?: boolean;
  }>;
  data: T[];
  style?: object;
  minRowHeight?: number;
  widthFactor?: number;
  renderHeaderButton?: React.ReactNode;
  paginationEnabled?: boolean;
}

type SortDirection = 'asc' | 'desc' | null;

const Table = <T,>({
  columns,
  data,
  style,
  minRowHeight = 40,
  widthFactor,
  renderHeaderButton,
  paginationEnabled,
}: TableProps<T>): React.ReactElement | null => {
  const { width: windowWidth } = useWindowDimensions();
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [filterText, setFilterText] = useState<string>('');
  const isSmallScreen = windowWidth < 600;
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const { t } = useTranslation();
  const {colors} = useTheme();

  if (!data.length || !columns.length) return null;

  const filteredData = useMemo(() => {
    if (!filterText.trim()) return data.map((item) => ({ item, matchingColumns: [] }));

    const lowerFilter = filterText.toLowerCase();
    return data
      .map((row) => {
        const matchingColumns: string[] = [];
        columns.forEach((col) => {
          if (!col.filterable || !col.accessor) return;
          const cellValue = row[col.accessor];
          if (cellValue == null) return;
          if (String(cellValue).toLowerCase().includes(lowerFilter)) {
            matchingColumns.push(String(col.accessor));
          }
        });

        return { item: row, matchingColumns };
      })
      .filter(({ matchingColumns }) => matchingColumns.length > 0);
  }, [filterText, data, columns]);

  const sortedData = useMemo(() => {
    if (!sortColumn || !sortDirection) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aVal = a.item[sortColumn];
      const bVal = b.item[sortColumn];

      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return sortDirection === 'asc' ? -1 : 1;
      if (bVal == null) return sortDirection === 'asc' ? 1 : -1;

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }

      return sortDirection === 'asc' ? String(aVal).localeCompare(String(bVal)) : String(bVal).localeCompare(String(aVal));
    });
  }, [filteredData, sortColumn, sortDirection]);

  const paginatedData = useMemo(() => {
    if (!paginationEnabled) return sortedData;
    const start = currentPage * rowsPerPage;
    return sortedData.slice(start, start + rowsPerPage);
  }, [sortedData, paginationEnabled, rowsPerPage, currentPage]);

  const totalPages = Math.max(1, Math.ceil(sortedData.length / (rowsPerPage || 1)));

  const onHeaderPress = (col: { accessor?: keyof T; sortable?: boolean }) => {
    if (!col.sortable || !col.accessor) return;

    if (sortColumn !== col.accessor) {
      setSortColumn(col.accessor);
      setSortDirection('asc');
    } else {
      if (sortDirection === 'asc') setSortDirection('desc');
      else if (sortDirection === 'desc') {
        setSortDirection(null);
        setSortColumn(null);
      } else {
        setSortDirection('asc');
      }
    }
  };

  const renderSortIndicator = (col: { accessor?: keyof T }) => {
    if (col.accessor !== sortColumn) return null;
    const isSorted = col.accessor === sortColumn;
    return (
      <View style={{ flexDirection: 'column', marginLeft: 4 }}>
        <Text
          style={{
            fontSize: 11,
            lineHeight: 10,
            textAlign: 'center',
            color: isSorted && sortDirection === 'asc' ? colors.whiteText : colors.midsteel,
          }}
        >
          ▲
        </Text>
        <Text
          style={{
            fontSize: 11,
            lineHeight: 10,
            textAlign: 'center',
            color: isSorted && sortDirection === 'desc' ? colors.whiteText : colors.midsteel,
          }}
        >
          ▼
        </Text>
      </View>
    );
  };

  if (isSmallScreen) {
    return (
      <ScrollView style={[styles.cardsContainer, style]}>
        {data.map((row, rowIndex) => (
          <View key={rowIndex} style={[styles.card, rowIndex % 2 === 0 ? {backgroundColor: colors.evenRow} : 
              {backgroundColor: colors.oddRow}]}>
            {columns.map((col, colIndex) => {
              const cellValue = col.accessor ? row[col.accessor] : null;
              return (
                <View key={colIndex} style={styles.cardRow}>
                  <Text style={[styles.cardHeader, {color: colors.text}]}>{col.header}:</Text>
                  <Text style={styles.cardValue}>
                    {col.render
                      ? col.render(cellValue ?? '', row, rowIndex, highlightText, filterText)
                      : highlightText(String(cellValue ?? ''), filterText)}
                  </Text>
                </View>
              );
            })}
          </View>
        ))}
      </ScrollView>
    );
  }

  const flexibleColumns = columns.filter((col) => !col.width);
  const flexibleColumnCount = flexibleColumns.length;
  const PaginationControls = () => {
    const getPageNumbers = () => {
      const pageCount = totalPages;
      const current = currentPage + 1;
      const maxVisible = 5;

      let startPage = Math.max(1, current - Math.floor(maxVisible / 2));
      let endPage = startPage + maxVisible - 1;

      if (endPage > pageCount) {
        endPage = pageCount;
        startPage = Math.max(1, endPage - maxVisible + 1);
      }

      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
        <TouchableOpacity
          onPress={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
          style={{ paddingHorizontal: 8, paddingVertical: 6 }}
        >
          <Text
            style={{
              fontSize: 18,
              color: currentPage === 0 ? colors.ccc : colors.text,
            }}
          >
            ◀
          </Text>
        </TouchableOpacity>
        {pageNumbers[0] > 1 && (
          <>
            <TouchableOpacity onPress={() => setCurrentPage(0)} style={{ paddingHorizontal: 6 }}>
              <Text
                style={{
                  color: currentPage === 0 ? colors.whiteText : colors.text,
                  backgroundColor: currentPage === 0 ? colors.darksteel : undefined,
                  borderRadius: 4,
                  paddingHorizontal: 6,
                }}
              >
                1
              </Text>
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: 4 }}>...</Text>
          </>
        )}
        {pageNumbers.map((page) => {
          const pageIndex = page - 1;
          const isCurrent = pageIndex === currentPage;
          return (
            <TouchableOpacity key={page} onPress={() => setCurrentPage(pageIndex)} style={{ marginHorizontal: 2 }}>
              <Text
                style={{
                  padding: 6,
                  backgroundColor: isCurrent ? colors.darksteel : colors.eee,
                  color: isCurrent ? colors.whiteText : colors.text,
                  borderRadius: 4,
                  minWidth: 24,
                  textAlign: 'center',
                }}
              >
                {page}
              </Text>
            </TouchableOpacity>
          );
        })}
        {pageNumbers[pageNumbers.length - 1] < totalPages && (
          <>
            <Text style={{ paddingHorizontal: 4 }}>...</Text>
            <TouchableOpacity onPress={() => setCurrentPage(totalPages - 1)} style={{ paddingHorizontal: 6 }}>
              <Text
                style={{
                  color: currentPage === totalPages - 1 ? colors.whiteText : colors.text,
                  backgroundColor: currentPage === totalPages - 1 ? colors.darksteel : undefined,
                  borderRadius: 4,
                  paddingHorizontal: 6,
                }}
              >
                {totalPages}
              </Text>
            </TouchableOpacity>
          </>
        )}
        <TouchableOpacity
          onPress={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
          disabled={currentPage === totalPages - 1}
          style={{ paddingHorizontal: 8, paddingVertical: 6 }}
        >
          <Text
            style={{
              fontSize: 18,
              color: currentPage === totalPages - 1 ? colors.ccc : colors.text,
            }}
          >
            ▶
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ minHeight: minRowHeight * (sortedData.length + 2) }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {paginationEnabled && (
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Select
              style={{ width: 80, alignSelf: 'flex-end' }}
              selectedValue={rowsPerPage}
              onValueChange={(value) => {
                setRowsPerPage(Number(value));
                setCurrentPage(0);
              }}
              placeholder={t('text.select.rows')}
              options={
                (() => {
                  const max = sortedData.length;
                  const multiples = [];
                  for (let i = 5; i <= max; i += 5) {
                    multiples.push({ label: i.toString(), value: i });
                  }
                  if (max % 5 !== 0) {
                    multiples.push({ label: max.toString(), value: max });
                  }
                  return multiples;
                })() as SelectOption[]
              }
            />

            {sortedData.length > 0 && <PaginationControls />}
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            height: minRowHeight,
          }}
        >
          <View style={{ width: windowWidth * 0.2, marginRight: 10 }}>
            <TextInput
              placeholder={t('textinput.filter')}
              value={filterText}
              onChangeText={setFilterText}
              inputStyle={{ height: minRowHeight, paddingVertical: 0 }}
            />
          </View>
          <View style={{ justifyContent: 'center' }}>{renderHeaderButton}</View>
        </View>
      </View>

      <ScrollView horizontal style={[styles.container, style]}>
        <View style={{ width: windowWidth * (widthFactor ?? 0.8) }}>
          <View style={[styles.row, styles.headerRow, { borderBottomColor: colors.midgrey, backgroundColor: colors.darksteel, minHeight: minRowHeight }]}>
            {columns.map((col, idx) => (
              <TouchableOpacity
                key={idx}
                style={[
                  styles.cell,{borderRightColor: colors.ccc},
                  styles.headerCell,
                  col.width
                    ? { width: col.width }
                    : {
                        width: (windowWidth * (widthFactor ?? 0.8)) / flexibleColumnCount,
                      },
                  { minHeight: minRowHeight },
                  col.sortable ? { cursor: 'pointer' } : {},
                ]}
                onPress={() => onHeaderPress(col)}
                activeOpacity={col.sortable ? 0.6 : 1}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={[styles.headerText, {color: colors.whiteText}]}>{col.header}</Text>
                  {renderSortIndicator(col)}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {paginatedData.map(({ item: row, matchingColumns }, rowIndex) => (
            <View key={rowIndex} style={[styles.row, rowIndex % 2 === 0 ? {backgroundColor: colors.evenRow} : 
              {backgroundColor: colors.oddRow}, { minHeight: minRowHeight }]}
            >
              {columns.map((col, colIndex) => {
                const cellValue = col.accessor ? row[col.accessor] : null;
                const accessorKey = String(col.accessor);
                const shouldHighlight = col.filterable && col.accessor && matchingColumns.includes(accessorKey);

                return (
                  <View
                    key={colIndex}
                    style={[
                      styles.cell,{borderRightColor: colors.ccc},
                      col.width
                        ? { width: col.width }
                        : {
                            width: (windowWidth * (widthFactor ?? 0.8)) / flexibleColumnCount,
                          },
                      { minHeight: minRowHeight },
                    ]}
                  >
                    {col.render ? (
                      col.render(cellValue ?? '', row, rowIndex, highlightText, filterText)
                    ) : filterText.trim() && shouldHighlight ? (
                      highlightText(String(cellValue ?? ''), filterText)
                    ) : (
                      <Text>{String(cellValue ?? '')}</Text>
                    )}
                  </View>
                );
              })}
            </View>
          ))}
          {paginationEnabled && (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>{sortedData.length > 0 && <PaginationControls />}</View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRow: {
    borderBottomWidth: 1,
  },
  cell: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRightWidth: 1,
    justifyContent: 'center',
  },
  headerCell: {},
  headerText: {
    fontSize: 17,
  },
  cardsContainer: {
    marginTop: 15,
    padding: 15,
  },
  card: {
    padding: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  cardHeader: {
    fontWeight: '700',
    marginRight: 8,
  },
  cardValue: {
    flexShrink: 1,
  },
  filterInput: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default Table;

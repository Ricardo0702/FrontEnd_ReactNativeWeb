import React, { JSX, useContext, useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions, TouchableOpacity } from 'react-native';
import Colors from './Colors';
import TextInput from './TextInput';
import { useTranslation } from 'react-i18next';
import Select, { SelectOption } from './Select';
import colors from './Colors';

export interface TableProps<T> {
  columns: Array<{
    header: string;
    accessor?: keyof T;
    width?: number;
    minRowWidth?: number;
    render?: (value: any, row: T, rowIndex?: number) => React.ReactNode;
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

const Table = <T,>({ columns, data, style, minRowHeight = 40, widthFactor, renderHeaderButton, paginationEnabled }: TableProps<T>): React.ReactElement | null => {

  const { width: windowWidth } = useWindowDimensions();
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [filterText, setFilterText] = useState<string>('');
  const isSmallScreen = windowWidth < 600;
  const [rowsPerPage, setRowsPerPage] = useState(10);;
  const [currentPage, setCurrentPage] = useState(0);
  const { t } = useTranslation();

  if (!data.length || !columns.length) return null;
  
  const filteredData = useMemo(() => {
    if (!filterText.trim()) return data;
    const lowerFilter = filterText.toLowerCase();
    return data.filter(row =>
      columns.some(col => {
        if (!col.filterable) return false;
        const cellValue = col.accessor ? row[col.accessor] : null;
        if (cellValue === null || cellValue === undefined) return false;
        return String(cellValue).toLowerCase().includes(lowerFilter);
      })
    );
  }, [filterText, data, columns]);

  const sortedData = useMemo(() => { 
    if (!sortColumn || !sortDirection) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];

      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return sortDirection === 'asc' ? -1 : 1;
      if (bVal == null) return sortDirection === 'asc' ? 1 : -1;

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }

      return sortDirection === 'asc'
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  }, [filteredData, sortColumn, sortDirection]);

  useEffect(() => {
    setRowsPerPage(sortedData.length);
  }, [sortedData.length]);

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
      <Text style={{ fontSize: 11, lineHeight: 10, textAlign: 'center',
        color: isSorted && sortDirection === 'asc' ? 'white' : colors.lightsteel,  
      }}>
      ▲
      </Text>
      <Text style={{ fontSize: 11, lineHeight: 10, textAlign: 'center',
        color: isSorted && sortDirection === 'desc' ? 'white' : colors.lightsteel, 
      }}>
      ▼
      </Text>
    </View>
  );
  };



  if (isSmallScreen) {
    return (
      <ScrollView style={[styles.cardsContainer, style]}>
        {data.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.card}>
            {columns.map((col, colIndex) => {
              const cellValue = col.accessor ? row[col.accessor] : null;
              return (
                <View key={colIndex} style={styles.cardRow}>
                  <Text style={styles.cardHeader}>{col.header}:</Text>
                  <Text style={styles.cardValue}>
                    {col.render ? col.render(cellValue ?? '', row, rowIndex) : <Text>{String(cellValue ?? '')}</Text>}
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
        <Text style={{ fontSize: 18, color: currentPage === 0 ? '#ccc' : 'black' }}>◀</Text>
      </TouchableOpacity>
      {pageNumbers[0] > 1 && (
        <>
          <TouchableOpacity onPress={() => setCurrentPage(0)} style={{ paddingHorizontal: 6 }}>
            <Text style={{ color: currentPage === 0 ? 'white' : 'black', backgroundColor: currentPage === 0 ? Colors.darksteel : undefined, borderRadius: 4, paddingHorizontal: 6 }}>
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
            <Text style={{
              padding: 6,
              backgroundColor: isCurrent ? Colors.darksteel : '#eee',
              color: isCurrent ? 'white' : 'black',
              borderRadius: 4,
              minWidth: 24,
              textAlign: 'center',
            }}>
              {page}
            </Text>
          </TouchableOpacity>
        );
      })}
      {pageNumbers[pageNumbers.length - 1] < totalPages && (
        <>
          <Text style={{ paddingHorizontal: 4 }}>...</Text>
          <TouchableOpacity onPress={() => setCurrentPage(totalPages - 1)} style={{ paddingHorizontal: 6 }}>
            <Text style={{
              color: currentPage === totalPages - 1 ? 'white' : 'black',
              backgroundColor: currentPage === totalPages - 1 ? Colors.darksteel : undefined,
              borderRadius: 4,
              paddingHorizontal: 6,
            }}>
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
        <Text style={{ fontSize: 18, color: currentPage === totalPages - 1 ? '#ccc' : 'black' }}>▶</Text>
      </TouchableOpacity>
    </View>
  );
};


 return (
    <View style={{ minHeight: minRowHeight * (sortedData.length + 2) }}>
      {/* Filtro global */}
      <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
        {paginationEnabled && (
          <View style={{ flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={{ marginRight: 10, alignSelf: 'flex-end'}}>{t('text.show.rows')}:</Text>
            <Select
              style={{ width: 80, alignSelf: 'flex-end'}}
              selectedValue={rowsPerPage}
              onValueChange={(value) => {
                setRowsPerPage(Number(value));
                setCurrentPage(0);
              }}
              placeholder={t('text.select.rows')}
              options={
                Array.from({ length: sortedData.length }, (_, i) => i + 1)
                  .map(num => ({ label: num.toString(), value: num })) as SelectOption[]
              }
            />

            {sortedData.length > 0 && <PaginationControls />}

          </View>
        )}
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end', height: minRowHeight}}>
          <View style={{ justifyContent: 'center', marginRight: 10 }}>
            {renderHeaderButton}
          </View>
          <View style={{ width: windowWidth * 0.2 }}>
            <TextInput placeholder={t("textinput.filter")} value={filterText} onChangeText={setFilterText} inputStyle={{ height: minRowHeight, paddingVertical: 0 }}/>
          </View>
        </View>
      </View>

      <ScrollView horizontal style={[styles.container, style]}>
        <View style={{ width: windowWidth * (widthFactor ?? 0.8) }}>
          <View style={[styles.row, styles.headerRow, { minHeight: minRowHeight }]}>
            {columns.map((col, idx) => (
              <TouchableOpacity
                key={idx}
                style={[
                  styles.cell,
                  styles.headerCell,
                  col.width
                    ? { width: col.width }
                    : { width: (windowWidth * (widthFactor ?? 0.8)) / flexibleColumnCount },
                  { minHeight: minRowHeight },
                  col.sortable ? { cursor: 'pointer' } : {},
                ]}
                onPress={() => onHeaderPress(col)}
                activeOpacity={col.sortable ? 0.6 : 1}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.headerText}>{col.header}</Text>
                  {renderSortIndicator(col)}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {paginatedData.map((row, rowIndex) => (
            <View key={rowIndex} style={[ styles.row, rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow, { minHeight: minRowHeight },]}>
              {columns.map((col, colIndex) => {
                const cellValue = col.accessor ? row[col.accessor] : null;
                return (
                  <View key={colIndex}
                    style={[
                      styles.cell, col.width ? { width: col.width } : { width: (windowWidth * (widthFactor ?? 0.8)) / flexibleColumnCount },
                      { minHeight: minRowHeight },
                    ]}
                  >
                    {col.render ? col.render(cellValue ?? '', row, rowIndex) : <Text>{String(cellValue ?? '')}</Text>}

                  </View>
                );
              })}
            </View>
          ))}
          {paginationEnabled && (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {sortedData.length > 0 && <PaginationControls />}
            </View>
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
    backgroundColor: Colors.darksteel,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },
  cell: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    justifyContent: 'center',
  },
  headerCell: {},
  headerText: {
    fontSize: 15,
    color: 'white',
  },
  evenRow: {
    backgroundColor: '#f9f9f9',
  },
  oddRow: {
    backgroundColor: '#f0f0f0',
  },
  cardsContainer: {
    marginTop: 15,
    padding: 15,
  },
  card: {
    backgroundColor: 'white',
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
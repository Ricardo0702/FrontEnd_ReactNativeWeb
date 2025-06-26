import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions, TouchableOpacity } from 'react-native';
import Colors from './Colors';
import TextInput from './TextInput';

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
}

type SortDirection = 'asc' | 'desc' | null;

const Table = <T,>({ columns, data, style, minRowHeight = 40, widthFactor, }: TableProps<T>): React.ReactElement | null => {

  const { width: windowWidth } = useWindowDimensions();
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [filterText, setFilterText] = useState<string>('');
  const isSmallScreen = windowWidth < 600;
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
    if (sortDirection === 'asc') return <Text> ▲</Text>;
    if (sortDirection === 'desc') return <Text> ▼</Text>;
    return null;
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
                    {col.render ? col.render(cellValue, row, rowIndex) : String(cellValue)}
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

 return (
    <View style={{ minHeight: minRowHeight * (sortedData.length + 2) }}>
      {/* Filtro global */}
      <TextInput
        containerStyle={[styles.filterInput, { marginBottom: 5, marginHorizontal: 10 }]}
        label="Filtrar..."
        value={filterText}
        onChangeText={setFilterText}
      />

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

          {sortedData.map((row, rowIndex) => (
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
                    {col.render ? col.render(cellValue, row, rowIndex) : <Text>{String(cellValue)}</Text>}
                  </View>
                );
              })}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
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
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 16,
  },
});

export default Table;
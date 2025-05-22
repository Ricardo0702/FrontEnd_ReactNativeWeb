import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import type { Table as TableProps } from './TableInterface';
import Colors from '../colors/Colors';

const Table = <T,>({
  columns,
  data,
  style,
  minRowHeight = 40,
  minRowWidth = 600,
}: TableProps<T>): React.ReactElement | null => {
  if (!data.length || !columns.length) return null;

  return (
    <View style={{ flex: 1, minHeight: minRowHeight * (data.length + 1) }}>
      <ScrollView
        horizontal
        style={[styles.container, style]}
        contentContainerStyle={{ minWidth: minRowWidth }}
      >
        <View>
          <View style={[styles.row, styles.headerRow, { minHeight: minRowHeight }]}>
            {columns.map((col, idx) => (
              <View
                key={idx}
                style={[
                  styles.cell,
                  styles.headerCell,
                  col.width ? { width: col.width } : { minWidth: 100 },
                  { minHeight: minRowHeight },
                ]}
              >
                <Text style={styles.headerText}>{col.header}</Text>
              </View>
            ))}
          </View>

          {data.map((row, rowIndex) => (
            <View
              key={rowIndex}
              style={[
                styles.row,
                rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow,
                { minHeight: minRowHeight },
              ]}
            >
              {columns.map((col, colIndex) => {
                const cellValue = col.accessor ? row[col.accessor] : null;
                return (
                  <View
                    key={colIndex}
                    style={[
                      styles.cell,
                      col.width ? { width: col.width } : { minWidth: 100 },
                      { minHeight: minRowHeight },
                    ]}
                  >
                    {col.render
                      ? col.render(cellValue, row, rowIndex)
                      : <Text style={styles.cellText}>{String(cellValue)}</Text>}
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
    flex: 1,
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
  headerCell: {
    // puedes agregar estilos especiales para header
  },
  headerText: {
    fontSize: 15,
    color: 'white'
  },
  cellText: {
    fontSize: 15,
  },
  evenRow: {
    backgroundColor: '#f9f9f9',
  },
  oddRow: {
    backgroundColor: '#f0f0f0',
  },
});

export default Table;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import type { Table as TableProps } from './TableInterface';
import Colors from '../colors/Colors';

const Table = <T,>({
  columns,
  data,
  style,
  minRowHeight = 40,
}: TableProps<T>): React.ReactElement | null => {
  const { width: windowWidth } = useWindowDimensions();

  if (!data.length || !columns.length) return null;

  const flexibleColumns = columns.filter((col) => !col.width);
  const flexibleColumnCount = flexibleColumns.length;

  return (
    <View style={{ minHeight: minRowHeight * (data.length + 1) }}>
      <ScrollView horizontal style={[styles.container, style]}>
        <View style={{ width: windowWidth * 0.8 }}>
          <View style={[styles.row, styles.headerRow, { minHeight: minRowHeight }]}>
            {columns.map((col, idx) => (
              <View
                key={idx}
                style={[
                  styles.cell,
                  styles.headerCell,
                  col.width
                    ? { width: col.width }
                    : { width: windowWidth * 0.8 / flexibleColumnCount },
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
                      col.width
                        ? { width: col.width }
                        : { width: windowWidth *0.8 / flexibleColumnCount },
                      { minHeight: minRowHeight },
                    ]}
                  >
                    {col.render
                      ? col.render(cellValue, row, rowIndex)
                      : <Text>{String(cellValue)}</Text>}
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
});

export default Table;

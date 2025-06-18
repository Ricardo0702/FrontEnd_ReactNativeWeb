import React from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import Colors from './Colors';

export interface TableProps<T> {
  columns: Array<{
    header: string;
    accessor?: keyof T;
    width?: number;
    minRowWidth?: number;
    render?: (value: any, row: T, rowIndex?: number) => React.ReactNode;
  }>;
  data: T[];
  style?: object;
  minRowHeight?: number;
  widthFactor?: number;
}

const Table = <T,>({
  columns,
  data,
  style,
  minRowHeight = 40,
  widthFactor,
}: TableProps<T>): React.ReactElement | null => {
  const { width: windowWidth } = useWindowDimensions();

  if (!data.length || !columns.length) return null;

  const isSmallScreen = windowWidth < 600;

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
    <View style={{ minHeight: minRowHeight * (data.length + 1) }}>
      <ScrollView horizontal style={[styles.container, style]}>
        <View style={{ width: windowWidth * (widthFactor ?? 0.8) }}>
          <View style={[styles.row, styles.headerRow, { minHeight: minRowHeight }]}>
            {columns.map((col, idx) => (
              <View
                key={idx}
                style={[
                  styles.cell,
                  styles.headerCell,
                  col.width
                    ? { width: col.width }
                    : { width: (windowWidth * (widthFactor ?? 0.8)) / flexibleColumnCount },
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
                        : { width: (windowWidth * (widthFactor ?? 0.8)) / flexibleColumnCount },
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
});

export default Table;

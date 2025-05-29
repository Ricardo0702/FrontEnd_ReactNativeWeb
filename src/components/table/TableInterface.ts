import React from 'react';

export interface Table<T> {
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
  //children: React.ReactNode; // ✅ Añadido para permitir renderizado adicional
}

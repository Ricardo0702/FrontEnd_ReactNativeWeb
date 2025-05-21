import React from 'react';

export interface Table<T> {
  columns: Array<{
    header: string;
    accessor?: keyof T;
    width?: number;
    render?: (value: any, row: T) => React.ReactNode;
  }>;
  data: T[];
  style?: object;
  minRowHeight?: number;
  minRowWidth?: number;
  //children: React.ReactNode; // ✅ Añadido para permitir renderizado adicional
}

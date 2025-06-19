import React from 'react';
import type { User } from '../../../types/IUser';
import { View, useWindowDimensions } from 'react-native';
import Table from '../../../components/Table';
import Button from '../../../components/Button';
import { useTranslation } from 'react-i18next';

interface UsersTableProps {
  users: User[];
  onDelete: (id: number) => void;
  onEdit: (user: User) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({ users, onDelete, onEdit }) => {
 
  const { t } = useTranslation();
  const { width: windowWidth } = useWindowDimensions()

  const columns: { header: string; accessor?: keyof User; width?: number; minRowWidth?: number;
      render?: (value: any, row: User) => React.ReactNode }[] = [
      { header: t('columns.username'), accessor: 'username' },
      { header: t('columns.roles'), accessor:'roles' },
      {
        header: t('columns.actions'), minRowWidth: 180,
        render: (_: any, row: User, rowIndex?: number) => {
        const isEven = (rowIndex ?? 0) % 2 === 0;
        const backgroundColor = isEven ? '#f0f0f0' : '#f9f9f9';
        if (windowWidth < 600){
            return (
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <View style = {{backgroundColor}}>
                        <Button title= {t("button.edit")} onPress={() => onEdit(row)} type='associate' />
                    </View>
                    <View>
                        <Button title={t("button.delete")} onPress={() => onDelete(row.id)} type='delete' />
                    </View>
                </View>
            )
        }
        return (
          <View style={{ flexDirection: 'column', gap: 10 }}>
            <View style = {{backgroundColor}}>
              <Button title= {t("button.edit")} onPress={() => onEdit(row)} type='associate' />
            </View>
            <View>
              <Button title={t("button.delete")} onPress={() => onDelete(row.id)} type='delete' />
            </View>
          </View>
        );
      }
    }
  ];

  return (
    <Table columns={columns} data={users} minRowHeight={50} widthFactor={0.6} />
  );
};

export default UsersTable;

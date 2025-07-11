import React from 'react';
import type { User } from '../../../types/IUser';
import { View, useWindowDimensions, Text } from 'react-native';
import Table from '../../../components/Table';
import Button from '../../../components/Button';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../context/ThemeContext';

interface UsersTableProps {
  users: User[];
  onDelete: (id: number) => void;
  onEdit: (user: User) => void;
  setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const UsersTable: React.FC<UsersTableProps> = ({ users, onDelete, onEdit, setShowModalForm }) => {
  const { t } = useTranslation();
  const { width: windowWidth } = useWindowDimensions();
  const { colors } = useTheme();

  const renderHeaderButton = (
    <View style={{ alignItems: 'flex-start' }}>
      <Button
        title={t('button.add.user')}
        onPress={() => setShowModalForm(true)}
        height={50}
        color="white"
        style={{ backgroundColor: colors.darksteel, borderRadius: 6 }}
        width={windowWidth * 0.1}
      />
    </View>
  );

  const columns: {
    header: string;
    accessor?: keyof User;
    sortable?: boolean;
    filterable?: boolean;
    width?: number;
    minRowWidth?: number;
    render?: (
      value: any,
      row: User,
      rowIndex?: number,
      highlightText?: (text: string, highlight: string) => React.ReactNode,
      highlight?: string,
    ) => React.ReactNode;
  }[] = [
    {
      header: t('columns.username'),
      accessor: 'username',
      filterable: true,
      sortable: true,
    },
    {
      header: t('columns.roles'),
      accessor: 'roles',
      filterable: true,
      sortable: true,
      render: (value: User['roles'], _, __, highlightText, filterValue) => {
        const rolesText = Array.isArray(value) ? value.join(', ') : (value ?? ' ');
        return (
          <View style={{ flexWrap: 'wrap' }}>
            <Text style={{ flexShrink: 1 }}>{highlightText ? highlightText(rolesText, filterValue || '') : rolesText}</Text>
          </View>
        );
      },
    },
    {
      header: t('columns.actions'),
      minRowWidth: 180,
      render: (_: any, row: User) => {
        const backgroundColor = colors.lightsteel;
        if (windowWidth < 600) {
          return (
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ backgroundColor }}>
                <Button title={t('button.edit')} onPress={() => onEdit(row)} type="associate" />
              </View>
              <View>
                <Button title={t('button.delete')} onPress={() => onDelete(row.id)} type="delete" />
              </View>
            </View>
          );
        }
        return (
          <View style={{ flexDirection: 'column', gap: 10 }}>
            <View style={{ backgroundColor }}>
              <Button title={t('button.edit')} onPress={() => onEdit(row)} type="associate" />
            </View>
            <View>
              <Button title={t('button.delete')} onPress={() => onDelete(row.id)} type="delete" />
            </View>
          </View>
        );
      },
    },
  ];

  return <Table columns={columns} data={users} minRowHeight={50} renderHeaderButton={renderHeaderButton} paginationEnabled />;
};

export default UsersTable;

import React from 'react';
import type { Role } from '../../../types/IRole';
import { useWindowDimensions, View } from 'react-native';
import Table from '../../../components/Table';
import Button from '../../../components/Button';
import colors from '../../../components/Colors';
import { useTranslation } from 'react-i18next';

interface RoleTableProps {
  roles: Role[];
  onDelete: (id: number) => void;
  onEdit: (role: Role) => void;
  setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const RolesTable: React.FC<RoleTableProps> = ({ roles, onDelete, onEdit, setShowModalForm }) => {
  const { t } = useTranslation();
  const { width: windowWidth } = useWindowDimensions();

  const renderHeaderButton = (
    <View style={{ alignItems: 'flex-start' }}>
      <Button
        title={t('button.add.role')}
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
    accessor?: keyof Role;
    width?: number;
    filterable?: boolean;
    sortable?: boolean;
    render?: (value: any, row: Role, rowIndex?: number) => React.ReactNode;
  }[] = [
    {
      header: t('columns.name'),
      accessor: 'name',
      filterable: true,
      sortable: true,
    },
    {
      header: t('columns.description'),
      accessor: 'description',
      filterable: true,
      sortable: true,
    },
    {
      header: t('columns.actions'),
      render: (_: any, row: Role) => {
        const backgroundColor = colors.lightsteel;
        if (windowWidth < 600) {
          return (
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ backgroundColor }}>
                <Button title={t('button.edit')} type="associate" onPress={() => onEdit(row)} />
              </View>

              <View style={{ backgroundColor: colors.lightRed }}>
                <Button title={t('button.delete')} onPress={() => onDelete(row.id)} type="associate" />
              </View>
            </View>
          );
        }
        return (
          <View style={{ flexDirection: 'column', gap: 10 }}>
            <View style={{ backgroundColor }}>
              <Button title={t('button.edit')} type="associate" onPress={() => onEdit(row)} />
            </View>

            <View style={{ backgroundColor: colors.lightRed }}>
              <Button title={t('button.delete')} onPress={() => onDelete(row.id)} type="associate" />
            </View>
          </View>
        );
      },
    },
  ];

  return <Table columns={columns} data={roles} minRowHeight={50} renderHeaderButton={renderHeaderButton} paginationEnabled />;
};

export default RolesTable;

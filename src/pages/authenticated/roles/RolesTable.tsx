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
}

const RolesTable: React.FC<RoleTableProps> = ({ roles, onDelete, onEdit }) => {
  const { t } = useTranslation();
  const {width: windowWidth} = useWindowDimensions();

  const columns: { header: string; accessor?: keyof Role; width?: number; render?: (value: any, row: Role, rowIndex?: number) => React.ReactNode }[] = [
    { header: t('columns.name'), accessor: 'name' }, 
    { header: t('columns.description'), accessor: 'description' },
    {
      header: t('columns.actions'),
      render: (_: any, row: Role, rowIndex?: number) => {
        const isEven = (rowIndex ?? 0) % 2 === 0;
        const backgroundColor = isEven ? '#f0f0f0' : '#f9f9f9';
        if ( windowWidth < 600 ){
            return(
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <View style={{ backgroundColor }}>
                        <Button title={t("button.edit")} type="associate" onPress={() => onEdit(row)}/>
                    </View>
                    
                    <View style={{ backgroundColor: colors.lightRed }}>
                        <Button title={t("button.delete")} onPress={() => onDelete(row.id)} type="associate"   />
                    </View>
                </View>
            )
        }
        return (
          <View style={{ flexDirection: 'column', gap: 10 }}>
            <View style={{ backgroundColor }}>
              <Button title={t("button.edit")} type="associate" onPress={() => onEdit(row)}/>
            </View>

            <View style={{ backgroundColor: colors.lightRed }}>
              <Button title={t("button.delete")} onPress={() => onDelete(row.id)} type="associate"   />
            </View>
          </View>
        );
      }
    }
  ];

  return (
    <Table columns={columns} data={roles} minRowHeight={50} widthFactor={0.6} />
  );
};

export default RolesTable;

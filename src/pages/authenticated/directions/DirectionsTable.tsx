import React, { useContext } from 'react';
import type { Direction } from '../../../types/IDirection';
import { useWindowDimensions, View } from 'react-native';
import Table from '../../../components/Table';
import Button from '../../../components/Button';
import colors from '../../../components/Colors';
import { useTranslation } from 'react-i18next';
import { Authority, hasAuthority } from '../../../hooks/UseAuthority';
import { UserContext } from '../../../context/UserContext';

interface DirectionsTableProps {
  directions: Direction[];
  onDelete: (id: number) => void;
  onEdit: (direction: Direction) => void;
}

const DirectionsTable: React.FC<DirectionsTableProps> = ({ directions, onDelete, onEdit }) => {
  const { t } = useTranslation();
  const { width: windowWidth } = useWindowDimensions() 
  const { authorities } = useContext(UserContext);

  const columns = [
    { header: t('columns.street'), accessor: 'street' as keyof Direction },
    { header: t('columns.city'), accessor: 'city' as keyof Direction },
    { header: t('columns.person'), accessor: 'personName' as keyof Direction, render: (value: string | null) => value ?? '', },
    ...(hasAuthority(authorities, Authority.ROLE_ADDRESSES) || hasAuthority(authorities, Authority.ROLE_ADMIN) ? [
      {
        header: t('columns.actions'),
        minRowWidth: 180,
        render: (_: any, row: Direction, rowIndex?: number) => {
          const isEven = (rowIndex ?? 0) % 2 === 0;
          const backgroundColor = isEven ? '#f0f0f0' : '#f9f9f9';
          if ( windowWidth < 600 ){
              return (
                  <View style={{ flex: 1, flexDirection: 'row', gap: 10 }}>
                      <View style={{ backgroundColor }}>
                          <Button title={t("button.edit")} type="associate" onPress={() => onEdit(row)}/>
                      </View>

                      <View style={{ backgroundColor: colors.lightRed }}>
                          <Button title={t("button.delete")} type="associate" onPress={() => onDelete(row.id)}/>
                      </View>             
                  </View>
              );
          }
          return (
            <View style={{ flex: 1, flexDirection: 'column', gap: 10 }}>
              <View style={{ backgroundColor }}>
                <Button title={t("button.edit")} type="associate" onPress={() => onEdit(row)}/>
              </View>

              <View style={{ backgroundColor: colors.lightRed }}>
                <Button title={t("button.delete")} type="associate" onPress={() => onDelete(row.id)}/>
              </View>
            </View>
          );
        },
      },
    ] : [])
  ];

  return (
    <Table columns={columns} data={directions} minRowHeight={50} />
  );
};

export default DirectionsTable;

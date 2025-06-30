import React, { useContext } from 'react';
import type { Direction } from '../../../types/IDirection';
import { useWindowDimensions, View, Text} from 'react-native';
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
  setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const DirectionsTable: React.FC<DirectionsTableProps> = ({ directions, onDelete, onEdit, setShowModalForm }) => {
  const { t } = useTranslation();
  const { width: windowWidth } = useWindowDimensions() 
  const { authorities } = useContext(UserContext);

  const renderHeaderButton = (hasAuthority(authorities, Authority.ROLE_ADDRESSES) || hasAuthority(authorities, Authority.ROLE_ADMIN)) && 
  (
    <View style={{ alignItems: 'flex-start' }}>
      <Button title={t("button.add.address")} onPress={() => setShowModalForm(true)} height={50} 
        color='white' style ={{backgroundColor: colors.darksteel, borderRadius: 6}} width={windowWidth*0.1}/>
    </View>
  );

  const columns: { header: string; accessor?: keyof Direction; sortable?: boolean; filterable?: boolean; width?: number; minRowWidth?: number;
        render?: (value: any, row: Direction) => React.ReactNode }[] = [
    { header: t('columns.street'), accessor: 'street', filterable: true, sortable: true },
    { header: t('columns.city'), accessor: 'city', filterable: true, sortable: true },
    { 
      header: t('columns.person'), accessor: 'personName', filterable: true, sortable: true, 
      render: (value: string | null) => <Text>{value ?? ''}</Text>, 
    },
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
    <Table columns={columns} data={directions} minRowHeight={50} renderHeaderButton={renderHeaderButton} paginationEnabled />
  );
};

export default DirectionsTable;

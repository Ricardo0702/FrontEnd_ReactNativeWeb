import React, { useContext } from 'react';
import type { Address } from '../../../types/IAddress';
import { useWindowDimensions, View, Text } from 'react-native';
import Table from '../../../components/Table';
import Button from '../../../components/Button';
import colors from '../../../components/Colors';
import { useTranslation } from 'react-i18next';
import { Authority, hasAuthority } from '../../../hooks/UseAuthority';
import { UserContext } from '../../../context/UserContext';

interface AddressesTableProps {
  Addresses: Address[];
  onDelete: (id: number) => void;
  onEdit: (Address: Address) => void;
  setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddressesTable: React.FC<AddressesTableProps> = ({ Addresses, onDelete, onEdit, setShowModalForm }) => {
  const { t } = useTranslation();
  const { width: windowWidth } = useWindowDimensions();
  const { authorities } = useContext(UserContext);

  const renderHeaderButton = (hasAuthority(authorities, Authority.ROLE_ADDRESSES) || hasAuthority(authorities, Authority.ROLE_ADMIN)) && (
    <View style={{ alignItems: 'flex-start' }}>
      <Button
        title={t('button.add.address')}
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
    accessor?: keyof Address;
    sortable?: boolean;
    filterable?: boolean;
    width?: number;
    minRowWidth?: number;
    render?: (value: any, row: Address) => React.ReactNode;
  }[] = [
    {
      header: t('columns.street'),
      accessor: 'street',
      filterable: true,
      sortable: true,
    },
    {
      header: t('columns.city'),
      accessor: 'city',
      filterable: true,
      sortable: true,
    },
    {
      header: t('columns.person'),
      accessor: 'personName',
      filterable: true,
      sortable: true,
    },
    ...(hasAuthority(authorities, Authority.ROLE_ADDRESSES) || hasAuthority(authorities, Authority.ROLE_ADMIN)
      ? [
          {
            header: t('columns.actions'),
            minRowWidth: 180,
            render: (_: any, row: Address) => {
              const backgroundColor = colors.lightsteel;
              if (windowWidth < 600) {
                return (
                  <View style={{ flex: 1, flexDirection: 'row', gap: 10 }}>
                    <View style={{ backgroundColor }}>
                      <Button title={t('button.edit')} type="associate" onPress={() => onEdit(row)} />
                    </View>

                    <View style={{ backgroundColor: colors.lightRed }}>
                      <Button title={t('button.delete')} type="associate" onPress={() => onDelete(row.id)} />
                    </View>
                  </View>
                );
              }
              return (
                <View style={{ flex: 1, flexDirection: 'column', gap: 10 }}>
                  <View style={{ backgroundColor }}>
                    <Button title={t('button.edit')} type="associate" onPress={() => onEdit(row)} />
                  </View>

                  <View style={{ backgroundColor: colors.lightRed }}>
                    <Button title={t('button.delete')} type="associate" onPress={() => onDelete(row.id)} />
                  </View>
                </View>
              );
            },
          },
        ]
      : []),
  ];

  return <Table columns={columns} data={Addresses} minRowHeight={50} renderHeaderButton={renderHeaderButton} paginationEnabled />;
};

export default AddressesTable;

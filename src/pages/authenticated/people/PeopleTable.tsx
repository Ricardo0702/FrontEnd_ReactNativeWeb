import React, { useContext } from 'react';
import type { Person } from '../../../types/IPerson';
import { View, Text, useWindowDimensions } from 'react-native';
import Table from '../../../components/Table';
import Button from '../../../components/Button';
import { useTranslation } from 'react-i18next';
import { Authority, hasAuthority } from '../../../hooks/UseAuthority';
import { UserContext } from '../../../context/UserContext';

interface PeopleTableProps {
  people: Person[];
  onDelete: (id: number) => void;
  onEdit: (person: Person) => void;
}

const PeopleTable: React.FC<PeopleTableProps> = ({ people, onDelete, onEdit }) => {
 
  const { t } = useTranslation();
  const { width: windowWidth } = useWindowDimensions()
  const { authorities } = useContext(UserContext);

  const columns: { header: string; accessor?: keyof Person; width?: number; minRowWidth?: number;
      render?: (value: any, row: Person) => React.ReactNode }[] = [
      { header: t('columns.name'), accessor: 'name' },
      { header: t('columns.age'), accessor: 'age' },
      {
        header: t('columns.addresses'),
        accessor: 'streets',
        render: (_: any, row: Person) => {
          const streets = row.streets ?? [];
          const cities = row.cities ?? [];
          const ids = row.directionIds ?? [];

          const directions = streets.map((_, index) => ({
            id: ids[index],
            street: streets[index] ?? t("unknown.street"),
            city: cities[index] ?? t("unknown.city"),
          }));

          return (
            <View style={{ flexDirection: 'column' }}>
              {directions.map((d, index) => (
                <Text key={d.id ?? index}>
                  {d.street} ({d.city})
                </Text>
              ))}
            </View>
          );
        },
      },
      {header: t('columns.projects'), accessor:'projectNames'},

      ...(hasAuthority(authorities, Authority.ROLE_PEOPLE) || hasAuthority(authorities, Authority.ROLE_ADMIN) ? [
        {
          header: t('columns.actions'), minRowWidth: 180,
          render: (_: any, row: Person, rowIndex?: number) => {
            const isEven = (rowIndex ?? 0) % 2 === 0;
            const backgroundColor = isEven ? '#f0f0f0' : '#f9f9f9';
            if (windowWidth < 600){
              return (
                <View style={{ flexDirection: 'row', gap: 10 }}>
                  <View style={{ backgroundColor }}>
                    <Button title={t("button.edit")} onPress={() => onEdit(row)} type='associate' />
                  </View>
                  <View>
                    <Button title={t("button.delete")} onPress={() => onDelete(row.id)} type='delete' />
                  </View>
                </View>
              );
            }
            return (
              <View style={{ flexDirection: 'column', gap: 10 }}>
                <View style={{ backgroundColor }}>
                  <Button title={t("button.edit")} onPress={() => onEdit(row)} type='associate' />
                </View>
                <View>
                  <Button title={t("button.delete")} onPress={() => onDelete(row.id)} type='delete' />
                </View>
              </View>
            );
          }
        }
    ] : [])
  ];

  return (
    <Table columns={columns} data={people} minRowHeight={50} />
  );
};

export default PeopleTable;

import React from 'react';
import type { Person } from '../../../types/IPerson';
import { View, Text, useWindowDimensions } from 'react-native';
import Table from '../../../components/Table';
import Button from '../../../components/Button';
import colors from '../../../components/Colors';
import { useTranslation } from 'react-i18next';

interface PeopleTableProps {
  people: Person[];
  onDelete: (id: number) => void;
  onEdit: (person: Person) => void;
}

const PeopleTable: React.FC<PeopleTableProps> = ({ people, onDelete, onEdit }) => {
 
  const { t } = useTranslation();
  const { width: windowWidth } = useWindowDimensions()

  const columns: { header: string; accessor?: keyof Person; width?: number; minRowWidth?: number;
      render?: (value: any, row: Person) => React.ReactNode }[] = [
      { header: t('Nombre'), accessor: 'name' },
      { header: t('Edad'), accessor: 'age' },
      {
        header: t('Direcciones'),
        render: (_: any, row: Person) => {
          const streets = row.streets ?? [];
          const cities = row.cities ?? [];

          const directions = streets.map((street, index) => ({
            street,
            city: cities[index] ?? t("Ciudad desconocida"),
          }));

          return (
            <View style={{ flexDirection: 'column' }}>
              {directions.map((direction, index) => (
                <Text key={index}>
                  {direction.street} ({direction.city})
                </Text>
              ))}
            </View>
          );
        },
      },
      {
        header: t('Proyectos'), accessor:'projectNames',
      },
      {
        header: t('Acciones'), minRowWidth: 180,
        render: (_: any, row: Person, rowIndex?: number) => {
        const isEven = (rowIndex ?? 0) % 2 === 0;
        const backgroundColor = isEven ? '#f0f0f0' : '#f9f9f9';
        if (windowWidth < 600){
            return (
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <View style = {{backgroundColor}}>
                        <Button title= {t("Modificar")} onPress={() => onEdit(row)} type='associate' />
                    </View>
                    <View>
                        <Button title={t("Eliminar")} onPress={() => onDelete(row.id)} type='delete' />
                    </View>
                </View>
            )
        }
        return (
          <View style={{ flexDirection: 'column', gap: 10 }}>
            <View style = {{backgroundColor}}>
              <Button title= {t("Modificar")} onPress={() => onEdit(row)} type='associate' />
            </View>
            <View>
              <Button title={t("Eliminar")} onPress={() => onDelete(row.id)} type='delete' />
            </View>
          </View>
        );
      }
    }
  ];

  return (
    <Table columns={columns} data={people} minRowHeight={50} />
  );
};

export default PeopleTable;

import React, { useContext, useState } from 'react';
import type { Person } from '../../../types/IPerson';
import { View, Text, useWindowDimensions } from 'react-native';
import Table from '../../../components/Table';
import Button from '../../../components/Button';
import { useTranslation } from 'react-i18next';
import { Authority, hasAuthority } from '../../../hooks/UseAuthority';
import { UserContext } from '../../../context/UserContext';
import { useTheme } from '../../../context/ThemeContext';
import { highlightText } from '../../../components/HighlightText';
import Icon from '../../../components/Icon';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

interface PeopleTableProps {
  people: Person[];
  onDelete: (id: number) => void;
  onEdit: (person: Person) => void;
  setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const PeopleTable: React.FC<PeopleTableProps> = ({ people, onDelete, onEdit, setShowModalForm }) => {
  const { t } = useTranslation();
  const { width: windowWidth } = useWindowDimensions();
  const { authorities } = useContext(UserContext);
  const { colors } = useTheme();
  const [deleteModal, setDeleteModal] = useState(false);

  const renderHeaderButton = (hasAuthority(authorities, Authority.ROLE_PEOPLE) || hasAuthority(authorities, Authority.ROLE_ADMIN)) && (
    <View style={{ alignItems: 'flex-start' }}>
      <Button
        title={t('button.add.person')}
        onPress={() => setShowModalForm(true)}
        height={50}
        color={colors.whiteText}
        style={{ backgroundColor: colors.darksteel, borderRadius: 6 }}
        width={windowWidth * 0.1}
      />
    </View>
  );

  const columns: {
    header: string;
    accessor?: keyof Person;
    sortable?: boolean;
    filterable?: boolean;
    width?: number;
    minRowWidth?: number;
    render?: (
      value: any,
      row: Person,
      rowIndex?: number,
      highlightText?: (text: string, highlight: string) => React.ReactNode,
      highlight?: string,
    ) => React.ReactNode;
  }[] = [
    {
      header: t('columns.name'),
      accessor: 'name',
      sortable: true,
      filterable: true,
      render: (value, row, _, highlightText, highlight) => (
        <Text style={{color: colors.text}}>{highlightText ? highlightText(String(value), highlight || '') : String(value)}</Text>
      ),
    },
    {
      header: t('columns.age'),
      accessor: 'age',
      sortable: true,
      render: (value, row, _, highlightText, highlight) => (
        <Text style={{color: colors.text}}>{highlightText ? highlightText(String(value), highlight || '') : String(value)}</Text>
      ),
    },
    {
      header: t('columns.addresses'),
      accessor: 'streets',
      filterable: true,
      sortable: true,
      render: (
        value: any,
        row: Person,
        rowIndex?: number,
        highlightTextFunc?: (text: string, highlight: string) => React.ReactNode,
        highlight?: string,
      ) => {
        const streets = row.streets ?? [];
        const cities = row.cities ?? [];
        const ids = row.addressIds ?? [];
        const count = Math.min(streets.length, cities.length, ids.length);

        const directions = Array.from({ length: count }).map((_, index) => ({
          id: ids[index],
          street: streets[index] || t('unknown.street'),
          city: cities[index] || t('unknown.city'),
        }));

        return (
          <View style={{ flexDirection: 'column' }}>
            {directions.map((d, index) => (
              <Text style={{color: colors.text}} key={d.id ?? index}>
                {highlightTextFunc ? highlightTextFunc(`${d.street} (${d.city})`, highlight || '') : `${d.street} (${d.city})`}
              </Text>
            ))}
          </View>
        );
      },
    },
    {
      header: t('columns.projects'),
      accessor: 'projectNames' as keyof Person,
      filterable: true,
      sortable: true,
      render: (value: Person['projectNames'], _, __, highlightText, filterValue) => {
        const projectsText = Array.isArray(value) ? value.join(', ') : (value ?? ' ');
        return (
          <View style={{ flexWrap: 'wrap' }}>
            <Text style={{color: colors.text, flexShrink: 1 }}>{highlightText ? highlightText(projectsText, filterValue || '') : projectsText}</Text>
          </View>
        );
      },
    },
    ...(hasAuthority(authorities, Authority.ROLE_PEOPLE) || hasAuthority(authorities, Authority.ROLE_ADMIN)
      ? [
          {
            header: t('columns.actions'),
            minRowWidth: 180,
            render: (_: any, row: Person) => {
              const backgroundColor = colors.lightsteel;
              if (windowWidth < 600) {
                return (
                  <View style={{ flex: 1, flexDirection: 'row', gap: 10 }}>
                    <View style={{ backgroundColor }}>
                      <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Button title={t('button.edit')} type="associate" onPress={() => onEdit(row)} />
                        <View style = {{marginLeft: 2, marginTop: 2}}>
                          <Icon icon={faPenToSquare} size={14} color={colors.darksteel} />
                        </View>
                      </View>
                    </View>

                    <View style={{ backgroundColor: colors.lightRed }}>
                      <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Button title={t('button.delete')} type="associate" onPress={() => onDelete(row.id)} />
                        <View style = {{marginLeft: 2, marginTop: 2}}>
                         <Icon icon={faTrashCan} size={14} color={colors.darksteel} />
                        </View>
                     </View>
                    </View>
                  </View>
                );
              }
              return (
                <View style={{ flex: 1, flexDirection: 'column', gap: 10 }}>
                  <View style={{ backgroundColor }}>
                    <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                      <Button title={t('button.edit')} type="associate" onPress={() => onEdit(row)} />
                      <View style = {{marginLeft: 6, marginTop: 2}}>
                        <Icon icon={faPenToSquare} size={14} color={colors.darksteel} />
                      </View>
                    </View>
                  </View>

                  <View style={{ backgroundColor: colors.lightRed }}>
                    <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Button title={t('button.delete')} type="associate" onPress={() => onDelete(row.id)} />
                      <View style = {{marginLeft: 2, marginTop: 2}}>
                        <Icon icon={faTrashCan} size={14} color={colors.darksteel} />
                      </View>
                    </View>
                  </View>
                </View>
              );
            },
          },
        ]
      : []),
  ];

  return <Table columns={columns} data={people} minRowHeight={50} renderHeaderButton={renderHeaderButton} paginationEnabled />;
};

export default PeopleTable;

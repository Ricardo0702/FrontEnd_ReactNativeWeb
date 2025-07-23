import React from 'react';
import type { Role } from '../../../../types/IRole';
import { useWindowDimensions, View, Text } from 'react-native';
import Table from '../../../../components/Table';
import Button from '../../../../components/Button';
import { useTheme } from '../../../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import Icon from '../../../../components/Icon';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

interface RoleTableProps {
  roles: Role[];
  onDelete: (id: number) => void;
  onEdit: (role: Role) => void;
  setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const RolesTable: React.FC<RoleTableProps> = ({ roles, onDelete, onEdit, setShowModalForm }) => {
  const { t } = useTranslation();
  const { width: windowWidth } = useWindowDimensions();
  const { colors } = useTheme();

  const renderHeaderButton = (
    <View style={{ alignItems: 'flex-start' }}>
      <Button
        title={t('button.add.role')}
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
    accessor?: keyof Role;
    width?: number;
    filterable?: boolean;
    sortable?: boolean;
    render?: (
              value: any,
              row: Role,
              rowIndex?: number,
              highlightText?: (text: string, highlight: string) => React.ReactNode,
              highlight?: string,
            ) => React.ReactNode;
  }[] = [
    {
      header: t('columns.name'),
      accessor: 'name',
      filterable: true,
      sortable: true,
      render: (value, row, _, highlightText, highlight) => (
                    <Text style={{color: colors.text}}>{highlightText ? highlightText(String(value), highlight || '') : String(value)}</Text>
                  ),
    },
    {
      header: t('columns.description'),
      accessor: 'description',
      filterable: true,
      sortable: true,
      render: (value, row, _, highlightText, highlight) => (
                    <Text style={{color: colors.text}}>{highlightText ? highlightText(String(value), highlight || '') : String(value)}</Text>
                  ),
    },
    {
      header: t('columns.actions'),
      render: (_: any, row: Role) => {
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
  ];

  return <Table columns={columns} data={roles} minRowHeight={50} renderHeaderButton={renderHeaderButton} paginationEnabled />;
};

export default RolesTable;

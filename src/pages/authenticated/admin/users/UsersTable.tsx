import React from 'react';
import type { User } from '../../../../types/IUser';
import { View, useWindowDimensions, Text } from 'react-native';
import Table from '../../../../components/Table';
import Button from '../../../../components/Button';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../../context/ThemeContext';
import Icon from '../../../../components/Icon';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

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
        color={ colors.whiteText }
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
      render: (value, row, _, highlightText, highlight) => (
              <Text style={{color: colors.text}}>{highlightText ? highlightText(String(value), highlight || '') : String(value)}</Text>
            ),
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
            <Text style={{ flexShrink: 1, color: colors.text }}>{highlightText ? highlightText(rolesText, filterValue || '') : rolesText}</Text>
          </View>
        );
      },
    },
    {
      header: t('columns.baseColors'),
      accessor: 'baseColors',
      filterable: true,
      sortable: true,
      render: (value: User['baseColors'], _, __, highlightText, filterValue) => {
        const baseColorsText = Array.isArray(value) ? value.join(', ') : (value ?? ' ');
        return(
          <View style={{ flexWrap: 'wrap' }}>
            <Text style={{ flexShrink: 1, color: colors.text }}>{highlightText ? highlightText(baseColorsText, filterValue || '') : baseColorsText}</Text>
          </View>
        )
      }
    },
    {
      header: t('columns.actions'),
      minRowWidth: 180,
      render: (_: any, row: User) => {
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

  return <Table columns={columns} data={users} minRowHeight={50} renderHeaderButton={renderHeaderButton} paginationEnabled />;
};

export default UsersTable;

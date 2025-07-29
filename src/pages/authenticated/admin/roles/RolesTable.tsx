import React from 'react';
import type { Role } from '../../../../types/IRole';
import { useWindowDimensions, View, Text, TouchableOpacity } from 'react-native';
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
        width={windowWidth * 0.15}
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
            <View style={{ flexDirection: 'row', gap: 20, justifyContent: 'center' }}>
              <TouchableOpacity
                onPress={() => onEdit(row)}
                style={{ justifyContent: 'center', alignItems: 'center', padding: 6, borderRadius: 4 }}
              >
                <Icon icon={faPenToSquare} size={20} color={colors.darksteel} title = 'Edit' />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onDelete(row.id)}
                style={{ justifyContent: 'center', alignItems: 'center', padding: 6, borderRadius: 4 }}
              >
                <Icon icon={faTrashCan} size={20} color={colors.midRed} title = 'Delete' />
              </TouchableOpacity>
            </View>
          );
        }
        return (
          <View style={{ flexDirection: 'row', gap: 20, justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() => onEdit(row)}
              style={{ justifyContent: 'center', alignItems: 'center', padding: 6, borderRadius: 4 }}
            >
              <Icon icon={faPenToSquare} size={20} color={colors.darksteel} title = 'Edit' />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onDelete(row.id)}
              style={{ justifyContent: 'center', alignItems: 'center', padding: 6, borderRadius: 4 }}
            >
              <Icon icon={faTrashCan} size={20} color={colors.midRed} title = 'Delete' />
            </TouchableOpacity>
          </View>
        );
      },
    },
  ];

  return <Table columns={columns} data={roles} minRowHeight={50} renderHeaderButton={renderHeaderButton} paginationEnabled />;
};

export default RolesTable;

import React, { useContext } from 'react';
import type { Project } from '../../../types/IProject';
import { useWindowDimensions, View, Text, TouchableOpacity } from 'react-native';
import Table from '../../../components/Table';
import Button from '../../../components/Button';
import { useTheme } from '../../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Authority, hasAuthority } from '../../../hooks/UseAuthority';
import { UserContext } from '../../../context/UserContext';
import Icon from '../../../components/Icon';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

interface ProjectTableProps {
  projects: Project[];
  onDelete: (id: number) => void;
  onEdit: (project: Project) => void;
  setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectsTable: React.FC<ProjectTableProps> = ({ projects, onDelete, onEdit, setShowModalForm }) => {
  const { t } = useTranslation();
  const { width: windowWidth } = useWindowDimensions();
  const { authorities } = useContext(UserContext);
  const { colors } = useTheme();

  const renderHeaderButton = (hasAuthority(authorities, Authority.ROLE_PROJECTS) || hasAuthority(authorities, Authority.ROLE_ADMIN)) && (
    <View style={{ alignItems: 'flex-start' }}>
      <Button
        title={t('button.add.project')}
        onPress={() => setShowModalForm(true)}
        height={50}
        color={ colors.whiteText}
        style={{ backgroundColor: colors.darksteel, borderRadius: 6 }}
        width={windowWidth * 0.15}
      />
    </View>
  );

  const columns: {
    header: string;
    accessor?: keyof Project;
    filterable?: boolean;
    sortable?: boolean;
    width?: number;
    render?: (
          value: any,
          row: Project,
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
    ...(hasAuthority(authorities, Authority.ROLE_PROJECTS) || hasAuthority(authorities, Authority.ROLE_ADMIN)
      ? [
          {
            header: t('columns.actions'),
            render: (_: any, row: Project) => {
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
        ]
      : []),
  ];

  return <Table columns={columns} data={projects} minRowHeight={50} renderHeaderButton={renderHeaderButton} paginationEnabled widthFactor={0.6}/>;
};

export default ProjectsTable;

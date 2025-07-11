import React, { useContext } from 'react';
import type { Project } from '../../../types/IProject';
import { useWindowDimensions, View } from 'react-native';
import Table from '../../../components/Table';
import Button from '../../../components/Button';
import { useTheme } from '../../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Authority, hasAuthority } from '../../../hooks/UseAuthority';
import { UserContext } from '../../../context/UserContext';

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
        color="white"
        style={{ backgroundColor: colors.darksteel, borderRadius: 6 }}
        width={windowWidth * 0.1}
      />
    </View>
  );

  const columns: {
    header: string;
    accessor?: keyof Project;
    filterable?: boolean;
    sortable?: boolean;
    width?: number;
    render?: (value: any, row: Project, rowIndex?: number) => React.ReactNode;
  }[] = [
    {
      header: t('columns.name'),
      accessor: 'name',
      filterable: true,
      sortable: true,
    },
    ...(hasAuthority(authorities, Authority.ROLE_PROJECTS) || hasAuthority(authorities, Authority.ROLE_ADMIN)
      ? [
          {
            header: t('columns.actions'),
            render: (_: any, row: Project) => {
              const backgroundColor = colors.lightsteel;
              if (windowWidth < 600) {
                return (
                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    <View style={{ backgroundColor }}>
                      <Button title={t('button.edit')} type="associate" onPress={() => onEdit(row)} />
                    </View>

                    <View style={{ backgroundColor: colors.lightRed }}>
                      <Button title={t('button.delete')} onPress={() => onDelete(row.id)} type="associate" />
                    </View>
                  </View>
                );
              }
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 16,
                  }}
                >
                  <View style={{ backgroundColor }}>
                    <Button title={t('button.edit')} type="associate" onPress={() => onEdit(row)} width={windowWidth * 0.15} />
                  </View>

                  <View style={{ backgroundColor: colors.lightRed }}>
                    <Button title={t('button.delete')} onPress={() => onDelete(row.id)} type="associate" width={windowWidth * 0.15} />
                  </View>
                </View>
              );
            },
          },
        ]
      : []),
  ];

  return <Table columns={columns} data={projects} minRowHeight={50} renderHeaderButton={renderHeaderButton} paginationEnabled />;
};

export default ProjectsTable;

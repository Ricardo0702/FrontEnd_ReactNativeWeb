import React, { useContext } from 'react';
import type { Project } from '../../../types/IProject';
import { useWindowDimensions, View } from 'react-native';
import Table from '../../../components/Table';
import Button from '../../../components/Button';
import colors from '../../../components/Colors';
import { useTranslation } from 'react-i18next';
import { Authority, hasAuthority } from '../../../hooks/UseAuthority';
import { UserContext } from '../../../context/UserContext';

interface ProjectTableProps {
  projects: Project[];
  onDelete: (id: number) => void;
  onEdit: (project: Project) => void;
}

const ProjectsTable: React.FC<ProjectTableProps> = ({ projects, onDelete, onEdit }) => {
  const { t } = useTranslation();
  const {width: windowWidth} = useWindowDimensions();
  const { authorities } = useContext(UserContext);

  const columns: { header: string; accessor?: keyof Project; width?: number; render?: (value: any, row: Project, rowIndex?: number) => React.ReactNode }[] = [
    { header: t('columns.name'), accessor: 'name' }, 
    ...(hasAuthority(authorities, Authority.ROLE_PROJECTS) || hasAuthority(authorities, Authority.ROLE_ADMIN) ? [
      {
        header: t('columns.actions'), 
        render: (_: any, row: Project, rowIndex?: number) => {
          const isEven = (rowIndex ?? 0) % 2 === 0;
          const backgroundColor = isEven ? '#f0f0f0' : '#f9f9f9';
          if ( windowWidth < 600 ){
              return(
                  <View style={{ flexDirection: 'row', gap: 10 }}>
                      <View style={{ backgroundColor }}>
                          <Button title={t("button.edit")} type="associate" onPress={() => onEdit(row)}/>
                      </View>
                      
                      <View style={{ backgroundColor: colors.lightRed }}>
                          <Button title={t("button.delete")} onPress={() => onDelete(row.id)} type="associate"   />
                      </View>
                  </View>
              )
          }
          return (
            <View style={{ flexDirection: 'column', gap: 10 }}>
              <View style={{ backgroundColor }}>
                <Button title={t("button.edit")} type="associate" onPress={() => onEdit(row)}/>
              </View>

              <View style={{ backgroundColor: colors.lightRed }}>
                <Button title={t("button.delete")} onPress={() => onDelete(row.id)} type="associate"   />
              </View>
            </View>
          );
        }
      }
    ] : [])
  ];

  return (
    <Table columns={columns} data={projects} minRowHeight={50} widthFactor={0.4} />
  );
};

export default ProjectsTable;

import React, { useEffect, useState } from 'react';
import { fetchProjects, createProject, deleteProject, updateProject } from '../../../services/ProjectService';
import type { Project } from '../../../types/IProject';
import Modal from '../../../components/modal/Modal';
import Table from '../../../components/table/Table';
import Button from '../../../components/button/Button';
import TextInput from '../../../components/textInput/TextInput';
import colors from '../../../components/colors/Colors';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Title from '../../../components/title/Title';
import { saveRecentChange } from '../../../services/localStorage';
import { Skeleton } from '../../../components/skeleton/Skeleton';

const ProjectsDashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModalForm, setShowModalForm] = useState(false);
  const [showUpdateModal, setUpdateModal] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      const data = await fetchProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error al cargar los proyectos: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateProject = async () => {
    try {
      const newProject = await createProject(projectName);
      saveRecentChange({
        type: 'Proyecto',
        action: 'Añadido/a',
        name: newProject.name,
        timestamp: Date.now(),
      });
      fetchData();
      setShowModalForm(false);
      setProjectName('');
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
    }
  };

  const handleDeleteProject = async (projectId: number) => {
    try {
      const deletedProject = projects.find(p => p.id === projectId);
      await deleteProject(projectId);
      setProjects(prev => prev.filter(p => p.id !== projectId));

      if (deletedProject) {
        saveRecentChange({
          type: 'Proyecto',
          action: 'Eliminado/a',
          name: deletedProject.name,
          timestamp: Date.now(),
        });
      }
    } catch (error) {
      console.error("Error al eliminar el proyecto: ", error);
    }
  };

  const handleUpdateProject = async (projectId: number, projectName: string) => {
    try {
      await updateProject(projectId, projectName);
      saveRecentChange({
        type: 'Proyecto',
        action: 'Editado/a',
        name: projectName,
        timestamp: Date.now()
      });
      fetchData();
      setUpdateModal(false);
      setProjectName('');
    } catch (error) {
      console.error("Error al modificar el proyecto: ", error);
    }
  };

  const columns: { header: string; accessor?: keyof Project; width?: number; render?: (value: any, row: Project, rowIndex?: number) => React.ReactNode }[] = [
    { header: 'Nombre', accessor: 'name' }, //, width: 300
    {
      header: 'Acciones', // width: 300,
      render: (_: any, row: Project, rowIndex?: number) => {
        const isEven = (rowIndex ?? 0) % 2 === 0;
        const backgroundColor = isEven ? '#f0f0f0' : '#f9f9f9';
        return (
          <View style={{ flexDirection: 'column', gap: 10 }}>
            <View style={{ backgroundColor }}>
              <Button
                title="Modificar"
                type="associate"
                onPress={() => {
                  setSelectedProjectId(row.id);
                  setProjectName(row.name);
                  setUpdateModal(true);
                }}
              />
            </View>
            <View style={{ backgroundColor: colors.lightRed }}>
              <Button title="Eliminar" onPress={() => handleDeleteProject(row.id)} type="associate"   />
            </View>
          </View>
        );
      }
    }
  ];

  const skeletonRows = Array.from({ length: 5 }, (_, i) => (
    <View key={i} style={{ flexDirection: 'row', gap: 20, marginBottom: 12 }}>
      <Skeleton width={300} height={20} />
      <Skeleton width={150} height={35} />
    </View>
  ));

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{ paddingBottom: 10 }}>
          <Title text='Proyectos Registrados' size='xl' align='center' underline />
        </View>

        <View style={styles.tableContainer}>
          {isLoading ? skeletonRows : (
            <Table columns={columns} data={projects} minRowHeight={50} />
          )}
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button title="Añadir Proyecto" onPress={() => setShowModalForm(true)} type='add' />
        </View>
      </ScrollView>

      <Modal title="Modificar proyecto" visible={showUpdateModal} onClose={() => setUpdateModal(false)} size="xs">
        <View>
          <TextInput label='Nombre del proyecto' value={projectName} onChangeText={setProjectName} style={styles.input} autoFocus />
          <Button
            title="Guardar"
            onPress={() => {
              if (selectedProjectId !== null) {
                handleUpdateProject(selectedProjectId, projectName);
              }
            }}
            type='save'
          />
        </View>
      </Modal>

      <Modal title="Añadir Proyecto" visible={showModalForm} onClose={() => setShowModalForm(false)} size="xs">
        <View>
          <TextInput label='Nombre del proyecto' value={projectName} onChangeText={setProjectName} style={styles.input} autoFocus />
          <Button title="Guardar" onPress={handleCreateProject} type='save' />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 60,
    width: '100%',
    marginHorizontal: 'auto',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    justifyContent: 'flex-start',
  },
  tableContainer: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
  },
});

export default ProjectsDashboard;

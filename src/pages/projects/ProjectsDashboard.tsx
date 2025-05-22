import React, { useEffect, useState } from 'react';
import { fetchProjects, createProject, deleteProject, updateProject } from '../../services/ProjectService';
import type { Project } from '../../types/Project';
import Modal from '../../components/modal/Modal';
import Table from '../../components/table/Table';
import Button from '../../components/button/Button';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import Title from '../../components/title/Title';
import { saveRecentChange } from '../../services/localStorage';


const ProjectsDashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showModalForm, setShowModalForm] = useState(false);
  const [showUpdateModal, setUpdateModal] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const fetchData = async () => {
    try {
      const data = await fetchProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error al cargar los proyectos: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateProject = async () => {
    try {
      const newPerson = await createProject(projectName);
      
      saveRecentChange({
        type: 'Proyecto',
        action: 'Añadido/a',
        name: newPerson.name,
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
      setProjects((prevProjects) => prevProjects.filter((project) => project.id !== projectId));

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
    try{
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
    } catch(error){
      console.error("Error al modificar el proyecto: ", error);
    }
  };

  const columns: { header: string; accessor?: keyof Project; width?: number; 
    render?: (value: any, row: Project) => React.ReactNode }[] = [
    { header: 'ID', accessor: 'id', width: 80 },
    { header: 'Nombre', accessor: 'name', width: 300 },
    { header: 'Acciones', width: 300, render: (_,row) => (
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Button 
          title="Eliminar" 
          onPress={() => handleDeleteProject(row.id)} 
          type = 'delete'
        />
        <Button
          title = "Modificar"
          onPress = {() => {
            setSelectedProjectId(row.id);
            setProjectName(row.name);
            setUpdateModal(true);
          }}
          type = 'associate'
        />
      </View>
    ),}
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{paddingBottom: 10}}>
          <Title
            text = 'Proyectos Registrados'
            size = 'xl'
            align = 'center'
            underline
          />
        </View>
        <View style={styles.tableContainer}>
          <Table
            columns={columns}
            data={projects}
            minRowHeight={50}   
          />
        </View>
        <View style = {{alignItems: 'center'}}>
          <Button
              title="Añadir Proyecto"
              onPress={() => setShowModalForm(true)}
              type = 'add'
            />
        </View>
      </ScrollView>

      <Modal
        title = "Modificar proyecto"
        visible = {showUpdateModal}
        onClose = {() => setUpdateModal(false)}
        size = "xs"
      >
        <View>
          <Text style={styles.label}> Nombre:</Text>
          <TextInput
            value = {projectName}
            onChangeText = {setProjectName}
            style= {styles.input}
            placeholder='Nombre del proyecto'
            autoFocus
          />
          <Button
            title= "Guardar"
            onPress={() => {
              if (selectedProjectId !== null) {
                handleUpdateProject(selectedProjectId, projectName);
              }
            }} 
            type = 'save'
          />
        </View>
      </Modal>

      <Modal
        title="Añadir Proyecto"
        visible={showModalForm}
        onClose={() => setShowModalForm(false)}
        size="xs"
      >
        <View>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            value={projectName}
            onChangeText={setProjectName}
            style={styles.input}
            placeholder="Nombre del proyecto"
            autoFocus
          />
          <Button 
            title="Guardar" 
            onPress={handleCreateProject} 
            type = 'save'
          />
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
    width: '90%',
    maxWidth: '100%',
    marginHorizontal: 'auto',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addPeople: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

 tableContainer: 
  { marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  label: {
    marginBottom: 5,
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

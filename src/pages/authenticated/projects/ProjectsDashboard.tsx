import React, { useEffect, useState } from 'react';
import { fetchProjects, createProject, deleteProject, updateProject } from '../../../services/ProjectService';
import type { Project } from '../../../types/IProject';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import TextInput from '../../../components/TextInput';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Title from '../../../components/Title';
import { saveRecentChange } from '../../../services/localStorage';
import { Skeleton } from '../../../components/Skeleton';
import { useTranslation } from 'react-i18next';
import ProjectsTable from './ProjectsTable';

const ProjectsDashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModalForm, setShowModalForm] = useState(false);
  const [showUpdateModal, setUpdateModal] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const {t} = useTranslation();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      const data = await fetchProjects();
      setProjects(data);
    } catch (error) {
      console.error(t('error.loading.projects'), error);
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
        type: t('type.project'),
        action: t('action.added'),
        name: newProject.name,
        timestamp: Date.now(),
      });
      fetchData();
      setShowModalForm(false);
      setProjectName('');
    } catch (error) {
      console.error(t('error.creating.project'), error);
    }
  };

  const handleDeleteProject = async (projectId: number) => {
    try {
      const deletedProject = projects.find(p => p.id === projectId);
      await deleteProject(projectId);
      setProjects(prev => prev.filter(p => p.id !== projectId));

      if (deletedProject) {
        saveRecentChange({
          type: t('type.project'),
          action: t('action.deleted'),
          name: deletedProject.name,
          timestamp: Date.now(),
        });
      }
    } catch (error) {
      console.error(t("error.deleting.project"), error);
    }
  };

  const handleEditProject = (project: Project) => {
      setSelectedProjectId(project.id);
      setProjectName(project.name);
      setUpdateModal(true);
    };

  const handleUpdateProject = async (projectId: number, projectName: string) => {
    try {
      await updateProject(projectId, projectName);
      saveRecentChange({
        type: t('type.project'),
        action: t('action.edited'),
        name: projectName,
        timestamp: Date.now()
      });
      fetchData();
      setUpdateModal(false);
      setProjectName('');
    } catch (error) {
      console.error(t("error.editing.project"), error);
    }
  };

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
          <Title text={t('title.registered.projects')} size='xl' align='center' underline />
        </View>

        <View style={styles.tableContainer}>
          {isLoading ? skeletonRows : (
            <ProjectsTable projects = {projects} onDelete={handleDeleteProject} onEdit={handleEditProject} />
          )}
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button title={t("button.add.project")} onPress={() => setShowModalForm(true)} type='add' />
        </View>
      </ScrollView>

      <Modal title={t("modal.edit.project")} visible={showUpdateModal} onClose={() => setUpdateModal(false)} size="xs">
        <View>
          <TextInput label={t('label.project.name')} value={projectName} onChangeText={setProjectName} style={styles.input} autoFocus />
          <Button
            title={t("button.save")}
            onPress={() => {
              if (selectedProjectId !== null) {
                handleUpdateProject(selectedProjectId, projectName);
              }
            }}
            type='save'
          />
        </View>
      </Modal>

      <Modal title={t("modal.add.project")} visible={showModalForm} onClose={() => setShowModalForm(false)} size="xs">
        <View>
          <TextInput label={t('label.project.name')} value={projectName} onChangeText={setProjectName} style={styles.input} autoFocus />
          <Button title={t("button.saver")} onPress={handleCreateProject} type='save' />
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

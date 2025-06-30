import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { updatePerson, associateProject, removeProject } from '../../../services/PersonService';
import { fetchProjects, fetchProject } from '../../../services/ProjectService';
import { fetchDirections, createDirection, deleteDirection, associatePerson, removePerson } from '../../../services/DirectionService';
import { Direction } from '../../../types/IDirection';
import { Project } from '../../../types/IProject';
import { Person } from '../../../types/IPerson';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import { saveRecentChange } from '../../../services/localStorage';
import Title from '../../../components/Title';
import Select from '../../../components/Select';
import { useTranslation } from 'react-i18next';

type Props = {
  personId: number | null;
  personForm: Person;
  onUpdatePerson: (updatedPerson: Person) => void;
};

export default function PersonModification({ personId, personForm, onUpdatePerson }: Props) {
  const [localPerson, setLocalPerson] = useState<Person>(personForm);
  const {t} = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [directions, setDirections] = useState<Direction[]>([]);
   const [newProjectId, setNewProjectId] = useState<number | undefined>(undefined);
  const [newStreet, setNewStreet] = useState('');
  const [newCity, setNewCity] = useState('');
  const [associatedProjects, setAssociatedProjects] = useState<Project[]>([]);

  const loadAssociatedProjects = async () => {
    if (!localPerson.projectIds || localPerson.projectIds.length === 0) {
      setAssociatedProjects([]);
      return;
    }
    try {
      const projectsData = await Promise.all(
        localPerson.projectIds.map((id) => fetchProject(id))
      );
      setAssociatedProjects(projectsData);
    } catch (error) {
      console.error(t('error.loading.associated.projects'), error);
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const [responseProjects, responseDirections] = await Promise.all([
          fetchProjects(),
          fetchDirections()
        ]);
        setProjects(responseProjects);
        setDirections(responseDirections);
      } catch (error) {
        console.error(t('error.loading.data'), error);
      }
    };
    loadInitialData();
    loadAssociatedProjects();
  }, []);

  const handleUpdate = async () => {
    if (personId === null) return;
    await updatePerson( personId, localPerson.name, localPerson.age );
    saveRecentChange({ type: t('type.persona'), action: t('action.editado/a'), name: localPerson.name, timestamp: Date.now() });
    onUpdatePerson(localPerson);
  };

  const handleAddProject = async (project: Project, updatedPerson: Person) => {
    if (personId === null || !newProjectId) return;
    onUpdatePerson(updatedPerson);
    await associateProject(personId, newProjectId);
    setAssociatedProjects(prev => [...prev, project])

    const projectFound = projects.find(p => p.id === newProjectId);
    if (localPerson && projectFound) {
      saveRecentChange({
        type: t('type.person'),
        action: t('action.edited'),
        name: `Persona "${localPerson.name}" Asociado al proyecto "${projectFound.name}"`,
        timestamp: Date.now()
      });
    }
  };

  const handleRemoveProject = async (projectId: number, updatedPerson: Person) => {
    if (personId === null) return;
    onUpdatePerson(updatedPerson);
    await removeProject(personId, projectId);
    setAssociatedProjects(prev => prev.filter(pr => pr.id !== projectId))

    const projectFound = projects.find(p => p.id === projectId);
    if (localPerson && projectFound) {
      saveRecentChange({
        type: t('type.person'),
        action: t('action.edited'),
        name: `Proyecto "${projectFound.name}" eliminado de persona: "${localPerson.name}"`,
        timestamp: Date.now()
      });
    }
  };

  const handleAddDirection = async (direction: Direction, updatedPerson: Person) => {
    if (personId === null) return;
    onUpdatePerson(updatedPerson);
    await associatePerson(direction.id, personId);
    setDirections(prev => [...prev, direction]);
    if (localPerson && direction) {
      saveRecentChange({
        type: t('type.person'),
        action: t('action.edited'),
        name: `Dirección "${direction.street}"("${direction.city}") añadida a persona: "${localPerson.name}"`,
        timestamp: Date.now()
      });
    }
  };

  const handleRemoveDirection = useCallback(async (directionId: number, updatedPerson: Person) => {
    if (personId === null) return;
    onUpdatePerson(updatedPerson);
    await removePerson(directionId, personId);
    await deleteDirection(directionId);
    setDirections(prev => prev.filter(d => d.id !== directionId));
    
    const directionFound = directions.find(d => d.id === directionId);
    if (localPerson && directionFound) {
      saveRecentChange({
        type: t('type.person'),
        action: t('action.edited'),
        name: `Dirección "${directionFound.street}"("${directionFound.city}") eliminada de persona: "${localPerson.name}"`,
        timestamp: Date.now()
      });
      saveRecentChange({
        type: t('type.address'),
        action: t('action.deleted'),
        name: `"${directionFound.street}"("${directionFound.city}") eliminada de persona: "${localPerson.name}"`,
        timestamp: Date.now()
      });
    }
  }, [localPerson,directions]);

  return (
    <View style={styles.container}>
      <Title text={t('title.edit.person')} type='Subtitle' style={{ marginBottom: 20 }} />
      <TextInput 
        label={t('label.Name')} value={localPerson.name} inputStyle={styles.input} 
        onChangeText={(value: string) => setLocalPerson({ ...localPerson, name: value })} />
      <TextInput
        label={t('label.age')} value={localPerson.age} keyboardType="numeric" inputStyle={styles.input}
        onChangeText={(value: string) => setLocalPerson({...localPerson, age: parseInt(value)})} />
        
      <Button title={t("button.save")} onPress={handleUpdate} type="save" />

      <Title text={t('title.associated.projects')} type='Subtitle' style={{ marginTop: 20, marginBottom: 20 }} />
      {(localPerson.projectIds || []).map((id) => {
        const project = projects.find(p => p.id === id);
        if (!project) return null;
        return (
          <View key={id} style={styles.listItem}>
            <Text>{project.name}</Text>
            <Button title={t("button.delete")} type="delete" 
              onPress={() => { 
                const updatedPerson = { ...localPerson, 
                  projectIds: localPerson.projectIds?.filter(prId => prId !== id) ?? null, 
                  projectNames: localPerson.projectNames?.filter(n => n !== project.name) ?? null
                };
                setLocalPerson(updatedPerson);
                handleRemoveProject(id, updatedPerson);
              }} />
          </View>
        );
      })}

      <Title text={t('title.add.project')} type='Subtitle' style={{ marginTop: 20, marginBottom: 20 }} />
      <Select
        selectedValue={newProjectId}
        onValueChange={(value) => {
          if (typeof value === 'string') {
            const parsed = parseInt(value, 10);
            setNewProjectId(isNaN(parsed) ? undefined : parsed);
          } else {
            setNewProjectId(value);
          }
        }}
        options={projects.map((project) => ({
          label: project.name,
          value: project.id,
        }))}
        placeholder={t("select.project")}
      />
      <Button title={t("button.associate.project")} type='save' 
        onPress={ () => {
          const project = projects.find(p => p.id === newProjectId);
          if (project === undefined || newProjectId === undefined) return;
          const updatedPerson = { ...localPerson, 
            projectIds: [...(localPerson.projectIds ?? []), newProjectId], 
            projectNames: [...(localPerson.projectNames ?? []), project.name]
          };
          setLocalPerson(updatedPerson);
          handleAddProject(project, updatedPerson);
        }} />

      <Title text={t('title.associated.directions')} type='Subtitle' style={{ marginTop: 20, marginBottom: 20 }} />
      {(localPerson.directionIds || []).map((id) => {
        const direction = directions.find(d => d.id === id);
        if (!direction) return null;
        return (
          <View key={id} style={styles.listItem}>
            <Text>{direction.street} - {direction.city}</Text>
            <Button title={t("button.delete")} type="delete"
              onPress={() => {
                const updatedPerson = { ...localPerson, 
                  directionIds: localPerson.directionIds?.filter(dirId => dirId !== id) ?? null, 
                  streets: localPerson.streets?.filter(s => s !== direction.street) ?? null
                };
                setLocalPerson(updatedPerson);
                handleRemoveDirection(id, updatedPerson);
              }}  />
          </View>
        );
      })}

      <TextInput label={t("label.sreet")} value={newStreet} onChangeText={setNewStreet} inputStyle={styles.input} />
      <TextInput label={t("label.city")} value={newCity} onChangeText={setNewCity} inputStyle={styles.input} />
      <Button title={t("button.add.address")} type='save'
        onPress={ async () => {
          const direction = await createDirection(newStreet, newCity);
          const updatedPerson = {...localPerson,
            directionIds: [...(localPerson.directionIds ?? []), direction.id],
            streets: [...(localPerson.streets ?? []), newStreet],
            cities: [...(localPerson.cities ?? []), newCity],
          };
          setLocalPerson(updatedPerson);
          handleAddDirection(direction, updatedPerson)}}  />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 4,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
});

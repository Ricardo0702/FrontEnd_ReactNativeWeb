import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchPerson, updatePerson, createEmptyPerson, associateProject, removeProject } from '../../../services/PersonService';
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
};

export default function PersonModification({ personId }: Props) {

  const {t} = useTranslation();
  
  const [person, setPerson] = useState<Person>(createEmptyPerson());
  const [people, setPeople] = useState<Person[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [directions, setDirections] = useState<Direction[]>([]);

  const [personName, setPersonName] = useState('');
  const [personAge, setPersonAge] = useState<number>(0);

  const [newProjectId, setNewProjectId] = useState<number | undefined>(undefined);
  const [newStreet, setNewStreet] = useState('');
  const [newCity, setNewCity] = useState('');

  const [associatedProjects, setAssociatedProjects] = useState<Project[]>([]);

  const loadPerson = async () => {
    try {
      if (personId === null) return;
      const data = await fetchPerson(personId);
      setPerson(data);
      setPersonName(data.name);
      setPersonAge(data.age);
    } catch (error) {
      console.error(t('error.loading.person'), error);
    }
  };

  const loadProjects = async () => {
    try {
      const data = await fetchProjects();
      setProjects(data);
    } catch (error) {
      console.error(t('error.loading.projects'), error);
    }
  };

  const loadDirections = async () => {
    const data = await fetchDirections();
    setDirections(data);
  };

  const loadAssociatedProjects = async () => {
    if (!person.projectIds || person.projectIds.length === 0) {
      setAssociatedProjects([]);
      return;
    }
    try {
      const projectsData = await Promise.all(
        person.projectIds.map((id) => fetchProject(id))
      );
      setAssociatedProjects(projectsData);
    } catch (error) {
      console.error(t('error.loading.associated.projects'), error);
    }
  };

  useEffect(() => {
    loadPerson();
    loadProjects();
    loadDirections();
  }, []);

  useEffect(() => {
    loadAssociatedProjects();
  }, [person.projectIds]);

  const handleUpdate = async () => {
    if (personId === null) return;
    await updatePerson(personId, personName, personAge);
    await loadPerson();
    saveRecentChange({ type: t('type.persona'), action: t('action.editado/a'), name: personName, timestamp: Date.now() });
  };

  const handleAddProject = async () => {
    if (personId === null || !newProjectId) return;
    await associateProject(personId, newProjectId);
    await loadPerson();
    await loadAssociatedProjects();

    const personFound = people.find(p => p.id === personId);
    const projectFound = projects.find(p => p.id === newProjectId);

    if (personFound && projectFound) {
      saveRecentChange({
        type: t('type.person'),
        action: t('action.edited'),
        name: `Persona "${personFound.name}" Asociado al proyecto "${projectFound.name}"`,
        timestamp: Date.now()
      });
    }
  };

  const handleRemoveProject = async (projectId: number) => {
    if (personId === null) return;
    await removeProject(personId, projectId);
    await loadPerson();
    await loadAssociatedProjects();

    const personFound = people.find(p => p.id === personId);
    const projectFound = projects.find(p => p.id === projectId);

    if (personFound && projectFound) {
      saveRecentChange({
        type: t('type.person'),
        action: t('action.edited'),
        name: `Proyecto "${projectFound.name}" eliminado de persona: "${personFound.name}"`,
        timestamp: Date.now()
      });
    }
  };

  const handleAddDirection = async () => {
    if (personId === null) return;
    const direction = await createDirection(newStreet, newCity);
    await associatePerson(direction.id, personId);
    await loadPerson();
    await loadDirections();

    const personFound = people.find(p => p.id === personId);

    if (personFound && direction) {
      saveRecentChange({
        type: t('type.person'),
        action: t('action.edited'),
        name: `Dirección "${direction.street}"("${direction.city}") añadida a persona: "${personFound.name}"`,
        timestamp: Date.now()
      });
    }
  };

  const handleRemoveDirection = async (directionId: number) => {
    if (personId === null) return;
    await removePerson(directionId, personId);
    await deleteDirection(directionId);
    await loadPerson();
    await loadDirections();

    const personFound = people.find(p => p.id === personId);
    const directionFound = directions.find(d => d.id === directionId);

    if (personFound && directionFound) {
      saveRecentChange({
        type: t('type.person'),
        action: t('action.edited'),
        name: `Dirección "${directionFound.street}"("${directionFound.city}") eliminada de persona: "${personFound.name}"`,
        timestamp: Date.now()
      });
      saveRecentChange({
        type: t('type.address'),
        action: t('action.deleted'),
        name: `"${directionFound.street}"("${directionFound.city}") eliminada de persona: "${personFound.name}"`,
        timestamp: Date.now()
      });
    }
  };

  return (
    <View style={styles.container}>
      <Title text={t('title.edit.person')} type='Subtitle' style={{ marginBottom: 20 }} />
      <TextInput label={t('label.Name')} value={personName} onChangeText={setPersonName} style={styles.input} />
      <TextInput
        label={t('label.age')}
        value={personAge.toString()}
        onChangeText={(text) => setPersonAge(Number(text))}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title={t("button.save")} onPress={handleUpdate} type="save" />

      <Title text={t('title.associated.projects')} type='Subtitle' style={{ marginTop: 20, marginBottom: 20 }} />
      {(person.projectIds || []).map((id) => {
        const project = projects.find(p => p.id === id);
        if (!project) return null;
        return (
          <View key={id} style={styles.listItem}>
            <Text>{project.name}</Text>
            <Button title={t("button.delete")} onPress={() => handleRemoveProject(id)} type="delete" />
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
      <Button title={t("button.associate.project")} onPress={handleAddProject} type='save' />

      <Title text={t('title.associated.directions')} type='Subtitle' style={{ marginTop: 20, marginBottom: 20 }} />
      {(person.directionIds || []).map((id, idx) => {
        const direction = directions.find(d => d.id === id);
        if (!direction) return null;
        return(
        <View key={id} style={styles.listItem}>
          <Text>{person.streets[idx]} - {person.cities[idx]}</Text>
          <Button title={t("button.delete")} onPress={() => handleRemoveDirection(id)} type= 'delete' />
        </View>
        );
        })}

      <TextInput label={t("label.sreet")} value={newStreet} onChangeText={setNewStreet} style={styles.input} />
      <TextInput label={t("label.city")} value={newCity} onChangeText={setNewCity} style={styles.input} />
      <Button title={t("button.add.address")} onPress={handleAddDirection} type='save' />
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

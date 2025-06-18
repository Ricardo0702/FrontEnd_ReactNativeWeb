/* import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchPerson, updatePerson, associateProject, removeProject } from '../../../services/PersonService';
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

type Props = {
  personId: number | null;
};

export default function PersonModification({ personId }: Props) {
  const [person, setPerson] = useState<Person>({} as Person);
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
      console.error('Error loading person:', error);
    }
  };

  const loadProjects = async () => {
    try {
      const data = await fetchProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error al cargar los proyectos: ', error);
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
      console.error('Error cargando proyectos asociados:', error);
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
    saveRecentChange({ type: 'Persona', action: 'Editado/a', name: personName, timestamp: Date.now() });
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
        type: 'Persona',
        action: 'Editado/a',
        name: Persona "${personFound.name}" Asociado al proyecto "${projectFound.name}",
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
        type: 'Persona',
        action: 'Editado/a',
        name: Proyecto "${projectFound.name}" eliminado de persona: "${personFound.name}",
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
        type: 'Persona',
        action: 'Editado/a',
        name: Dirección "${direction.street}"("${direction.city}") añadida a persona: "${personFound.name}",
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
        type: 'Persona',
        action: 'Editado/a',
        name: Dirección "${directionFound.street}"("${directionFound.city}") eliminada de persona: "${personFound.name}",
        timestamp: Date.now()
      });
      saveRecentChange({
        type: 'Dirección',
        action: 'Eliminado/a',
        name: "${directionFound.street}"("${directionFound.city}") eliminada de persona: "${personFound.name}",
        timestamp: Date.now()
      });
    }
  };

  return (
    <View style={styles.container}>
      <Title text='Modificar Persona' type='Subtitle' style={{ marginBottom: 20 }} />
      <TextInput label='Nombre' value={personName} onChangeText={setPersonName} style={styles.input} />
      <TextInput
        label='Edad'
        value={personAge.toString()}
        onChangeText={(text) => setPersonAge(Number(text))}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Guardar cambios" onPress={handleUpdate} type="save" />

      <Title text='Proyectos Asociados' type='Subtitle' style={{ marginTop: 20, marginBottom: 20 }} />
      {(person.projectIds || []).map((id) => {
        const project = projects.find(p => p.id === id);
        if (!project) return null;
        return (
          <View key={id} style={styles.listItem}>
            <Text>{project.name}</Text>
            <Button title="Eliminar" onPress={() => handleRemoveProject(id)} type="delete" />
          </View>
        );
      })}

      <Title text='Añadir Proyecto' type='Subtitle' style={{ marginTop: 20, marginBottom: 20 }} />
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
        placeholder="Selecciona un proyecto"
      />
      <Button title="Asociar Proyecto" onPress={handleAddProject} type='save' />

      <Title text='Direcciones Asociadas' type='Subtitle' style={{ marginTop: 20, marginBottom: 20 }} />
      {(person.directionIds || []).map((id, idx) => (
        <View key={id} style={styles.listItem}>
          <Text>{person.streets[idx]} - {person.cities[idx]}</Text>
          <Button title="Eliminar" onPress={() => handleRemoveDirection(id)} type= 'delete' />
        </View>
      ))}

      <TextInput label="Calle" value={newStreet} onChangeText={setNewStreet} style={styles.input} />
      <TextInput label="Ciudad" value={newCity} onChangeText={setNewCity} style={styles.input} />
      <Button title="Añadir Dirección" onPress={handleAddDirection} type='save' />
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
}); */





import React, { useEffect, useState } from 'react';
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


  const loadDirections = async () => {
    const data = await fetchDirections();
    setDirections(data);
  };

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
  }, []);

  useEffect(() => {
    loadAssociatedProjects();
  }, [localPerson.projectIds]);

  const handleUpdate = async () => {
    if (personId === null) return;
    await updatePerson( personId, localPerson.name, localPerson.age );
    saveRecentChange({ type: t('type.persona'), action: t('action.editado/a'), name: localPerson.name, timestamp: Date.now() });
    onUpdatePerson(localPerson);
  };

  const handleAddProject = async () => {
    if (personId === null || !newProjectId) return;
    const updatedProjectIds = localPerson.projectIds ? [...localPerson.projectIds, newProjectId] : [newProjectId];
    setLocalPerson({ ...localPerson, projectIds: updatedProjectIds });
    await associateProject(localPerson.id, newProjectId);
    await loadAssociatedProjects();
    onUpdatePerson(localPerson);

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

  const handleRemoveProject = async (projectId: number) => {
    if (personId === null) return;
    const updatedProjectIds = localPerson.projectIds?.filter(id => id !== projectId) || [];
    setLocalPerson({ ...localPerson, projectIds: updatedProjectIds });
    await loadAssociatedProjects();
    await removeProject(localPerson.id, projectId);
    onUpdatePerson(localPerson);
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

  const handleAddDirection = async () => {
    if (personId === null) return;
    const direction = await createDirection(newStreet, newCity);
    await associatePerson(direction.id, localPerson.id);
    await loadDirections();
    if (localPerson && direction) {
      saveRecentChange({
        type: t('type.person'),
        action: t('action.edited'),
        name: `Dirección "${direction.street}"("${direction.city}") añadida a persona: "${localPerson.name}"`,
        timestamp: Date.now()
      });
    }
  };

  const handleRemoveDirection = async (directionId: number) => {
    if (personId === null) return;
    const updatedDirectionIds = localPerson.directionIds?.filter(id => id !== directionId) || [];
    setLocalPerson({ ...localPerson, directionIds: updatedDirectionIds });
    onUpdatePerson(localPerson);
    await removePerson(directionId, localPerson.id);
    await deleteDirection(directionId);
    await loadDirections();
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
  };

  return (
    <View style={styles.container}>
      <Title text={t('title.edit.person')} type='Subtitle' style={{ marginBottom: 20 }} />
      <TextInput 
        label={t('label.Name')} value={localPerson.name} style={styles.input} 
        onChangeText={(value: string) => setLocalPerson({ ...localPerson, name: value })} />
      <TextInput
        label={t('label.age')} value={localPerson.age} keyboardType="numeric" style={styles.input}
        onChangeText={(value: string) => setLocalPerson({...localPerson, age: parseInt(value)})} />
        
      <Button title={t("button.save")} onPress={handleUpdate} type="save" />

      <Title text={t('title.associated.projects')} type='Subtitle' style={{ marginTop: 20, marginBottom: 20 }} />
      {(localPerson.projectIds || []).map((id) => {
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
      {(localPerson.directionIds || []).map((id, idx) => {
        const direction = directions.find(d => d.id === id);
        if (!direction) return null;
        return(
        <View key={id} style={styles.listItem}>
          <Text>{localPerson.streets[idx]} - {localPerson.cities[idx]}</Text>
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

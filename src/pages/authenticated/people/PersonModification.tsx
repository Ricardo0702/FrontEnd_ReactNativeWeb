import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { fetchPerson, updatePerson,createEmptyPerson, associateProject, removeProject } from '../../../services/PersonService';
import { fetchProjects } from '../../../services/ProjectService';
import { fetchDirections, createDirection, deleteDirection, associatePerson, removePerson } from '../../../services/DirectionService';
import { Direction } from '../../../types/IDirection';
import { Project } from '../../../types/IProject';
import { IPerson } from '../../../types/IPerson';
import TextInput from '../../../components/textInput/TextInput';
import { saveRecentChange } from '../../../services/localStorage';

type Props = {
  personId: number | null;
};

export default function PersonModification({ personId }: Props) {

  const [person, setPerson] = useState<IPerson>(createEmptyPerson());
  const [people, setPeople] = useState<IPerson[]>([])
  const [projects, setProjects] = useState<Project[]>([]);
  const [directions, setDirections] = useState<Direction[]>([]);

  const [personName, setPersonName] = useState('');
  const [personAge, setPersonAge] = useState<number>(0);

  const [newProjectId, setNewProjectId] = useState<number>(0);
  const [newStreet, setNewStreet] = useState('');
  const [newCity, setNewCity] = useState('');

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

  useEffect(() => {
    loadPerson();
    loadProjects();
    loadDirections();
  }, []);

  const handleUpdate = async () => {
    if (personId === null) return;
    await updatePerson(personId, person.name, person.age);
    await loadPerson();
    saveRecentChange({type: 'Persona',action: 'Editado/a',name: person.name,timestamp: Date.now()});
  };

  const handleAddProject = async () => {
    if (personId === null) return;
    await associateProject(personId, newProjectId);
    await loadPerson();

    const person = people.find(p => p.id === personId);
    const project = projects.find(p => p.id === newProjectId);

    if (person && project) {
      saveRecentChange({
        type: 'Persona',
        action: 'Editado/a',
        name: `Persona "${person.name}" Asociado al proyecto "${project.name}"`,
        timestamp: Date.now()
      });
    }
  };

  const handleRemoveProject = async (projectId: number) => {
    if (personId === null) return;
    await removeProject(personId, projectId);
    await loadPerson();

    const person = people.find(p => p.id === personId);
    const project = projects.find(p => p.id === newProjectId);

    if (person && project) {
      saveRecentChange({
        type: 'Persona',
        action: 'Editado/a',
        name: `Proyecto "${project.name}" eliminado de persona: "${person.name}"`,
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

    const person = people.find(p => p.id === personId);

    if (person && direction) {
      saveRecentChange({
        type: 'Persona',
        action: 'Editado/a',
        name: `Dirección "${direction.street}"("${direction.city}") añadidia a persona: "${person.name}"`,
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

    const person = people.find(p => p.id === personId);
    const direction = directions.find(d => d.id == directionId);

    if (person && direction) {
      saveRecentChange({
        type: 'Persona',
        action: 'Editado/a',
        name: `Dirección "${direction.street}"("${direction.city}") eliminada de persona: "${person.name}"`,
        timestamp: Date.now()
      });
      saveRecentChange({
        type: 'Dirección',
        action: 'Eliminado/a',
        name: `"${direction.street}"("${direction.city}") eliminada de persona: "${person.name}"`,
        timestamp: Date.now()
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modificar Persona</Text>

      <TextInput label = 'Nombre' value={personName} onChangeText={setPersonName} style={styles.input} />

      <TextInput label = 'Edad' value={personAge} onChangeText={
        (text) => setPersonAge(Number(text))} keyboardType="numeric" style={styles.input} />

      <Button title="Guardar cambios" onPress={handleUpdate} />

      <Text style={styles.sectionTitle}>Proyectos Asociados</Text>
      {person.projectIds.map((id, idx) => (
        <View key={id} style={styles.listItem}>
          <Text>{person.projectNames[idx]}</Text>
          <Button title="Eliminar" onPress={() => handleRemoveProject(id)} />
        </View>
      ))}

      <Text>Añadir Proyecto:</Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setNewProjectId(item.id)}>
            <Text style={styles.listItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Asociar Proyecto" onPress={handleAddProject} />

      <Text style={styles.sectionTitle}>Direcciones Asociadas</Text>
      {person.directionIds.map((id, idx) => (
        <View key={id} style={styles.listItem}>
          <Text>{person.streets[idx]} - {person.cities[idx]}</Text>
          <Button title="Eliminar" onPress={() => handleRemoveDirection(id)} />
        </View>
      ))}

      <TextInput label="Calle" value={newStreet} onChangeText={setNewStreet} style={styles.input} />
      <TextInput label="Ciudad" value={newCity} onChangeText={setNewCity} style={styles.input} />
      <Button title="Añadir Dirección" onPress={handleAddDirection} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
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

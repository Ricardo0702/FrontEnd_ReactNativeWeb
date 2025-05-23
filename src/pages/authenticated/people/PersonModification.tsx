import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useParams } from 'react-router-dom';
import { fetchPerson, updatePerson, associateProject, removeProject } from '../../../services/PersonService';
import { fetchProjects } from '../../../services/ProjectService';
import { fetchDirections, createDirection, deleteDirection, associatePerson, removePerson } from '../../../services/DirectionService';
import { Direction } from '../../../types/Direction';
import { Project } from '../../../types/Project';

export default function PersonModification() {
  const { personId } = useParams();
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [projectIds, setProjectIds] = useState<number[]>([]);
  const [projectNames, setProjectNames] = useState<string[]>([]);
  const [directionIds, setDirectionIds] = useState<number[]>([]);
  const [streets, setStreets] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [projects, setProjects] = useState<Project[]>([]);
  const [directions, setDirections] = useState<Direction[]>([]);

  const [newProjectId, setNewProjectId] = useState<number>(0);
  const [newStreet, setNewStreet] = useState('');
  const [newCity, setNewCity] = useState('');

  const loadPerson = async () => {
    const data = await fetchPerson(Number(personId));
    setName(data.name);
    setAge(data.age);
    setProjectIds(data.projectIds);
    setProjectNames(data.projectNames);
    setDirectionIds(data.directionIds);
    setStreets(data.streets);
    setCities(data.cities);
  };

  const loadProjects = async () => {
    const data = await fetchProjects();
    setProjects(data);
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
    await updatePerson(Number(personId), name, age);
    Alert.alert('Actualizado', 'La persona ha sido actualizada.');
  };

  const handleAddProject = async () => {
    await associateProject(Number(personId), newProjectId);
    loadPerson();
  };

  const handleRemoveProject = async (projectId: number) => {
    await removeProject(Number(personId), projectId);
    loadPerson();
  };

  const handleAddDirection = async () => {
    const direction = await createDirection(newStreet, newCity);
    await associatePerson(direction.id, Number(personId));
    loadPerson();
    loadDirections();
  };

  const handleRemoveDirection = async (directionId: number) => {
    await removePerson(directionId, Number(personId));
    await deleteDirection(directionId);
    loadPerson();
    loadDirections();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modificar Persona</Text>
      <Text>Nombre:</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
      <Text>Edad:</Text>
      <TextInput value={age.toString()} onChangeText={text => setAge(Number(text))} keyboardType="numeric" style={styles.input} />
      <Button title="Guardar cambios" onPress={handleUpdate} />

      <Text style={styles.sectionTitle}>Proyectos Asociados</Text>
      {projectIds.map((id, idx) => (
        <View key={id} style={styles.listItem}>
          <Text>{projectNames[idx]}</Text>
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
      {directionIds.map((id, idx) => (
        <View key={id} style={styles.listItem}>
          <Text>{streets[idx]} - {cities[idx]}</Text>
          <Button title="Eliminar" onPress={() => handleRemoveDirection(id)} />
        </View>
      ))}
      <TextInput placeholder="Calle" value={newStreet} onChangeText={setNewStreet} style={styles.input} />
      <TextInput placeholder="Ciudad" value={newCity} onChangeText={setNewCity} style={styles.input} />
      <Button title="Añadir Dirección" onPress={handleAddDirection} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 4
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  }
});

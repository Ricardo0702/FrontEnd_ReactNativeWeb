import React, { useEffect, useState } from 'react';
import Modal from '../../components/modal/Modal'; // El nuevo modal responsivo
import Table from '../../components/table/Table';
import Button from '../../components/button/Button'
import Title from '../../components/title/Title'
import { fetchPeople, createPerson, deletePerson, associateProject, updatePerson } from '../../services/PersonService';
import { saveRecentChange } from '../../services/localStorage';
import { fetchProjects } from '../../services/ProjectService';
import type { Person } from '../../types/Person';
import type { Project } from '../../types/Project';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import Select from 'react-select';




const PeopleDashboard: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  const [showModalForm, setShowModalForm] = useState(false);
  const [showAssociationModal, setShowAssociationModal] = useState(false);
  const [showUpdateModal, setUpdateModal] = useState(false);

  const [personName, setPersonName] = useState('');
  const [personAge, setPersonAge] = useState<number>(0);

  const [selectedPersonId, setSelectedPersonId] = useState<number | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<number>(-1); // Cambio aquí

  const fetchData = async () => {
    try {
      const [peopleData, projectsData] = await Promise.all([
        fetchPeople(),
        fetchProjects(),
      ]);
      setPeople(peopleData);
      setProjects(projectsData);
    } catch (error) {
      console.error("Error al cargar los datos: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeletePerson = async (personId: number) => {
    try {
      const deletedPerson = people.find(p => p.id === personId);
      await deletePerson(personId);
      setPeople((prevPeople) => prevPeople.filter((person) => person.id !== personId));

      if (deletedPerson) {
        saveRecentChange({
          type: 'Persona',
          action: 'Eliminado/a',
          name: deletedPerson.name,
          timestamp: Date.now(),
        });
      }
    } catch (error) {
      console.error("Error al eliminar la persona: ", error);
    }
  };


  const handleCreatePerson = async () => {
    try {
      const newPerson = await createPerson(personName, personAge);

      saveRecentChange({
        type: 'Persona',
        action: 'Añadido/a',
        name: newPerson.name,
        timestamp: Date.now(),
      });

      fetchData();
      setShowModalForm(false);
      setPersonName('');
      setPersonAge(0);
    } catch (error) {
      console.error('Error al crear la persona:', error);
    }
  };

  const handleUpdatePerson = async (personId: number, personName: string, personAge: number) => {
    try{
      await updatePerson(personId, personName, personAge);

      saveRecentChange({
        type: 'Persona',
        action: 'Editado/a',
        name: personName,
        timestamp: Date.now()
      });

      fetchData();
      setUpdateModal(false);
      setPersonName('');
    } catch(error){
      console.error("Error al modificar la persona: ", error);
    }
  };

  const handleAssociateProject = async () => {
    if (selectedPersonId !== null && selectedProjectId !== -1) {
      try {
        await associateProject(selectedPersonId, selectedProjectId);
        fetchData();
        setShowAssociationModal(false);
        setSelectedProjectId(-1); // resetear selección

        const person = people.find(p => p.id === selectedPersonId);
        const project = projects.find(p => p.id === selectedProjectId);

        if (person && project) {
          saveRecentChange({
            type: 'Persona',
            action: 'Editado/a',
            name: `Persona "${person.name}" Asociado al proyecto "${project.name}"`,
            timestamp: Date.now()
          });
        }

      } catch (error) {
        console.error("Error al asociar el proyecto: ", error);
      }
    }
  };


  const columns: { header: string; accessor?: keyof Person; width?: number; 
      render?: (value: any, row: Person) => React.ReactNode }[] = [
      { header: 'Nombre', accessor: 'name', width: 100 },
      { header: 'Edad', accessor: 'age', width: 80},
      {
        header: 'Direcciones',
        width: 300,
        render: (_: any, row: Person) => {
          const streets = row.streets ?? [];
          const cities = row.cities ?? [];

          const directions = streets.map((street, index) => ({
            street,
            city: cities[index] ?? "Ciudad desconocida",
          }));

          return (
            <View style={{ flexDirection: 'column' }}>
              {directions.map((direction, index) => (
                <Text key={index}>
                  {direction.street} ({direction.city})
                </Text>
              ))}
            </View>
          );
        },
      },
      {
        header: 'Proyectos', accessor:'projectNames', width: 200,
      },
      {
        header: 'Acciones',
        width: 400,
        render: (_: any, row: Person, rowIndex?: number) => {
        const isEven = (rowIndex ?? 0) % 2 === 0;
        const backgroundColor = isEven ? '#f0f0f0' : '#f9f9f9';
        return (
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <View style = {{backgroundColor}}>
              <Button 
                title="Asociar Proyecto" 
                onPress={() => {
                  setSelectedPersonId(row.id);
                  setShowAssociationModal(true);
                  setSelectedProjectId(-1);
                }}
                type='associate'
              />
            </View>
            <View style = {{backgroundColor}}>
              <Button
                title="Modificar"
                onPress={() => {
                  setSelectedPersonId(row.id);
                  setPersonName(row.name);
                  setPersonAge(row.age);
                  setUpdateModal(true);
                }}
                type='associate'
              />
            </View>
            <Button 
              title="Eliminar" 
              onPress={() => handleDeletePerson(row.id)} 
              type='delete'
            />
          </View>
        );
      }
    }
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{paddingBottom: 10}}>
          <Title
            text = 'Personas Registradas'
            size = 'xl'
            align = 'center'
            underline
            />
        </View>
        <View style={styles.tableContainer}>
          <Table
            columns={columns}
            data={people}
            minRowHeight={50}
            minRowWidth={800}
          />
          <View style = {{alignItems: 'flex-start', paddingTop: 20}}>
            <Button 
                title="Añadir Persona"
                onPress={() => setShowModalForm(true)}
                type = 'add'
              />
          </View>
        </View>
      </ScrollView>

      <Modal
        title="Añadir Persona"
        visible={showModalForm}
        onClose={() => setShowModalForm(false)}
        size="xs"
      >
        <View>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            value={personName}
            onChangeText={setPersonName}
            style={styles.input}
            placeholder="Nombre"
            autoFocus
          />
          <Text style={styles.label}>Edad:</Text>
          <TextInput
            value={personAge.toString()}
            onChangeText={(value) => setPersonAge(Number(value))}
            style={styles.input}
            placeholder="Edad"
            keyboardType="numeric"
          />
          <Button 
            title="Guardar" 
            onPress={handleCreatePerson} 
            type = 'save' 
          />
        </View>
      </Modal>
      
      <Modal
        title = "Modificar persona"
        visible = {showUpdateModal}
        onClose = {() => setUpdateModal(false)}
        size = "xs"
        >
        <View>
          <Text style={styles.label}> Nombre:</Text>
          <TextInput
            value = {personName}
            onChangeText = {setPersonName}
            style= {styles.input}
            placeholder='Nombre de la persona'
            autoFocus
          />
          <Text style={styles.label}>Edad:</Text>
          <TextInput
            value={personAge.toString()}
            onChangeText={(value) => setPersonAge(Number(value))}
            style={styles.input}
            placeholder="Edad"
            keyboardType="numeric"
          />
          <Button
            title= "Guardar"
            onPress={() => {
              if (selectedPersonId !== null) {
                handleUpdatePerson(selectedPersonId, personName, personAge);
              }
            }} 
            type = 'save'
          />
        </View>
      </Modal>

      <Modal
        title="Asociar Proyecto"
        visible={showAssociationModal}
        onClose={() => setShowAssociationModal(false)}
        size="m"
      >
      <View>
          <Select
            options={projects}
            getOptionLabel={(project) => project.name}
            getOptionValue={(project) => project.id.toString()}
            onChange={(selectedOption) => setSelectedProjectId(Number(selectedOption?.id))}
            placeholder="Selecciona un proyecto"
            value={projects.find((project) => project.id === selectedProjectId)}
          />
        <Button 
          title="Asociar" 
          onPress={handleAssociateProject} 
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
    flexWrap: 'nowrap',
    alignContent: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 60,
    width: '90%',
    maxWidth: '100%',   // Un poco más ancho para que el Table tenga espacio
    marginHorizontal: 'auto',
  },

  scrollContainer: 
  { flexGrow: 1, 
    paddingVertical: 20,
    justifyContent: 'flex-start',
  },
  
  tableContainer: 
  { marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center', 
  },

  actionButtonsContainer: 
  { flexDirection: 'row', 
    gap: 10 
  },
  
  directionsContainer: 
  { flexDirection: 'column' 

  },
  directionText: 
  { marginBottom: 5 

  },
  
  modalContent: {
    width: '100%',
    padding: 10,
  },

  select: {
    marginBottom: 15, 
  },

  label: 
  { marginBottom: 5, 
    fontSize: 16 
  },
  
  input: 
  { marginBottom: 10, 
    padding: 8, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 5 
  },

  selectContainer: 
  { maxHeight: 200 

  },
});

export default PeopleDashboard;
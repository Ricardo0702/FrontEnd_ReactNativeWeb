import React, { useEffect, useState } from 'react';
import { fetchDirections, createDirection, deleteDirection, associatePerson, updateDirection } from '../../../services/DirectionService';
import { fetchPeople } from '../../../services/PersonService';
import type { Direction } from '../../../types/Direction';
import { Person } from '../../../types/Person';
import Modal from '../../../components/modal/Modal'; // Importando el Modal genérico
import Table from '../../../components/table/Table';
import Button from '../../../components/button/Button';
import Title from '../../../components/title/Title'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import Select from 'react-select'
import { saveRecentChange } from '../../../services/localStorage';


const DirectionsDashboard: React.FC = () => {
  const [directions, setDirections] = useState<Direction[]>([]);
  const [people, setPeople] = useState<Person[]>([]);

  const [showModalForm, setShowModalForm] = useState(false);
  const [showAssociationModal, setShowAssociationModal] = useState(false);
  const [showUpdateModal, setUpdateModal] = useState(false);

  const [selectedDirectionId, setSelectedDirectionId] = useState<number | null>(null);
  const [selectedPersonId, setSelectedPersonId] = useState<number>(-1);

  // Estado del formulario
  const [directionStreet, setDirectionStreet] = useState('');
  const [directionCity, setDirectionCity] = useState('');

  const fetchData = async () => {
    try {
      const [peopleData, directionsData] = await Promise.all([
        fetchPeople(),
        fetchDirections(),
      ]);
      setPeople(peopleData);
      setDirections(directionsData);
    } catch (error) {
      console.error("Error al cargar los datos: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Función para crear dirección
  const handleCreateDirection = async () => {
    try {
      const newDirection = await createDirection(directionStreet, directionCity);

      saveRecentChange({
        type: 'Dirección',
        action: 'Eliminado/a',
        name: `"${newDirection.street}, ${newDirection.city}"`, 
        timestamp: Date.now(),
      })

      fetchData();
      setShowModalForm(false); // Cerramos el modal
      setDirectionStreet(''); // Limpiamos el formulario
      setDirectionCity('');
    } catch (error) {
      console.error('Error al crear la dirección:', error);
    }
  };

  const handleDeleteDirection = async (directionId: number) => {
    try {
      const deletedDirection = directions.find(d => d.id === directionId);
      await deleteDirection(directionId);
      setDirections((prevDirections) => prevDirections.filter((direction) => direction.id !== directionId));

      if (deletedDirection) {
        saveRecentChange({
          type: 'Dirección',
          action: 'Eliminado/a',
          name: `"${deletedDirection.street}, ${deletedDirection.city}"`, 
          timestamp: Date.now(),
        });
      }
      
    } catch (error) {
      console.error("Error al eliminar el proyecto: ", error);
    }
  };
  const handleAssociatePerson = async () => {
    if (selectedDirectionId !== null && selectedPersonId !== -1) {
      try {
        await associatePerson(selectedDirectionId, selectedPersonId);
        fetchData();
        setShowAssociationModal(false);
        setSelectedPersonId(-1); // resetear selección

        const direction = directions.find(d => d.id === selectedDirectionId);
        const person = people.find(p => p.id === selectedPersonId);

        if (direction && person) {
          saveRecentChange({
            type: 'Dirección',
            action: 'Editado/a',
            name: `Dirección "${direction.street}, ${direction.city}" Asociada a la persona "${person.name}"`,
            timestamp: Date.now()
          });
        }

      } catch (error) {
          console.error("Error al asociar el proyecto: ", error);
      }
    }
  };

  const handleUpdateDirection = async (directionId: number, directionStreet: string, directionCity: string) => {
      try{
        const updatedDirection = await updateDirection(directionId, directionStreet, directionCity);
  
        saveRecentChange({
          type: 'Dirección',
          action: 'Editado/a',
          name: `"${updatedDirection.street}, ${updatedDirection.city}"`,
          timestamp: Date.now()
        });
  
        fetchData();
        setUpdateModal(false);
        setDirectionStreet("");
        setDirectionCity("");
      } catch(error){
        console.error("Error al modificar la dirección: ", error);
      }
    };

  const columns: { header: string; accessor?: keyof Direction; width?: number;
    render?: (value: any, row: Direction) => React.ReactNode }[] = [
      { header: 'Calle', accessor: 'street', width: 200 },
      { header: 'Ciudad', accessor: 'city', width: 200},
      { header: 'Persona', accessor: 'personName', width: 150 },
      { header: 'Acciones', width: 400, 
        render: (_: any, row: Direction, rowIndex?: number) => {
        const isEven = (rowIndex ?? 0) % 2 === 0;
        const backgroundColor = isEven ? '#f0f0f0' : '#f9f9f9';
        return (
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <View style = {{backgroundColor}}>
              <Button
                title="Asociar Persona"
                onPress={() => {
                    setSelectedDirectionId(row.id);
                    setShowAssociationModal(true);
                    setSelectedPersonId(-1); // Resetear cada vez que abres el modal
                  }}
                type="associate"
              />
            </View>
            <View style = {{backgroundColor}}>
              <Button
                title="Modificar"
                onPress= {() => {
                  setSelectedDirectionId(row.id);
                  setDirectionStreet(row.street);
                  setDirectionCity(row.city);
                  setUpdateModal(true);
                }}
                type = "associate"
              />
            </View>
            <Button 
              title="Eliminar" 
              onPress={() => handleDeleteDirection(row.id)} 
              type = 'delete'
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
            text = 'Direcciones Registradas'
            size = 'xl'
            align = 'center'
            underline
            />
        </View>
        <View style={styles.tableContainer}>
          <Table
            columns={columns}
            data={directions}
            minRowHeight={50}
            minRowWidth={800}
          />
        </View>
        <View style = {{alignItems: 'center'}}>
        <Button
            title="Añadir Dirección"
            onPress={() => setShowModalForm(true)}
            type = 'add'
          />
        </View>
      </ScrollView>
      <Modal
        title= "Asociar Persona"
        visible={showAssociationModal}
        onClose={() => setShowAssociationModal(false)}
        size="m"
      >
        <View>
          <Select
            options={people}
            getOptionLabel={(person) => person.name}
            getOptionValue={(person) => person.id.toString()}
            onChange={(selectedOption) => setSelectedPersonId(Number(selectedOption?.id))}
            placeholder="Selecciona una persona"
            value={people.find((person) => person.id === selectedPersonId)}
          />
          <Button 
            title="Asociar" 
            onPress={handleAssociatePerson} 
            type = 'save'
          />
        </View>
      </Modal>

      <Modal
        title = "Modificar dirección"
        visible = {showUpdateModal}
        onClose = {() => setUpdateModal(false)}
        size = "xs"
        >
        <View>
          <Text style={styles.label}> Calle:</Text>
          <TextInput
            value = {directionStreet}
            onChangeText = {setDirectionStreet}
            style= {styles.input}
            placeholder='Calle'
            autoFocus
          />
          <Text style={styles.label}>Ciudad:</Text>
          <TextInput
            value={directionCity}
            onChangeText= {setDirectionCity}
            style={styles.input}
            placeholder="Ciudad"
            autoFocus
          />
          <Button
            title= "Guardar"
            onPress={() => {
              if (selectedDirectionId !== null) {
                handleUpdateDirection(selectedDirectionId, directionStreet, directionCity);
              }
            }} 
            type = 'save'
          />
        </View>
      </Modal>

      <Modal
        title="Añadir Dirección"
        visible={showModalForm}
        onClose={() => setShowModalForm(false)}
        size="xs"
      >
        <View>
          <Text style={styles.label}>Calle:</Text>
          <TextInput
            value={directionStreet}
            onChangeText={setDirectionStreet}
            style={styles.input}
            placeholder="Calle"
            autoFocus
          />
          <Text style={styles.label}>Ciudad:</Text>
          <TextInput
            value={directionCity}
            onChangeText={setDirectionCity}
            style={styles.input}
            placeholder="Ciudad"
          />
          <Button 
            title="Guardar" 
            onPress={handleCreateDirection}
            type = 'save' />
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
  header: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tableContainer: {
    marginBottom: 20,
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

export default DirectionsDashboard;

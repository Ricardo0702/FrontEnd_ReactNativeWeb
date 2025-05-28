import React, { useEffect, useState } from 'react';
import { fetchDirections, createDirection, deleteDirection, associatePerson, updateDirection } from '../../../services/DirectionService';
import { fetchPeople } from '../../../services/PersonService';
import type { Direction } from '../../../types/IDirection';
import { IPerson } from '../../../types/IPerson';
import Modal from '../../../components/modal/Modal'; // Importando el Modal genérico
import Table from '../../../components/table/Table';
import Button from '../../../components/button/Button';
import Title from '../../../components/title/Title';
import TextInput from '../../../components/textInput/TextInput';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Select from 'react-select'
import { saveRecentChange } from '../../../services/localStorage';
import DirectionModification from './DirectionModification';
import { Skeleton } from '../../../components/skeleton/Skeleton';


const DirectionsDashboard: React.FC = () => {
  const [directions, setDirections] = useState<Direction[]>([]);
  const [people, setPeople] = useState<IPerson[]>([]);

  const [showModalForm, setShowModalForm] = useState(false);
  const [showUpdateModal, setUpdateModal] = useState(false);

  const [selectedDirectionId, setSelectedDirectionId] = useState<number | null>(null);

  const [directionStreet, setDirectionStreet] = useState('');
  const [directionCity, setDirectionCity] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
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

  const columns: { header: string; accessor?: keyof Direction; width?: number;
    render?: (value: any, row: Direction) => React.ReactNode }[] = [
      { header: 'Calle', accessor: 'street', width: 200 },
      { header: 'Ciudad', accessor: 'city', width: 200},
      { header: 'Persona', accessor: 'personName', width: 150 },
      { header: 'Acciones', width: 200, 
        render: (_: any, row: Direction, rowIndex?: number) => {
        const isEven = (rowIndex ?? 0) % 2 === 0;
        const backgroundColor = isEven ? '#f0f0f0' : '#f9f9f9';
        return (
          <View style={{ flexDirection: 'row', gap: 10 }}>

            <View style = {{backgroundColor}}>
              <Button title="Modificar" type = "associate" onPress= {() => {
                setSelectedDirectionId(row.id); setDirectionStreet(row.street); setDirectionCity(row.city); setUpdateModal(true);}} />
            </View>

            <Button title="Eliminar" onPress={() => handleDeleteDirection(row.id)} type = 'delete' />

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
        <View style={{paddingBottom: 10}}>
          <Title text = 'Direcciones Registradas' size = 'xl' align = 'center' underline />
        </View>

        <View style={styles.tableContainer}>
          <Table columns={columns} data={directions} minRowHeight={50} />
        </View>

        <View style = {{alignItems: 'center'}}>
        <Button title="Añadir Dirección" onPress={() => setShowModalForm(true)} type = 'add' />
        </View>
      </ScrollView>

      <Modal title = "Modificar dirección" visible = {showUpdateModal} onClose = {() => {setUpdateModal(false); fetchData()}} size = "xl" >
        <DirectionModification directionId={selectedDirectionId} />
      </Modal>

      <Modal title="Añadir Dirección" visible={showModalForm} onClose={() => setShowModalForm(false)} size="xs" >
        <View>
          <TextInput label= 'Calle' value={directionStreet} onChangeText={setDirectionStreet} style={styles.input} autoFocus />
          <Text style={styles.label}>Ciudad:</Text>
          <TextInput label= 'Ciudad' value={directionCity} onChangeText={setDirectionCity} style={styles.input} />
          <Button title="Guardar" onPress={handleCreateDirection} type = 'save' />
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

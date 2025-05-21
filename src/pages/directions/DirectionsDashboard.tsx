import React, { useEffect, useState } from 'react';
import { fetchDirections, createDirection, deleteDirection } from '../../services/DirectionService';
import type { Direction } from '../../types/Direction';
import Modal from '../../components/modal/Modal'; // Importando el Modal genérico
import Table from '../../components/table/Table';
import Button from '../../components/button/Button';
import Title from '../../components/title/Title'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

const DirectionsDashboard: React.FC = () => {
  const [directions, setDirections] = useState<Direction[]>([]);
  const [showModalForm, setShowModalForm] = useState(false);

  // Estado del formulario
  const [directionStreet, setDirectionStreet] = useState('');
  const [directionCity, setDirectionCity] = useState('');

  const fetchData = async () => {
    try {
      const data = await fetchDirections();
      setDirections(data);
    } catch (error) {
      console.error('Error al cargar las direcciones: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Función para crear dirección
  const handleCreateDirection = async () => {
    try {
      await createDirection(directionStreet, directionCity);
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
        await deleteDirection(directionId);
        setDirections((prevDirections) => prevDirections.filter((direction) => direction.id !== directionId));
      } catch (error) {
        console.error("Error al eliminar el proyecto: ", error);
      }
    };

  const columns: { header: string; accessor?: keyof Direction; width?: number;
    render?: (value: any, row: Direction) => React.ReactNode }[] = [
      { header: 'ID', accessor: 'id', width: 80 },
      { header: 'Calle', accessor: 'street', width: 250 },
      { header: 'Ciudad', accessor: 'city', width: 250},
      { header: 'Acciones', width: 200, render: (row) =>(
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Button 
            title="Eliminar" 
            onPress={() => handleDeleteDirection(row.id)} 
            type = 'delete'
            />
        </View>
      ),}
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

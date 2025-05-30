import React, { useEffect, useState } from 'react';
import { fetchDirections, createDirection, deleteDirection } from '../../../services/DirectionService';
import { fetchPeople } from '../../../services/PersonService';
import type { Direction } from '../../../types/IDirection';
import { Person } from '../../../types/IPerson';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import TextInput from '../../../components/TextInput';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { saveRecentChange } from '../../../services/localStorage';
import DirectionModification from './DirectionModification';
import { useTranslation } from 'react-i18next';
import DirectionsTable from './DirectionsTable';  // Importar tabla separada

const DirectionsDashboard: React.FC = () => {
  const { t } = useTranslation();

  const [directions, setDirections] = useState<Direction[]>([]);
  const [people, setPeople] = useState<Person[]>([]);

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
      setIsLoading(false);
    } catch (error) {
      console.error(t("Error al cargar los datos: "), error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateDirection = async () => {
    try {
      const newDirection = await createDirection(directionStreet, directionCity);

      saveRecentChange({
        type: t('Dirección'),
        action: t('Creado/a'),
        name: `"${newDirection.street}, ${newDirection.city}"`,
        timestamp: Date.now(),
      });

      fetchData();
      setShowModalForm(false);
      setDirectionStreet('');
      setDirectionCity('');
    } catch (error) {
      console.error(t('Error al crear la dirección:'), error);
    }
  };

  const handleDeleteDirection = async (directionId: number) => {
    try {
      const deletedDirection = directions.find(d => d.id === directionId);
      await deleteDirection(directionId);
      setDirections((prev) => prev.filter(d => d.id !== directionId));

      if (deletedDirection) {
        saveRecentChange({
          type: t('Dirección'),
          action: t('Eliminado/a'),
          name: `"${deletedDirection.street}, ${deletedDirection.city}"`,
          timestamp: Date.now(),
        });
      }
    } catch (error) {
      console.error(t("Error al eliminar la dirección: "), error);
    }
  };

  const handleEditDirection = (direction: Direction) => {
    setSelectedDirectionId(direction.id);
    setDirectionStreet(direction.street);
    setDirectionCity(direction.city);
    setUpdateModal(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{ paddingBottom: 10 }}>
          <Title text={t('Direcciones Registradas')} size='xl' align='center' underline />
        </View>

        <View style={styles.tableContainer}>
          <DirectionsTable directions={directions} onDelete={handleDeleteDirection} onEdit={handleEditDirection} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button title={t("Añadir Dirección")} onPress={() => setShowModalForm(true)} type='add' />
        </View>
      </ScrollView>

      <Modal
        title={t("Modificar dirección")}
        visible={showUpdateModal}
        onClose={() => { setUpdateModal(false); fetchData(); }}
        size="xs"
      >
        <DirectionModification directionId={selectedDirectionId} />
      </Modal>

      <Modal
        title={t("Añadir Dirección")}
        visible={showModalForm}
        onClose={() => setShowModalForm(false)}
        size="xs"
      >
        <View>
          <TextInput label={t('Calle')} value={directionStreet} onChangeText={setDirectionStreet} style={styles.input} autoFocus />
          <Text style={styles.label}>Ciudad:</Text>
          <TextInput label={t('Ciudad')} value={directionCity} onChangeText={setDirectionCity} style={styles.input} />
          <Button title={t("Guardar")} onPress={handleCreateDirection} type='save' />
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

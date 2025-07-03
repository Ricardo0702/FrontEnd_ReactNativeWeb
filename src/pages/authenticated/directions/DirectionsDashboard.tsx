import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { fetchDirections, createDirection, deleteDirection } from '../../../services/DirectionService';
import { fetchPeople } from '../../../services/PersonService';
import type { Direction } from '../../../types/IDirection';
import { Person } from '../../../types/IPerson';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import TextInput from '../../../components/TextInput';
import { View, StyleSheet, ScrollView } from 'react-native';
import { saveRecentChange } from '../../../services/localStorage';
import DirectionModification from './DirectionModification';
import { useTranslation } from 'react-i18next';
import DirectionsTable from './DirectionsTable'; 
import { UserContext } from '../../../context/UserContext';
import LoadingSpinner from '../../../components/LoadingSpinner';
import { Skeleton } from '../../../components/Skeleton';

const DirectionsDashboard: React.FC = () => {
  const [directions, setDirections] = useState<Direction[]>([]);
  const { t } = useTranslation();
  const form = useRef<Direction>({} as Direction);
  const [people, setPeople] = useState<Person[]>([]);
  const [showModalForm, setShowModalForm] = useState(false);
  const [showUpdateModal, setUpdateModal] = useState(false);
  const [selectedDirectionId, setSelectedDirectionId] = useState<number | null>(null);
  const [directionStreet, setDirectionStreet] = useState('');
  const [directionCity, setDirectionCity] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { authorities } = useContext(UserContext);
  const [error, setError] = useState<string | undefined>(undefined);

  const fetchData = async () => {
      try {
        setDirections(await fetchDirections());
        setPeople(await fetchPeople());
      } catch (error: any) {
        setError(error.response.data);
        console.error(t('error.loading.people'), error);
      }
      setIsLoading(false)
    };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateDirection = async () => {
    try {
      const newDirection = await createDirection(directionStreet, directionCity);

      saveRecentChange({
        type: t('type.address'),
        action: t('action.created'),
        name: `"${newDirection.street}, ${newDirection.city}"`,
        timestamp: Date.now(),
      });

      setDirections(prev => [...prev, newDirection])
      setShowModalForm(false);
      setDirectionStreet('');
      setDirectionCity('');
    } catch (error) {
      console.error(t('error.creating.address'), error);
    }
  };

  const handleDeleteDirection = async (directionId: number) => {
    try {
      const deletedDirection = directions.find(d => d.id === directionId);
      await deleteDirection(directionId);
      setDirections((prev) => prev.filter(d => d.id !== directionId));

      if (deletedDirection) {
        saveRecentChange({
          type: t('type.address'),
          action: t('action.deleted'),
          name: `"${deletedDirection.street}, ${deletedDirection.city}"`,
          timestamp: Date.now(),
        });
      }
    } catch (error) {
      console.error(t("error.deleting.address"), error);
    }
  };

  const handleEditDirection = useCallback(async(direction: Direction) => {
    setSelectedDirectionId(direction.id);
    form.current = direction;
    setUpdateModal(true);
  }, []);

  const update = useCallback((updatedDirection: Direction) => {
      setDirections(prev => {
        const updated = prev.map(d => (d.id === updatedDirection.id ? updatedDirection : d));
        return updated;
      });
    }, []);

  if (error) {
    return "componente Alert con el error";
  }

  if (isLoading) {
    return <LoadingSpinner />
  }
  
  const skeletonRows = Array.from({ length: 5 }, (_, i) => (
        <View key={i} style={{ flexDirection: 'row', gap: 20, marginBottom: 12 }}>
          <Skeleton width={300} height={20} />
          <Skeleton width={150} height={35} />
        </View>
      ));

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{ paddingBottom: 30 }}>
          <Title text={t('title.registered.addresses')} size='xl' align='center' underline />
        </View>

        <View style={styles.tableContainer}>
          {isLoading ? skeletonRows : (
          <DirectionsTable directions={directions} onDelete={handleDeleteDirection} onEdit={handleEditDirection} setShowModalForm={setShowModalForm} />
          )}
        </View>
      </ScrollView>

      <Modal title={t("modal.edit.address")} visible={showUpdateModal} onClose={() => { setUpdateModal(false); }} size="xl" >
        <DirectionModification directionId={selectedDirectionId} directionForm={form.current} onUpdateDirection={update} />
      </Modal>

      <Modal title={t("modal.add.address")} visible={showModalForm} onClose={() => setShowModalForm(false)} size="s" >
        <View>
          <TextInput label={t('label.street')} value={directionStreet} onChangeText={setDirectionStreet} inputStyle={styles.input} autoFocus />
          <TextInput label={t('label.city')} value={directionCity} onChangeText={setDirectionCity} inputStyle={styles.input} />
          <Button title={t("button.save")} onPress={handleCreateDirection} type='save' />
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

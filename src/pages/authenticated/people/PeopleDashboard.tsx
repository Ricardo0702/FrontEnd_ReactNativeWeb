import React, { use, useCallback, useContext, useEffect, useRef, useState } from 'react';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import TextInput from '../../../components/TextInput';
import { Skeleton } from '../../../components/Skeleton';
import { fetchPeople, createPerson, deletePerson } from '../../../services/PersonService';
import { saveRecentChange } from '../../../services/localStorage';
import type { Person } from '../../../types/IPerson';
import { View, StyleSheet, ScrollView } from 'react-native';
import PeopleTable from './PeopleTable';
import PersonModification from './PersonModification';
import { useTranslation } from 'react-i18next';
import LoadingSpinner from '../../../components/LoadingSpinner';
import { UserContext } from '../../../context/UserContext';
import { useTheme } from '../../../context/ThemeContext';

const PeopleDashboard: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const { t } = useTranslation();
  const [showModalForm, setShowModalForm] = useState(false);
  const [showUpdateModal, setUpdateModal] = useState(false);
  const form = useRef<Person>({} as Person);
  const [error, setError] = useState<string | undefined>(undefined);
  const [personName, setPersonName] = useState('');
  const [personAge, setPersonAge] = useState<number>(0);
  const [selectedPersonId, setSelectedPersonId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { authorities } = useContext(UserContext);
  const { colors } = useTheme();

  const fetchData = async () => {
    try {
      setPeople(await fetchPeople());
    } catch (error: any) {
      setError(error.response.data);
      console.error(t('error.loading.people'), error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeletePerson = useCallback(
    async (personId: number) => {
      try {
        const deletedPerson = people.find((p) => p.id === personId);
        await deletePerson(personId);
        setPeople((prevPeople) => prevPeople.filter((person) => person.id !== personId));
        if (deletedPerson) {
          saveRecentChange({
            type: t('type.person'),
            action: t('action.deleted'),
            name: deletedPerson.name,
            timestamp: Date.now(),
          });
        }
      } catch (error) {
        console.error(t('error.deleting.person'), error);
      }
    },
    [people],
  );

  const handleCreatePerson = async () => {
    try {
      const newPerson = await createPerson(personName, personAge);
      saveRecentChange({
        type: t('type.person'),
        action: t('action.added'),
        name: newPerson.name,
        timestamp: Date.now(),
      });
      setPeople((prev) => [...prev, newPerson]);
      setShowModalForm(false);
      setPersonName('');
      setPersonAge(0);
    } catch (error) {
      console.error(t('error.creating.person'), error);
    }
  };

  const handleEditPerson = useCallback(async (person: Person) => {
    form.current = person;
    setSelectedPersonId(person.id);
    setUpdateModal(true);
  }, []);

  const update = useCallback((updatedPerson: Person) => {
    setPeople((prev) => {
      const updated = prev.map((p) => (p.id === updatedPerson.id ? updatedPerson : p));
      return updated;
    });
  }, []);

  if (error) {
    return 'componente Alert con el error';
  }

  if (isLoading) {
    return <LoadingSpinner />;
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
          <Title text={t('title.registered.people')} size="xl" align="center" underline color={colors.text}/>
        </View>

        <View style={styles.tableContainer}>
          {isLoading ? (
            skeletonRows
          ) : (
            <PeopleTable people={people} onDelete={handleDeletePerson} onEdit={handleEditPerson} setShowModalForm={setShowModalForm} />
          )}
        </View>
      </ScrollView>

      <Modal title={t('modal.add.person')} visible={showModalForm} onClose={() => setShowModalForm(false)} size="s">
        <View>
          <TextInput label={t('label.name')} value={personName} onChangeText={setPersonName} inputStyle={styles.input} autoFocus />
          <TextInput
            label={t('label.age')}
            value={personAge.toString()}
            onChangeText={(value) => setPersonAge(Number(value))}
            inputStyle={styles.input}
            keyboardType="numeric"
          />
          <View style={{ marginTop: 20 }}>
            <Button title={t('button.save')} onPress={handleCreatePerson} type="save" />
          </View>
        </View>
      </Modal>

      <Modal
        title={t('modal.edit.person')}
        visible={showUpdateModal}
        onClose={() => {
          setUpdateModal(false);
        }}
        size="xl"
      >
        <PersonModification personId={selectedPersonId} personForm={form.current} onUpdatePerson={update} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignContent: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 60,
    marginHorizontal: 'auto',
  },
  scrollContainer: { flexGrow: 1, paddingVertical: 20, justifyContent: 'flex-start' },

  tableContainer: { marginBottom: 10, justifyContent: 'center', alignItems: 'center' },

  actionButtonsContainer: { flexDirection: 'row', gap: 10 },

  directionsContainer: { flexDirection: 'column' },

  directionText: { marginBottom: 5 },

  modalContent: { width: '100%', padding: 10 },

  select: { marginBottom: 15 },

  label: { marginBottom: 5, fontSize: 16 },

  input: {
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 40,
  },

  selectContainer: { maxHeight: 200 },
});

export default PeopleDashboard;

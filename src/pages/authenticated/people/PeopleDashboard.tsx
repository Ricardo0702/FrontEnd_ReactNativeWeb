import React, { useCallback, useEffect, useState } from 'react';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import TextInput from '../../../components/TextInput';
import { Skeleton } from '../../../components/Skeleton';
import { fetchPeople, createPerson, deletePerson } from '../../../services/PersonService';
import { saveRecentChange } from '../../../services/localStorage';
import type { Person } from '../../../types/IPerson';
import { View, StyleSheet,ScrollView } from 'react-native';
import PeopleTable from './PeopleTable';
import PersonModification from './PersonModification';
import { useTranslation } from 'react-i18next';



const PeopleDashboard: React.FC = () => {
  
  const [people, setPeople] = useState<Person[]>([]);

  const {t} = useTranslation();

  const [showModalForm, setShowModalForm] = useState(false);
  const [showUpdateModal, setUpdateModal] = useState(false);

  const [personName, setPersonName] = useState('');
  const [personAge, setPersonAge] = useState<number>(0);

  const [selectedPersonId, setSelectedPersonId] = useState<number | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      const [peopleData] = await Promise.all([
        fetchPeople(),
      ]);
      setPeople(peopleData);
    } catch (error) {
      console.error(t('Error al cargar los proyectos: '), error);
    }finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeletePerson = useCallback(async (personId: number) => {
    try {
      const deletedPerson = people.find(p => p.id === personId);
      await deletePerson(personId);
      setPeople((prevPeople) => prevPeople.filter((person) => person.id !== personId));

      if (deletedPerson) {
        saveRecentChange({
          type: t('Persona'),
          action: t('Eliminado/a'),
          name: deletedPerson.name,
          timestamp: Date.now(),
        });
      }
    } catch (error) {
      console.error(t("Error al eliminar la persona: "), error);
    }
  }, [people]);


  const handleCreatePerson = async () => {
    try {
      const newPerson = await createPerson(personName, personAge);

      saveRecentChange({
        type: t('Persona'),
        action: t('Añadido/a'),
        name: newPerson.name,
        timestamp: Date.now(),
      });

      fetchData();
      setShowModalForm(false);
      setPersonName('');
      setPersonAge(0);
    } catch (error) {
      console.error(t('Error al crear la persona:'), error);
    }
  };

  const handleEditPerson = async(person: Person) => {
    setSelectedPersonId(person.id);
    setPersonAge(person.age);
    setPersonName(person.name);
    setUpdateModal(true);
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

        <View style={{paddingBottom: 10}}>
          <Title text = {t('Personas Registradas')} size = 'xl' align = 'center' underline/>
        </View>

        <View style={styles.tableContainer}>
          {isLoading ? skeletonRows : (
            <PeopleTable people={people} onDelete={handleDeletePerson} onEdit={handleEditPerson} />
          )}
          <View style = {{alignItems: 'flex-start', paddingTop: 20}}>
            <Button title={t("Añadir Persona")} onPress={() => setShowModalForm(true)} type = 'add'/>
          </View>
        </View>

      </ScrollView>

      <Modal title={t("Añadir Persona")} visible={showModalForm} onClose={() => setShowModalForm(false)} size="xs">
        <View>
          <TextInput label= {t('Nombre')} value={personName} onChangeText={setPersonName} style={styles.input} autoFocus/>

          <TextInput label= {t('Edad')} value={personAge.toString()} onChangeText={
            (value) => setPersonAge(Number(value))} style={styles.input} keyboardType="numeric" />

          <Button title={t("Guardar")} onPress={handleCreatePerson} type = 'save'/>
        </View>
      </Modal>
      
      <Modal title={t("Modificar persona")} visible={showUpdateModal} onClose = {() => {setUpdateModal(false), fetchData()}} size = "xl">
        <PersonModification personId={selectedPersonId} />
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
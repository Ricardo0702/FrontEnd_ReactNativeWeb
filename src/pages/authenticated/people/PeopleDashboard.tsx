import React, { useCallback, useEffect, useState } from 'react';
import Modal from '../../../components/modal/Modal'; // El nuevo modal responsivo
import Table from '../../../components/table/Table';
import Button from '../../../components/button/Button'
import Title from '../../../components/title/Title'
import TextInput from '../../../components/textInput/TextInput';
import colors from '../../../components/colors/Colors';
import { Skeleton } from '../../../components/skeleton/Skeleton';
import { fetchPeople, createPerson, deletePerson, associateProject, updatePerson } from '../../../services/PersonService';
import { saveRecentChange } from '../../../services/localStorage';
import { fetchProjects } from '../../../services/ProjectService';
import type { IPerson } from '../../../types/IPerson';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import PersonModification from './PersonModification';
import { useTranslation } from 'react-i18next';



const PeopleDashboard: React.FC = () => {
  
  const [people, setPeople] = useState<IPerson[]>([]);

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
      console.error('Error al cargar los proyectos: ', error);
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
          type: 'Persona',
          action: 'Eliminado/a',
          name: deletedPerson.name,
          timestamp: Date.now(),
        });
      }
    } catch (error) {
      console.error("Error al eliminar la persona: ", error);
    }
  }, [people]);


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

 const columns: { header: string; accessor?: keyof IPerson; width?: number; minRowWidth?: number;
      render?: (value: any, row: IPerson) => React.ReactNode }[] = [
      { header: t('Nombre'), accessor: 'name' },
      { header: t('Edad'), accessor: 'age' },
      {
        header: t('Direcciones'),
        render: (_: any, row: IPerson) => {
          const streets = row.streets ?? [];
          const cities = row.cities ?? [];

          const directions = streets.map((street, index) => ({
            street,
            city: cities[index] ?? t("Ciudad desconocida"),
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
        header: t('Proyectos'), accessor:'projectNames',
      },
      {
        header: t('Acciones'), minRowWidth: 180,
        render: (_: any, row: IPerson, rowIndex?: number) => {
        const isEven = (rowIndex ?? 0) % 2 === 0;
        const backgroundColor = isEven ? '#f0f0f0' : '#f9f9f9';
        return (
          <View style={{ flexDirection: 'column', gap: 10 }}>
            <View style = {{backgroundColor}}>
              <Button title= {t("Modificar")} onPress={() => {
                setSelectedPersonId(row.id); setPersonName(row.name); setPersonAge(row.age); setUpdateModal(true);}}
                type='associate' />
            </View>
            <View>
              <Button title={t("Eliminar")} onPress={() => handleDeletePerson(row.id)} type='delete' />
            </View>
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
          <Title text = {t('Personas Registradas')} size = 'xl' align = 'center' underline/>
        </View>

        <View style={styles.tableContainer}>
          {isLoading ? skeletonRows : (
            <Table columns={columns} data={people} minRowHeight={50} />
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
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { fetchPeople } from '../../../services/PersonService';
import { fetchDirection, createEmptyDirection, associatePerson, removePerson, updateDirection } from '../../../services/DirectionService';
import { Direction } from '../../../types/IDirection';
import { Person } from '../../../types/IPerson';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import { saveRecentChange } from '../../../services/localStorage';
import Title from '../../../components/Title';
import Select from '../../../components/Select';
import { useTranslation } from 'react-i18next';

type Props = {
  directionId: number | null;
};

export default function directionModification({directionId}: Props){

    const {t} = useTranslation();

    const [direction, setDirection] = useState<Direction>(createEmptyDirection());
    const [people, setPeople] = useState<Person[]>([]);

    const [directionStreet, setDirectionStreet] = useState('');
    const [directionCity, setDirectionCity] = useState('');
    const [newPersonId, setNewPersonId] = useState<number | undefined>(undefined);

    const loadDirection = async () => {
        try {
            if (directionId === null) return;
            const data = await fetchDirection(directionId);
            setDirection(data);
            setDirectionStreet(data.street);
            setDirectionCity(data.city);
        } catch (error) {
            console.error(t('Error loading direction:'), error);
        }
    };

    const loadPeople = async () => {
        try{
            const data = await fetchPeople();
            setPeople(data);
        }catch(error){
            console.error(t('Error al cargar las personas: '), error);
        }
    };

    useEffect(() => {
        loadDirection();
        loadPeople();
      }, []);

    const handleUpdate = async () => {
        if (directionId === null) return;
        await updateDirection(directionId, directionStreet, directionCity);
        await loadDirection();
        saveRecentChange({type: t('Dirección'),action: t('Editado/a'),name: direction.street,timestamp: Date.now()});
    };

    const handleChangePerson = async () => {
        if (directionId === null) return;
        await associatePerson(directionId, newPersonId);
        await loadPeople();
        await loadDirection();
    }

    const handleRemovePerson = async () =>  {
        if (directionId === null) return;
        await removePerson(directionId, direction.personId);
        await loadPeople();
        await loadDirection();
    }

    return (
    <View style={styles.container}>
      <Title text= {t("Modificar Dirección")} type= 'Subtitle' style= {{marginBottom: 20}}/>
      <TextInput label = {t('Calle')} value={directionStreet} onChangeText={setDirectionStreet} style={styles.input} />
      <TextInput label = {t('Ciudad')} value={directionCity} onChangeText={setDirectionCity} style = {styles.input} />
      <Button title= {t("Guardar cambios")} onPress={handleUpdate} type= "save"/>
      
      
      <Title text={t("Persona Asociada")} type = 'Subtitle' style= {{marginTop: 2, marginBottom: 20}}/>
      <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text>{direction.personName}</Text>
          <Button title={t("Eliminar")} onPress={() => handleRemovePerson()} type= "delete" />
      </View>

      <Title text= {t('Asociar Pesona')} type= 'Subtitle' style= {{marginTop: 20, marginBottom: 20}}/>
      <Select
        selectedValue={newPersonId}
        onValueChange={(value) =>{
            if (typeof value === 'string') {
                const parsed = parseInt(value, 10);
                setNewPersonId(isNaN(parsed) ? undefined : parsed);
            } else {
                setNewPersonId(value);
            }
        }}
        options={people.map((person) => ({
          label: person.name,
          value: person.id,
        }))}
        placeholder={t("Selecciona una persona")}
      />
      <Button title={t("Asociar Persona")} onPress={handleChangePerson} type= 'save'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 4,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
});

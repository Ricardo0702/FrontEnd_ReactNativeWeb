import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { fetchPeople } from '../../../services/PersonService';
import { fetchDirection, createEmptyDirection, associatePerson, removePerson, updateDirection } from '../../../services/DirectionService';
import { Direction } from '../../../types/IDirection';
import { IPerson } from '../../../types/IPerson';
import TextInput from '../../../components/textInput/TextInput';
import Button from '../../../components/button/Button';
import { saveRecentChange } from '../../../services/localStorage';
import Title from '../../../components/title/Title';
import Select from '../../../components/select/Select';

type Props = {
  directionId: number | null;
};

export default function directionModification({directionId}: Props){

    const [direction, setDirection] = useState<Direction>(createEmptyDirection());
    const [directions, setDirections] = useState<Direction[]>([]);
    const [people, setPeople] = useState<IPerson[]>([]);

    const [directionStreet, setDirectionStreet] = useState('');
    const [directionCity, setDirectionCity] = useState('');
    const [newPersonName, setNewPersonName] = useState('');
    const [newPersonId, setNewPersonId] = useState<number | undefined>(undefined);

    const loadDirection = async () => {
        try {
            if (directionId === null) return;
            const data = await fetchDirection(directionId);
            setDirection(data);
            setDirectionStreet(data.street);
            setDirectionCity(data.city);
        } catch (error) {
            console.error('Error loading direction:', error);
        }
    };

    const loadPeople = async () => {
        try{
            const data = await fetchPeople();
            setPeople(data);
        }catch(error){
            console.error('Error al cargar las personas: ', error);
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
        saveRecentChange({type: 'Dirección',action: 'Editado/a',name: direction.street,timestamp: Date.now()});
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
      <Title text= "Modificar Dirección" type= 'Subtitle' style= {{marginBottom: 20}}/>
      <TextInput label = 'Calle' value={directionStreet} onChangeText={setDirectionStreet} style={styles.input} />
      <TextInput label = 'Ciudad' value={directionCity} onChangeText={setDirectionCity} style = {styles.input} />
      <Button title="Guardar cambios" onPress={handleUpdate} type= "save"/>
      
      <Title text="Persona Asociada" type = 'Subtitle' style= {{marginTop: 2, marginBottom: 20}}/>
      <Text>{direction.personName}</Text>
      <Button title="Eliminar" onPress={() => handleRemovePerson()} type= "delete" />

      <Title text= 'Asociar Pesona' type= 'Subtitle' style= {{marginTop: 20, marginBottom: 20}}/>
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
        placeholder="Selecciona una persona"
      />
      <Button title="Asociar Persona" onPress={handleChangePerson} type= 'save'/>
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

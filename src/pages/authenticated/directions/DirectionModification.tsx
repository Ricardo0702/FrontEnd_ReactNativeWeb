import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { fetchPeople } from '../../../services/PersonService';
import { fetchDirection, associatePerson, removePerson, updateDirection } from '../../../services/DirectionService';
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
  directionForm: Direction;
  onUpdateDirection: (updatedDirection: Direction) => void;
};

export default function directionModification({directionId, directionForm, onUpdateDirection}: Props){

    const {t} = useTranslation();
    const [localDirection, setLocalDirection] = useState<Direction>(directionForm);
    const [people, setPeople] = useState<Person[]>([]);
    const [newPersonId, setNewPersonId] = useState<number | undefined>(undefined);

    const loadPeople = async () => {
        try{
            const data = await fetchPeople();
            setPeople(data);
        }catch(error){
            console.error(t('error.loading.people'), error);
        }
    };

    useEffect(() => {
        loadPeople();
      }, []);

    const handleUpdate = async () => {
        if (directionId === null) return;
        await updateDirection(directionId, localDirection.street, localDirection.city);
        saveRecentChange({type: t('type.address'),action: t('action.edited'),name: localDirection.street,timestamp: Date.now()});
        onUpdateDirection(localDirection);
    };

    const handleChangePerson = async () => {
        if (directionId === null || newPersonId === undefined) return;
        const selectedPerson = people.find(p => p.id === newPersonId);
        const personName = selectedPerson?.name || '';
        setLocalDirection({...localDirection, personId: newPersonId, personName: personName})
        await associatePerson(directionId, newPersonId);
        await loadPeople();
        onUpdateDirection(localDirection);
    }

    const handleRemovePerson = async () =>  {
        if (directionId === null || localDirection.personId === null) return;
        setLocalDirection({...localDirection, personId: null, personName: ""})
        await removePerson(directionId, localDirection.personId);
        await loadPeople();
        onUpdateDirection(localDirection);
    }

    return (
    <View style={styles.container}>
      <Title text= {t("title.edit.address")} type= 'Subtitle' style= {{marginBottom: 20}} />
      <TextInput 
        label = {t('label.street')} value={localDirection.street} style={styles.input}
        onChangeText={(value:string) => setLocalDirection({...localDirection, street: value})} />
      <TextInput 
        label = {t('label.city')} value={localDirection.city} style = {styles.input} 
        onChangeText={(value:string) => setLocalDirection({...localDirection, city: value})} />

      <Button title= {t("button.save")} onPress={handleUpdate} type= "save"/>
      
      
      <Title text={t("title.associated.person")} type = 'Subtitle' style= {{marginTop: 2, marginBottom: 20}}/>
      <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text>{localDirection.personName}</Text>
          <Button title={t("button.delete")} onPress={() => handleRemovePerson()} type= "delete" />
      </View>

      <Title text= {t('title.associate.person')} type= 'Subtitle' style= {{marginTop: 20, marginBottom: 20}}/>
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
        placeholder={t("select.person")}
      />
      <Button title={t("button.associate.person")} onPress={handleChangePerson} type= 'save'/>
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

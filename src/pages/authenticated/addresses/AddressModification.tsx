import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { fetchPeople } from '../../../services/PersonService';
import { associatePerson, removePerson, updateAddress } from '../../../services/AddressService';
import { Address } from '../../../types/IAddress';
import { Person } from '../../../types/IPerson';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import { saveRecentChange } from '../../../services/localStorage';
import Title from '../../../components/Title';
import Select from '../../../components/Select';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../context/ThemeContext';

type Props = {
  AddressId: number | null;
  AddressForm: Address;
  onUpdateAddress: (updatedAddress: Address) => void;
};

export default function AddressModification({ AddressId, AddressForm, onUpdateAddress }: Props) {
  const { t } = useTranslation();
  const [localAddress, setLocalAddress] = useState<Address>(AddressForm);
  const [people, setPeople] = useState<Person[]>([]);
  const [newPersonId, setNewPersonId] = useState<number | undefined>(undefined);
  const { colors } = useTheme();

  const loadPeople = async () => {
    try {
      const data = await fetchPeople();
      setPeople(data);
    } catch (error) {
      console.error(t('error.loading.people'), error);
    }
  };

  useEffect(() => {
    loadPeople();
  }, []);

  const handleUpdate = async () => {
    if (AddressId === null) return;
    await updateAddress(AddressId, localAddress.street, localAddress.city);
    saveRecentChange({
      type: t('type.address'),
      action: t('action.edited'),
      name: localAddress.street,
      timestamp: Date.now(),
    });
    onUpdateAddress(localAddress);
  };

  const handleChangePerson = async (updatedAddress: Address) => {
    if (AddressId === null || newPersonId === undefined) return;
    await associatePerson(AddressId, newPersonId);
    onUpdateAddress(updatedAddress);
  };

  const handleRemovePerson = async (updatedAddress: Address) => {
    if (AddressId === null || localAddress.personId === undefined) return;
    await removePerson(AddressId, localAddress.personId);
    onUpdateAddress(updatedAddress);
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.whiteBackground}]}>
      <Title text={t('title.edit.address')} type="Subtitle" style={{ marginBottom: 20, color: colors.text }}/>
      <TextInput
        label={t('label.street')}
        value={localAddress.street}
        inputStyle={[styles.input, {borderColor :colors.ccc}]}
        onChangeText={(value: string) => setLocalAddress({ ...localAddress, street: value })}
      />
      <TextInput
        label={t('label.city')}
        value={localAddress.city}
        inputStyle={[styles.input, {borderColor :colors.ccc}]}
        onChangeText={(value: string) => setLocalAddress({ ...localAddress, city: value })}
      />

      <Button title={t('button.save')} onPress={handleUpdate} type="save" />

      <Title text={t('title.associated.person')} type="Subtitle" style={{ marginTop: 2, marginBottom: 20, color: colors.text }}/>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{color: colors.text}}>{localAddress.personName}</Text>
        <Button
          title={t('button.delete')}
          type="delete"
          onPress={() => {
            const updatedAddress = {
              ...localAddress,
              personId: undefined,
              personName: undefined,
            };
            setLocalAddress(updatedAddress);
            handleRemovePerson(updatedAddress);
          }}
        />
      </View>

      <Title text={t('title.associate.person')} type="Subtitle" style={{ marginTop: 20, marginBottom: 20, color: colors.text }}/>
      <Select
        selectedValue={newPersonId}
        options={people.map((person) => ({
          label: person.name,
          value: person.id,
        }))}
        placeholder={t('select.person')}
        onValueChange={(value) => {
          if (typeof value === 'string') {
            const parsed = parseInt(value, 10);
            setNewPersonId(isNaN(parsed) ? undefined : parsed);
          } else {
            setNewPersonId(value);
          }
        }}
      />
      <Button
        title={t('button.associate.person')}
        type="save"
        style={{ marginTop: 10 }}
        onPress={() => {
          const selectedPerson = people.find((p) => p.id === newPersonId);
          if (selectedPerson == undefined) return;
          const updatedAddress = {
            ...localAddress,
            personId: newPersonId,
            personName: selectedPerson.name,
          };
          setLocalAddress(updatedAddress);
          handleChangePerson(updatedAddress);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: { padding: 20, flex: 1 },

  input: {
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

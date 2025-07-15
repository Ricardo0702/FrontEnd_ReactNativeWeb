import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { fetchAddresses, createAddress, deleteAddress } from '../../../services/AddressService';
import { fetchPeople } from '../../../services/PersonService';
import type { Address } from '../../../types/IAddress';
import { Person } from '../../../types/IPerson';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import TextInput from '../../../components/TextInput';
import { View, StyleSheet, ScrollView } from 'react-native';
import { saveRecentChange } from '../../../services/localStorage';
import AddressModification from './AddressModification';
import { useTranslation } from 'react-i18next';
import AddressesTable from './AddressesTable';
import { UserContext } from '../../../context/UserContext';
import LoadingSpinner from '../../../components/LoadingSpinner';
import { Skeleton } from '../../../components/Skeleton';
import { useTheme } from '../../../context/ThemeContext';

const AddressesDashboard: React.FC = () => {
  const [Addresses, setAddresses] = useState<Address[]>([]);
  const { t } = useTranslation();
  const form = useRef<Address>({} as Address);
  const [people, setPeople] = useState<Person[]>([]);
  const [showModalForm, setShowModalForm] = useState(false);
  const [showUpdateModal, setUpdateModal] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);
  const [Addressestreet, setAddressestreet] = useState('');
  const [AddressCity, setAddressCity] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { authorities } = useContext(UserContext);
  const [error, setError] = useState<string | undefined>(undefined);
  const { colors } = useTheme();

  const fetchData = async () => {
    try {
      setAddresses(await fetchAddresses());
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

  const handleCreateAddress = async () => {
    try {
      const newAddress = await createAddress(Addressestreet, AddressCity);

      saveRecentChange({
        type: t('type.address'),
        action: t('action.created'),
        name: `"${newAddress.street}, ${newAddress.city}"`,
        timestamp: Date.now(),
      });

      setAddresses((prev) => [...prev, newAddress]);
      setShowModalForm(false);
      setAddressestreet('');
      setAddressCity('');
    } catch (error) {
      console.error(t('error.creating.address'), error);
    }
  };

  const handleDeleteAddress = async (AddressId: number) => {
    try {
      const deletedAddress = Addresses.find((d) => d.id === AddressId);
      await deleteAddress(AddressId);
      setAddresses((prev) => prev.filter((d) => d.id !== AddressId));

      if (deletedAddress) {
        saveRecentChange({
          type: t('type.address'),
          action: t('action.deleted'),
          name: `"${deletedAddress.street}, ${deletedAddress.city}"`,
          timestamp: Date.now(),
        });
      }
    } catch (error) {
      console.error(t('error.deleting.address'), error);
    }
  };

  const handleEditAddress = useCallback(async (Address: Address) => {
    setSelectedAddressId(Address.id);
    form.current = Address;
    setUpdateModal(true);
  }, []);

  const update = useCallback((updatedAddress: Address) => {
    setAddresses((prev) => {
      const updated = prev.map((d) => (d.id === updatedAddress.id ? updatedAddress : d));
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
          <Title text={t('title.registered.addresses')} size="xl" align="center" underline color={colors.text} />
        </View>

        <View style={styles.tableContainer}>
          {isLoading ? (
            skeletonRows
          ) : (
            <AddressesTable Addresses={Addresses} onDelete={handleDeleteAddress} onEdit={handleEditAddress} setShowModalForm={setShowModalForm} />
          )}
        </View>
      </ScrollView>

      <Modal
        title={t('modal.edit.address')}
        visible={showUpdateModal}
        onClose={() => {
          setUpdateModal(false);
        }}
        size="xl"
      >
        <AddressModification AddressId={selectedAddressId} AddressForm={form.current} onUpdateAddress={update} />
      </Modal>

      <Modal title={t('modal.add.address')} visible={showModalForm} onClose={() => setShowModalForm(false)} size="s">
        <View>
          <TextInput label={t('label.street')} value={Addressestreet} onChangeText={setAddressestreet} inputStyle={styles.input} autoFocus />
          <TextInput label={t('label.city')} value={AddressCity} onChangeText={setAddressCity} inputStyle={styles.input} />
          <Button title={t('button.save')} onPress={handleCreateAddress} type="save" />
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

  scrollContainer: { flexGrow: 1, paddingVertical: 20, justifyContent: 'flex-start' },
  
  tableContainer: { marginBottom: 20, justifyContent: 'center', alignItems: 'center' },
  
  label: { marginBottom: 5 },
  
  input: {
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
  },
});

export default AddressesDashboard;

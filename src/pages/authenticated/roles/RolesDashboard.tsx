import React, { useEffect, useState } from 'react';
import { fetchRoles, fetchRole, createRole, deleteRole, updateRole } from '../../../services/RoleService';
import type { Role } from '../../../types/IRole';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import TextInput from '../../../components/TextInput';
import { View, StyleSheet, ScrollView } from 'react-native';
import Title from '../../../components/Title';
import { Skeleton } from '../../../components/Skeleton';
import { useTranslation } from 'react-i18next';
import RolesTable from './RolesTable';

const RolesDashboard: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModalForm, setShowModalForm] = useState(false);
  const [showUpdateModal, setUpdateModal] = useState(false);
  const [roleName, setRoleName] = useState('');
  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);

  const {t} = useTranslation();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve));
      const data = await fetchRoles();
      setRoles(data);
    } catch (error) {
      console.error(t('error.loading.roles'), error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateRole = async () => {
    try {
      const newRole = await createRole(roleName);
      fetchData();
      setShowModalForm(false);
      setRoleName('');
    } catch (error) {
      console.error(t('error.creating.role'), error);
    }
  };

  const handleDeleteRole = async (roleId: number) => {
    try {
      const deletedRole = roles.find(r => r.id === roleId);
      await deleteRole(roleId);
      setRoles(prev => prev.filter(r => r.id !== roleId));
    } catch (error) {
      console.error(t("error.deleting.role"), error);
    }
  };

  const handleEditRole = (role: Role) => {
      setSelectedRoleId(role.id);
      setRoleName(role.name);
      setUpdateModal(true);
    };

  const handleUpdateRole = async (roleId: number, roleName: string) => {
    try {
      await updateRole(roleId, roleName);
      fetchData();
      setUpdateModal(false);
      setRoleName('');
    } catch (error) {
      console.error(t("error.editing.role"), error);
    }
  };

  const skeletonRows = Array.from({ length: 5 }, (_, i) => (
    <View key={i} style={{ flexDirection: 'row', gap: 20, marginBottom: 12 }}>
      <Skeleton width={300} height={20} />
      <Skeleton width={150} height={35} />
    </View>
  ));

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{ paddingBottom: 10 }}>
          <Title text={t('title.registered.roles')} size='xl' align='center' underline />
        </View>

        <View style={styles.tableContainer}>
          {isLoading ? skeletonRows : (
            <RolesTable roles = {roles} onDelete={handleDeleteRole} onEdit={handleEditRole} />
          )}
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button title={t("button.add.role")} onPress={() => setShowModalForm(true)} type='add' />
        </View>
      </ScrollView>

      <Modal title={t("modal.edit.role")} visible={showUpdateModal} onClose={() => setUpdateModal(false)} size="xs">
        <View>
          <TextInput label={t('label.role.name')} value={roleName} onChangeText={setRoleName} style={styles.input} autoFocus />
          <Button
            title={t("button.save")}
            onPress={() => {
              if (selectedRoleId !== null) {
                handleUpdateRole(selectedRoleId, roleName);
              }
            }}
            type='save'
          />
        </View>
      </Modal>

      <Modal title={t("modal.add.role")} visible={showModalForm} onClose={() => setShowModalForm(false)} size="xs">
        <View>
          <TextInput label={t('label.role.name')} value={roleName} onChangeText={setRoleName} style={styles.input} autoFocus />
          <Button title={t("button.saver")} onPress={handleCreateRole} type='save' />
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
  input: {
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
  },
});

export default RolesDashboard;

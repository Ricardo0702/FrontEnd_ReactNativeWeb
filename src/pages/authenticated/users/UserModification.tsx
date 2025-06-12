import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchPerson, updatePerson, createEmptyPerson, associateProject, removeProject } from '../../../services/PersonService';
import { fetchUser, updateUser, createEmptyUser, assignRole, removeRole } from '../../../services/UserService';
import { fetchProjects, fetchProject } from '../../../services/ProjectService';
import { fetchRoles, fetchRole } from '../../../services/RoleService';
import { Project } from '../../../types/IProject';
import { Role } from '../../../types/IRole';
import { Person } from '../../../types/IPerson';
import { User } from '../../../types/IUser';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import Select from '../../../components/Select';
import { useTranslation } from 'react-i18next';

type Props = {
  userId: number | null;
};

export default function PersonModification({ userId }: Props) {

  const {t} = useTranslation();
  
  const [user, setUser] = useState<User>(createEmptyUser());
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newRoleId, setNewRoleId] = useState<number | undefined>(undefined);

  const [associatedRoles, setAssociatedRoles] = useState<Role[]>([]);

  const loadUser = async () => {
    try {
      if (userId === null) return;
      const data = await fetchUser(userId);
      setUser(data);
      setUsername(data.username);
      setPassword(data.password);
    } catch (error) {
      console.error(t('error.loading.user'), error);
    }
  };

  const loadRoles = async () => {
    try {
      const data = await fetchRoles();
      setRoles(data);
    } catch (error) {
      console.error(t('error.loading.roles'), error);
    }
  };

  const loadAssociatedRoles = async () => {
    if (!user.roleIds || user.roleIds.length === 0) {
      setAssociatedRoles([]);
      return;
    }
    try {
      const rolesData = await Promise.all(
        user.roleIds.map((id) => fetchRole(id))
      );
      setAssociatedRoles(rolesData);
    } catch (error) {
      console.error(t('error.loading.associated.roles'), error);
    }
  };

  useEffect(() => {
    loadUser();
    loadRoles();
  }, []);

  useEffect(() => {
    loadAssociatedRoles();
  }, [user.roleIds]);

  const handleUpdate = async () => {
    if (userId === null) return;
    await updateUser(userId, username);
    await loadUser();
  };

  const handleAddRole = async () => {
    if (userId === null || !newRoleId) return;
    await assignRole(userId, newRoleId);
    await loadUser();
    await loadAssociatedRoles();
  };

  const handleRemoveRole = async (roleId: number) => {
    if (userId === null) return;
    await removeRole(userId, roleId);
    await loadUser();
    await loadAssociatedRoles();
  };

  return (
    <View style={styles.container}>
      <Title text={t('title.edit.user')} type='Subtitle' style={{ marginBottom: 20 }} />
      <TextInput label={t('label.Username')} value={username} onChangeText={setUsername} style={styles.input} />
      <Button title={t("button.save")} onPress={handleUpdate} type="save" />

      <Title text={t('title.assigned.roles')} type='Subtitle' style={{ marginTop: 20, marginBottom: 20 }} />
      {(user.roleIds || []).map((id) => {
        const role = roles.find(r => r.id === id);
        if (!role) return null;
        return (
          <View key={id} style={styles.listItem}>
            <Text>{role.name}</Text>
            <Button title={t("button.delete")} onPress={() => handleRemoveRole(id)} type="delete" />
          </View>
        );
      })}

      <Title text={t('title.add.role')} type='Subtitle' style={{ marginTop: 20, marginBottom: 20 }} />
      <Select
        selectedValue={newRoleId}
        onValueChange={(value) => {
          if (typeof value === 'string') {
            const parsed = parseInt(value, 10);
            setNewRoleId(isNaN(parsed) ? undefined : parsed);
          } else {
            setNewRoleId(value);
          }
        }}
        options={roles.map((role) => ({
          label: role.name,
          value: role.id,
        }))}
        placeholder={t("select.role")}
      />
      <Button title={t("button.assign.role")} onPress={handleAddRole} type='save' />
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

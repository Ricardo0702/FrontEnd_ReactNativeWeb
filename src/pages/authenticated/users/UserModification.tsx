import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { updateUser, assignRole, removeRole } from '../../../services/UserService';
import { fetchRoles, fetchRole } from '../../../services/RoleService';
import { Role } from '../../../types/IRole';
import { User } from '../../../types/IUser';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import Select from '../../../components/Select';
import { useTranslation } from 'react-i18next';

type Props = {
  userId: number | null;
  userForm: User;
  onUpdateUser: (updatedUser: User) => void;
};

export default function UserModification({ userId, userForm, onUpdateUser }: Props) {

  const {t} = useTranslation();
  const [localUser, setLocalUser] = useState<User>(userForm);
  const [roles, setRoles] = useState<Role[]>([]);
  const [newRoleId, setNewRoleId] = useState<number | undefined>(undefined);
  const [associatedRoles, setAssociatedRoles] = useState<Role[]>([]);

  const loadAssociatedRoles = async () => {
    if (!localUser.roleIds || localUser.roleIds.length === 0) {
      setAssociatedRoles([]);
      return;
    }
    try {
      const rolesData = await Promise.all(
        localUser.roleIds.map((id) => fetchRole(id))
      );
      setAssociatedRoles(rolesData);
    } catch (error) {
      console.error(t('error.loading.associated.roles'), error);
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setRoles(await( fetchRoles() ));
      } catch (error) {
        console.error(t('error.loading.data'), error);
      }
    };
    loadInitialData();
  }, []);
  
    useEffect(() => {
      loadAssociatedRoles();
    }, [localUser.roleIds]);

  const handleUpdate = async () => {
    if (userId === null) return;
    await updateUser(userId, localUser.username);
    onUpdateUser(localUser)
  };

  const handleAddRole = async () => {
    if (userId === null || !newRoleId) return;
    const updateRoleIds = localUser.roleIds? [...localUser.roleIds, newRoleId]: [newRoleId];
    setLocalUser({...localUser, roleIds: updateRoleIds})
    await assignRole(userId, newRoleId);
    await loadAssociatedRoles();
    onUpdateUser(localUser);
  };

  const handleRemoveRole = async (roleId: number) => {
    if (userId === null) return;
    const updatedRoleIds = localUser.roleIds?.filter(id => id != roleId) || [];
    setLocalUser({...localUser, roleIds: updatedRoleIds});
    await removeRole(userId, roleId);
    await loadAssociatedRoles();
    onUpdateUser(localUser);
  };

  return (
    <View style={styles.container}>
      <Title text={t('title.edit.user')} type='Subtitle' style={{ marginBottom: 20 }} />
      <TextInput 
        label={t('label.Username')} value={localUser.username} style={styles.input}
        onChangeText={(value: string) => setLocalUser({...localUser, username: value})}  />
      <Button title={t("button.save")} onPress={handleUpdate} type="save" />

      <Title text={t('title.assigned.roles')} type='Subtitle' style={{ marginTop: 20, marginBottom: 20 }} />
      {(localUser.roleIds || []).map((id) => {
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

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { updateUser, assignRole, removeRole } from '../../../../services/UserService';
import { fetchRoles, fetchRole } from '../../../../services/RoleService';
import { Role } from '../../../../types/IRole';
import { User } from '../../../../types/IUser';
import TextInput from '../../../../components/TextInput';
import Button from '../../../../components/Button';
import Title from '../../../../components/Title';
import Select from '../../../../components/Select';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../../context/ThemeContext';

type Props = {
  userId: number | null;
  userForm: User;
  onUpdateUser: (updatedUser: User) => void;
};

export default function UserModification({ userId, userForm, onUpdateUser }: Props) {
  const { t } = useTranslation();
  const [localUser, setLocalUser] = useState<User>(userForm);
  const [roles, setRoles] = useState<Role[]>([]);
  const [newRoleId, setNewRoleId] = useState<number | undefined>(undefined);
  const [associatedRoles, setAssociatedRoles] = useState<Role[]>([]);
  const { colors }= useTheme();

  const loadAssociatedRoles = async () => {
    if (!localUser.roleIds || localUser.roleIds.length === 0) {
      setAssociatedRoles([]);
      return;
    }
    try {
      const rolesData = await Promise.all(localUser.roleIds.map((id) => fetchRole(id)));
      setAssociatedRoles(rolesData);
    } catch (error) {
      console.error(t('error.loading.associated.roles'), error);
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setRoles(await fetchRoles());
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
    try {
      const updatedUser = await updateUser(userId, localUser.username);
      onUpdateUser(updatedUser);
      setLocalUser(updatedUser);
    } catch (error) {
      console.error('Error updating user', error);
    }
  };

  const handleAddRole = async (role: Role, updatedUser: User) => {
    if (userId === null || !newRoleId) return;
    await assignRole(userId, newRoleId);
    setAssociatedRoles((prev) => [...prev, role]);
    onUpdateUser(updatedUser);
  };

  const handleRemoveRole = async (roleId: number, updatedUser: User) => {
    if (userId === null) return;
    await removeRole(userId, roleId);
    setAssociatedRoles((prev) => prev.filter((r) => r.id !== roleId));
    onUpdateUser(updatedUser);
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.whiteBackground}]}>
      <Title text={t('title.edit.user')} type="Subtitle" style={{ marginBottom: 20, color: colors.text}} />
      <TextInput
        label={t('label.Username')}
        value={localUser.username}
        inputStyle={[styles.input, {borderColor: colors.ccc}]}
        onChangeText={(value: string) => setLocalUser({ ...localUser, username: value })}
      />
      <Button title={t('button.save')} onPress={handleUpdate} type="save" />

      <Title text={t('title.assigned.roles')} type="Subtitle" style={{ marginTop: 20, marginBottom: 20, color: colors.text }} />
      {(localUser.roleIds || []).map((id) => {
        const role = roles.find((r) => r.id === id);
        if (!role) return null;
        return (
          <View key={id} style={styles.listItem}>
            <Text style= {{color: colors.text}}>{role.name}</Text>
            <Button
              title={t('button.delete')}
              type="delete"
              onPress={() => {
                const updatedUser = {
                  ...localUser,
                  roleIds: localUser.roleIds?.filter((rId) => rId !== id) ?? null,
                  roles: localUser.roles?.filter((r) => r !== role.name) ?? null,
                };
                setLocalUser(updatedUser);
                handleRemoveRole(id, updatedUser);
              }}
            />
          </View>
        );
      })}

      <Title text={t('title.add.role')} type="Subtitle" style={{ marginTop: 20, marginBottom: 20, color: colors.text }} />
      <Select
        selectedValue={newRoleId}
        options={roles.map((role) => ({ label: role.name, value: role.id }))}
        placeholder={t('select.role')}
        onValueChange={(value) => {
          if (typeof value === 'string') {
            const parsed = parseInt(value, 10);
            setNewRoleId(isNaN(parsed) ? undefined : parsed);
          } else {
            setNewRoleId(value);
          }
        }}
      />
      <Button
        title={t('button.assign.role')}
        type="save"
        style={{ marginTop: 10 }}
        onPress={() => {
          const role = roles.find((r) => r.id === newRoleId);
          if (role === undefined || newRoleId === undefined) return;
          const updatedUser = {
            ...localUser,
            roleIds: [...(localUser.roleIds ?? []), newRoleId],
            roles: [...(localUser.roles ?? []), role.name],
          };
          setLocalUser(updatedUser);
          handleAddRole(role, updatedUser);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: { padding: 20, flex: 1, backgroundColor: '#fff' },

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

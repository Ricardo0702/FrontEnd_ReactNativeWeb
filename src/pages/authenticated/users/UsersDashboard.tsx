import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import TextInput from '../../../components/TextInput';
import { Skeleton } from '../../../components/Skeleton';
import { fetchUsers, deleteUser, fetchUserByUsername } from '../../../services/UserService';
import type { User } from '../../../types/IUser';
import { View, StyleSheet,ScrollView } from 'react-native';
import UsersTable from './UsersTable';
import UserModification from './UserModification';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../../context/UserContext';



const UsersDashboard: React.FC = () => {
  
  const [users, setUsers] = useState<User[]>([]);
  const {t} = useTranslation();
  const form = useRef<User>({} as User)
  const [showModalForm, setShowModalForm] = useState(false);
  const [showUpdateModal, setUpdateModal] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const userContext = useContext(UserContext); 

  const fetchData = async () => {
      try {
        setUsers(await fetchUsers());
      } catch (error: any) {
        setError(error.response.data);
        console.error(t('error.loading.people'), error);
      }
      setIsLoading(false)
    };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteUser = useCallback(async (userId: number) => {
    try {
      await deleteUser(userId);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error(t("error.deleting.user"), error);
    }
  }, [users]);


  const handleCreateUser = async () => {
    try {
      await userContext.signUp(username, password);
      const newUser = await fetchUserByUsername(username);
      setUsers(prev => [...prev, newUser]);
      setShowModalForm(false);
      setUsername('');
      setPassword
    } catch (error) {
      console.error(t('error.creating.user'), error);
    }
  };

  const handleEditUser = useCallback(async(user: User) => {
    form.current = user;
    setSelectedUserId(user.id);
    setUpdateModal(true);
  }, [])

  const update = useCallback((updatedUser: User) => {
      setUsers(prev => {
        const updated = prev.map(p => (p.id === updatedUser.id ? updatedUser : p))
        return updated;
      });
    }, []);

  const skeletonRows = Array.from({ length: 5 }, (_, i) => (
      <View key={i} style={{ flexDirection: 'row', gap: 20, marginBottom: 12 }}>
        <Skeleton width={300} height={20} />
        <Skeleton width={150} height={35} />
      </View>
    ));

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={{paddingBottom: 30}}>
          <Title text = {t('title.registered.users')} size = 'xl' align = 'center' underline/>
        </View>

        <View style={styles.tableContainer}>
          {isLoading ? skeletonRows : (
            <UsersTable users={users} onDelete={handleDeleteUser} onEdit={handleEditUser} setShowModalForm={setShowModalForm}/>
          )}
        </View>

      </ScrollView>

      <Modal title={t("modal.add.user")} visible={showModalForm} onClose={() => setShowModalForm(false)} size="s">
        <View>
          <TextInput label= {t('label.username')} value={username} onChangeText={setUsername} style={styles.input} autoFocus/>

          <TextInput label= {t('label.password')} value={password} onChangeText={setPassword} style={styles.input} autoFocus />

          <Button title={t("button.save")} onPress={handleCreateUser} type = 'save'/>
        </View>
      </Modal>
      
      <Modal title={t("modal.edit.user")} visible={showUpdateModal} onClose = {() => {setUpdateModal(false), fetchData()}} size = "xl">
        <UserModification userId={selectedUserId} userForm={form.current} onUpdateUser={update}/>
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

export default UsersDashboard;
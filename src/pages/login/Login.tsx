import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { login, signIn } from '../../services/AuthService';
import Modal from '../../components/Modal'; 
import Button from '../../components/Button';
import Title from '../../components/Title';
import TextInput from '../../components/TextInput';
import { useTranslation } from 'react-i18next';

interface Props {
  onLoginSuccess: () => void;
  onSignInSuccess?: () => void;
}

const LoginForm: React.FC<Props> = ({ onLoginSuccess, onSignInSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const {t} = useTranslation();


  const handleLogin = async () => {
    try {
      await login(username, password);
      setShowLoginModal(false);
      onLoginSuccess();
    } catch (error) {
      console.error(t('Error al iniciar sesión:'), error);
    }
  };

  const handleSignIn = async () => {
    try{
      await signIn(username, password);
      setShowSignInModal(false);
      onSignInSuccess?.();
    } catch (error){
      console.error(t('Usuario o contraseña no validos'), error);
    }
  };

  return (
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{paddingBottom: 10}}>
          <Title style = {{paddingBottom: 30}} text= {t('Web Project')} size= 'xl' align= 'center' underline bold />
        </View>

        <View style = {{alignItems: 'center', justifyContent: 'center', borderRadius: 8}}>
          <View style = {{paddingBottom: 15}}>
            <Button title={t("Crear usuario")} onPress={() => setShowSignInModal(true)} width={150} height={50} type = 'add' />
          </View>

          <View style = {{ paddingBottom: 15}}>
            <Button title={t("Iniciar sesion")} onPress={() => setShowLoginModal(true)} width={150} height={50} type = 'add' />
          </View>
        </View>
      </ScrollView>

      <Modal title={t("Crear usuario")} visible= {showSignInModal} onClose={() => setShowSignInModal(false)} position="center" size="xs" >
        <View style={styles.formContainer}>
          <TextInput label={t("Usuario")} value={username} onChangeText={setUsername} style={styles.inputField} />
          <TextInput label={t("Contraseña")} value={password} onChangeText={setPassword} secure style={styles.inputField} />
          <Button title={("Crear")} onPress={handleSignIn} type = 'save' />
        </View>
      </Modal>

      <Modal title={t("Iniciar Sesión")} visible= {showLoginModal} onClose={() => setShowLoginModal(false)} position="center" size="xs" >
        <View style={styles.formContainer}>
          <TextInput label={t("Usuario")} value={username} onChangeText={setUsername} style={styles.inputField} />
          <TextInput label={t("Contraseña")} value={password} onChangeText={setPassword} secure style={styles.inputField} />
          <Button title={t("Iniciar Sesión")} onPress={handleLogin} type = 'save' />
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignContent: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 60,
    width: '90%',
    maxWidth: '100%',   
    marginHorizontal: 'auto',
  },
  scrollContainer: { 
    flexGrow: 1, 
    paddingVertical: 20,
    justifyContent: 'flex-start',
    paddingTop: 200
  },
  formContainer: {
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputField: {
    width: 250,
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  }
});


export default LoginForm;

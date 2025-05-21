import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ScrollView } from 'react-native';
import { login, signIn } from '../../services/AuthService';
import Modal from '../../components/modal/Modal'; 
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';

interface Props {
  onLoginSuccess: () => void;
  onSignInSuccess?: () => void;
}

const LoginForm: React.FC<Props> = ({ onLoginSuccess, onSignInSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);


  const handleLogin = async () => {
    try {
      await login(username, password);
      setShowLoginModal(false);
      onLoginSuccess();
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const handleSignIn = async () => {
    try{
      await signIn(username, password);
      setShowSignInModal(false);
      onSignInSuccess?.();
    } catch (error){
      console.error('Usuario o contraseña no validos', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{paddingBottom: 10}}>
          <Title
            text = 'Web Project'
            size = 'xl'
            align = 'center'
            underline
            bold
            />
        </View>
        <View style = {{alignItems: 'center'}}>
            <Button
                title="Crear usuario"
                onPress={() => setShowSignInModal(true)}
                type = 'add'
            />
            <Button
                title="Iniciar sesion"
                onPress={() => setShowLoginModal(true)}
                type = 'add'
            />
        </View>
      </ScrollView>
      <Modal
        title="Crear usuario"
        visible= {showSignInModal}
        onClose={() => setShowSignInModal(false)}
        position="center"
        size="xs"
      >
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Usuario"
            value={username}
            onChangeText={setUsername}
            style={styles.inputField}
          />
          <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.inputField}
          />
          <Button
            title="Crear"
            onPress={handleSignIn}
            type = 'save'
          />
        </View>
      </Modal>
      <Modal
        title="Iniciar Sesión"
        visible= {showLoginModal}
        onClose={() => setShowLoginModal(false)}
        position="center"
        size="xs"
      >
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Usuario"
            value={username}
            onChangeText={setUsername}
            style={styles.inputField}
          />
          <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.inputField}
          />
          <Button
            title="Iniciar Sesión"
            onPress={handleLogin}
            type = 'save'
          />
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

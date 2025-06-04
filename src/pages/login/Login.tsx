import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
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

  const [loginError, setLoginError] = useState('');
  const [signInError, setSignInError] = useState('');

  const [touchedLogin, setTouchedLogin] = useState(false);
  const [touchedSignIn, setTouchedSignIn] = useState(false);


  const {t} = useTranslation();

  const handleLogin = async () => {
    setTouchedLogin(true);
    if (username.trim() === '' || password.trim() === '') return;
    try {
      setLoginError('');
      await login(username, password);
      setShowLoginModal(false);
      onLoginSuccess();
    } catch (error: any) {
      
      const backendMessage = error.response.data;
      setLoginError(backendMessage || t('error.login'));
    }
  };

  const handleSignIn = async () => {

    setTouchedSignIn(true);
    if (username.trim() === '' || password.trim() === '') return;
    try {
      setSignInError('');
      await signIn(username, password);
      setShowSignInModal(false);
      onSignInSuccess?.();
    } catch (error: any) {
      const backendMessage = error.response.data
      setSignInError(backendMessage || t('error.creating.user'));
    }
  };

  return (
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{paddingBottom: 10}}>
          <Title style = {{paddingBottom: 30}} text= {t('title.web project')} size= 'xl' align= 'center' underline bold />
        </View>

        <View style = {{alignItems: 'center', justifyContent: 'center', borderRadius: 8}}>
          <View style = {{paddingBottom: 15}}>
            <Button title={t("button.create.user")} onPress={() => setShowSignInModal(true)} width={150} height={50} type = 'add' />
          </View>

          <View style = {{ paddingBottom: 15}}>
            <Button title={t("button.login")} onPress={() => setShowLoginModal(true)} width={150} height={50} type = 'add' />
          </View>
        </View>
      </ScrollView>

      <Modal title={t("modal.create.user")} visible= {showSignInModal} onClose={() => setShowSignInModal(false)} position="center" size="xs" >
        <View style={styles.formContainer}>
          <TextInput
            label={t("label.user")} value={username} onChangeText={setUsername}
            inputStyle={[
              styles.inputField,
              touchedLogin && username.trim() === '' && styles.inputError, 
            ]}  
            errorMessage={touchedSignIn && username.trim() === '' ? t('error.username.cannot be empty') : ''} 
          />
          <TextInput
            label={t("label.password")} value={password} onChangeText={setPassword} secure
            inputStyle={[
              styles.inputField,
              touchedLogin && password.trim() === '' && styles.inputError,
            ]}  
            errorMessage={touchedSignIn && password.trim() === '' ? t('error.password.cannot be empty') : ''}
          />
          {signInError !== '' && <Text style={styles.errorText}>{signInError}</Text>}
          <Button title={("button.create")} onPress={handleSignIn} type = 'save' />
        </View>
      </Modal>

      <Modal title={t("modal.login")} visible= {showLoginModal} onClose={() => setShowLoginModal(false)} position="center" size="xs" >
        <View style={styles.formContainer}>
          <TextInput 
            label={t("label.user")} value={username} onChangeText={setUsername}
            inputStyle={[
              styles.inputField,
              touchedLogin && username.trim() === '' && styles.inputError,
            ]} 
            errorMessage={touchedLogin && username.trim() === '' ? t('error.username.cannot be empty') : ''}
          />
          <TextInput 
            label={t("label.password")} value={password} onChangeText={setPassword} secure
            inputStyle={[
              styles.inputField,
              touchedLogin && password.trim() === '' && styles.inputError, 
            ]} 
            errorMessage= {touchedLogin && password.trim() === '' ? t('error.password.cannot be empty') : ''} 
          />
          {loginError !== '' && <Text style={styles.errorText}>{loginError}</Text>}
          <Button title={t("button.login")} onPress={handleLogin} type = 'save' />
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
  },
  inputError: {
    borderColor: 'red',
  },
    errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  }
});


export default LoginForm;

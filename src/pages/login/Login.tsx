import React, { useState, useContext } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Title from '../../components/Title';
import TextInput from '../../components/TextInput';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../context/UserContext';
import Icon from '../../components/Icon';
import { useTheme } from '../../context/ThemeContext';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface Props {
  onLoginSuccess: () => void;
  onSignUpSuccess?: () => void;
}

const LoginForm: React.FC<Props> = ({ onLoginSuccess, onSignUpSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const { loginByUsername } = useContext(UserContext);
  const { signUp } = useContext(UserContext);
  const [loginError, setLoginError] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const [touchedLogin, setTouchedLogin] = useState(false);
  const [touchedSignUp, setTouchedSignUp] = useState(false);
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const { colors } = useTheme();

  const handleLogin = async () => {
    setTouchedLogin(true);
    if (username.trim() === '' || password.trim() === '') return;
    try {
      setLoginError('');
      await loginByUsername(username, password);
      setShowLoginModal(false);
      onLoginSuccess();
    } catch (error: any) {
      const backendMessage = error.response.data;
      setLoginError(backendMessage || t('error.login'));
    }
  };

  const handleSignUp = async () => {
    setTouchedSignUp(true);
    if (username.trim() === '' || password.trim() === '') return;
    try {
      setSignUpError('');
      await signUp(username, password);
      await loginByUsername(username, password);
      setShowSignUpModal(false);
      onSignUpSuccess?.();
    } catch (error: any) {
      const backendMessage = error.response.data;
      setSignUpError(backendMessage || t('error.creating.user'));
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{ paddingBottom: 10 }}>
          <Title style={{ paddingBottom: 30 }} text={t('title.web project')} size="xl" align="center" underline bold />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}
        >
          <View style={{ paddingBottom: 15 }}>
            <Button title={t('button.create.user')} onPress={() => setShowSignUpModal(true)} width={150} height={50} type="save" />
          </View>
          <View style={{ paddingBottom: 15 }}>
            <Button title={t('button.login')} onPress={() => setShowLoginModal(true)} width={150} height={50} type="save" />
          </View>
        </View>
      </ScrollView>

      <Modal
        title={t('modal.create.user')}
        visible={showSignUpModal}
        position="center"
        size="s"
        onClose={() => {
          (setUsername(''), setPassword(''), setShowSignUpModal(false));
        }}
      >
        <View style={styles.formContainer}>
          <TextInput
            label={t('label.user')}
            value={username}
            onChangeText={setUsername}
            inputStyle={[styles.inputField, touchedSignUp && username.trim() === '' && styles.inputError]}
            errorMessage={touchedSignUp && username.trim() === '' ? t('error.username.cannot be empty') : ''}
          />
          <TextInput
            label={t('label.password')}
            value={password}
            onChangeText={setPassword}
            secure={!showPassword}
            onSubmitEditing={handleSignUp}
            returnKeyType="done"
            inputStyle={[styles.inputField, touchedSignUp && password.trim() === '' && styles.inputError]}
            errorMessage={touchedSignUp && password.trim() === '' ? t('error.password.cannot be empty') : ''}
            rightIcon={
              <TouchableOpacity activeOpacity={1} onPress={() => setShowPassword((prev) => !prev)}>
                <Icon icon={showPassword ? faEyeSlash : faEye} size={18} color={colors.darksteel} />
              </TouchableOpacity>
            }
          />
          {signUpError !== '' && (
            <Text style={styles.errorText}>{typeof signUpError === 'string' ? signUpError : JSON.stringify(signUpError, null, 2)}</Text>
          )}
          <Button title={t('button.create.user')} onPress={handleSignUp} type="save" />
        </View>
      </Modal>

      <Modal
        title={t('modal.login')}
        visible={showLoginModal}
        position="center"
        size="s"
        onClose={() => {
          (setUsername(''), setPassword(''), setShowLoginModal(false));
        }}
      >
        <View style={styles.formContainer}>
          <TextInput
            label={t('label.user')}
            value={username}
            onChangeText={setUsername}
            inputStyle={[styles.inputField, touchedLogin && username.trim() === '' && styles.inputError]}
            errorMessage={touchedLogin && username.trim() === '' ? t('error.username.cannot be empty') : ''}
          />
          <TextInput
            label={t('label.password')}
            value={password}
            onChangeText={setPassword}
            secure={!showPassword}
            onSubmitEditing={handleLogin}
            returnKeyType="done"
            inputStyle={[styles.inputField, touchedLogin && password.trim() === '' && styles.inputError]}
            errorMessage={touchedLogin && password.trim() === '' ? t('error.password.cannot be empty') : ''}
            rightIcon={
              <TouchableOpacity activeOpacity={1} onPress={() => setShowPassword((prev) => !prev)}>
                <Icon icon={showPassword ? faEyeSlash : faEye} size={18} color={colors.darksteel} />
              </TouchableOpacity>
            }
          />
          {loginError !== '' && (
            <Text style={styles.errorText}>{typeof loginError === 'string' ? loginError : JSON.stringify(loginError, null, 2)}</Text>
          )}
          <Button title={t('button.login')} onPress={handleLogin} type="save" />
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
    paddingTop: 200,
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

  inputError: { borderColor: 'red' },

  errorText: { color: 'red', marginBottom: 10, textAlign: 'center' },
});

export default LoginForm;

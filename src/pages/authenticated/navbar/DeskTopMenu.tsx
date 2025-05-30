import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../../components/Colors';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './LanguageDropdown';

interface DesktopMenuProps {
  onLogout: () => void;
  onChangeLanguage: (lng: string) => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ onLogout, onChangeLanguage }) => {
  const { t } = useTranslation();

  const navigateTo = (path: string) => {
    window.location.pathname = path;
  };

  return (
    <View style={styles.navLinks}>
      <TouchableOpacity onPress={() => navigateTo('/auth/people')}>
        <Text style={styles.navLink}>{t('Personas')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('/auth/projects')}>
        <Text style={styles.navLink}>{t('Proyectos')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('/auth/directions')}>
        <Text style={styles.navLink}>{t('Direcciones')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onLogout}>
        <Text style={styles.navLink}>{t('Cerrar sesión')}</Text>
      </TouchableOpacity>
      <LanguageDropdown onChangeLanguage={onChangeLanguage} />
    </View>
  );
};

const styles = StyleSheet.create({
  navLinks: {
    flexDirection: 'row',
    gap: 15,
  },
  navLink: {
    color: 'white',
    fontSize: 17,
    marginVertical: 5,
  },
});

export default DesktopMenu;

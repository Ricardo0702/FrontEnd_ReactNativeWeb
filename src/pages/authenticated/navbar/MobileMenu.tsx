import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../../components/Colors';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './LanguageDropdown';

interface MobileMenuProps {
  onLogout: () => void;
  onChangeLanguage: (lng: string) => void;
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onLogout, onChangeLanguage, closeMenu }) => {
  const { t } = useTranslation();
  const navigateTo = (path: string) => {
    closeMenu();
    window.location.pathname = path;
  };

  return (
    <View style={styles.dropdown}>
      <TouchableOpacity onPress={() => navigateTo('/auth/people')}>
        <Text style={styles.navLink}>{t('navbar.people')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('/auth/projects')}>
        <Text style={styles.navLink}>{t('navbar.projects')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('/auth/directions')}>
        <Text style={styles.navLink}>{t('navbar.addresses')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('/auth/users')}>
        <Text style={styles.navLink}>{t('navbar.users')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('/auth/roles')}>
        <Text style={styles.navLink}>{t('navbar.roles')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { onLogout(); closeMenu(); }}>
        <Text style={styles.navLink}>{t('navbar.logout')}</Text>
      </TouchableOpacity>
      <LanguageDropdown onChangeLanguage={onChangeLanguage} />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 10,
    backgroundColor: Colors.lightsteel,
    padding: 10,
    borderRadius: 8,
  },
  navLink: {
    color: 'white',
    fontSize: 17,
    marginVertical: 5,
  },
});

export default MobileMenu;

import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../../components/Colors';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './LanguageDropdown';
import { hasAuthority, Authority} from '../../../hooks/UseAuthority';
import AdminDropdown from './AdminDropdown';
import { useNavigate } from 'react-router-dom';
import PagesDropdown from './PgesDropdown';
import { UserContext } from '../../../context/UserContext';

interface MobileMenuProps {
  onLogout: () => void;
  onChangeLanguage: (lng: string) => void;
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onLogout, onChangeLanguage, closeMenu }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { authorities } = useContext(UserContext);

  return (
    <View style={styles.dropdown}>
      <PagesDropdown dropdownStyle={{backgroundColor: Colors.darksteel, padding: 5}} />
      {hasAuthority(authorities, Authority.ROLE_ADMIN) && (<><AdminDropdown dropdownStyle={{backgroundColor: Colors.darksteel, padding: 5}}/></>)}
      <LanguageDropdown onChangeLanguage={onChangeLanguage} dropdownStyle={{backgroundColor: Colors.darksteel, padding: 5}} />
      <TouchableOpacity onPress={() => { onLogout(); closeMenu(); }}>
        <Text style={styles.navLink}>{t('navbar.logout')}</Text>
      </TouchableOpacity>
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

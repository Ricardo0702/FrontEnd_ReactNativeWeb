import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './LanguageDropdown';
import { hasAuthority, Authority } from '../../../hooks/UseAuthority';
import AdminDropdown from './AdminDropdown';
import { useNavigate } from 'react-router-dom';
import PagesDropdown from './PgesDropdown';
import { UserContext } from '../../../context/UserContext';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import { useTheme } from '../../../context/ThemeContext';

interface MobileMenuProps {
  onLogout: () => void;
  onChangeLanguage: (lng: string) => void;
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onLogout, onChangeLanguage, closeMenu }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { authorities } = useContext(UserContext);
  const [logoutModal, setLogoutModal] = useState(false);
  const { colors } = useTheme();

  const handleLogoutClick = () => {
    setLogoutModal(true);
  };
  const confirmLogout = () => {
    setLogoutModal(false);
    onLogout();
  };
  const cancelLogout = () => {
    setLogoutModal(false);
  };

  return (
    <View style={[styles.dropdown, {backgroundColor: colors.midsteel}]}>
      <PagesDropdown dropdownStyle={{ backgroundColor: colors.darksteel, padding: 5 }} closeMenu={closeMenu} />
      {hasAuthority(authorities, Authority.ROLE_ADMIN) && (
        <>
          <AdminDropdown dropdownStyle={{ backgroundColor: colors.darksteel, padding: 5 }} closeMenu={closeMenu} />
        </>
      )}
      <LanguageDropdown onChangeLanguage={onChangeLanguage} closeMenu={closeMenu} dropdownStyle={{ backgroundColor: colors.darksteel, padding: 5 }} />
      <TouchableOpacity onPress={handleLogoutClick}>
        <Text style={[styles.navLink, {color: colors.whiteText}]}>{t('navbar.logout')}</Text>
      </TouchableOpacity>
      <Modal title={t('confirm.logout.title')} visible={logoutModal} onClose={cancelLogout} size="s" position="top">
        <Text style={{ marginBottom: 20, alignSelf: 'center' }}> {t('confirm.logout.message')} </Text>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 30,
          }}
        >
          <Button title={t('button.cancel')} size="xxs" color={colors.whiteText} onPress={() => setLogoutModal(false)} 
            style={[styles.cancelButton, {color: colors.whiteText, backgroundColor: colors.darksteel}]}/>
          <Button title={t('button.logout')} size="xxs" color={colors.whiteText} onPress={confirmLogout}
            style={[{color: colors.whiteText, backgroundColor: colors.darksteel}]}/>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({

  dropdown: {
    marginTop: 5,
    padding: 5,
    borderRadius: 8,
  },

  navLink: { fontSize: 17, marginVertical: 5 },

  cancelButton: { marginBottom: 20 },

});

export default MobileMenu;

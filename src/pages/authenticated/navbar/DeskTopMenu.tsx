import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Authority, hasAuthority } from '../../../hooks/UseAuthority';
import AdminDropdown from './dropdowns/AdminDropdown';
import PagesDropdown from './dropdowns/PgesDropdown';
import ConfigDropdown from './dropdowns/ConfigDropdown';
import { UserContext } from '../../../context/UserContext';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import { useTheme } from '../../../context/ThemeContext';

interface DesktopMenuProps {
  onLogout: () => void;
  onChangeLanguage: (lng: string) => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ onLogout, onChangeLanguage }) => {
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
    <View style={styles.navLinks}>
      <PagesDropdown />
      {hasAuthority(authorities, Authority.ROLE_ADMIN) && (
        <>
          <AdminDropdown />
        </>
      )}
      <ConfigDropdown onChangeLanguage={onChangeLanguage} />
      <TouchableOpacity onPress={handleLogoutClick}>
        <Text style={[styles.navLink, {color: colors.whiteText}]}>{t('navbar.logout')}</Text>
      </TouchableOpacity>
      <Modal title={t('confirm.logout.title')} visible={logoutModal} onClose={cancelLogout} size="xxs" position="top">
        <Text style={{ marginBottom: 20, alignSelf: 'center', color: colors.text }}> {t('confirm.logout.message')} </Text>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Button title={t('button.cancel')} size="xxs" color={colors.whiteText} style={[styles.cancelButton, {backgroundColor: colors.darksteel}]}
            onPress={() => setLogoutModal(false)} 
          />
          <Button title={t('button.logout')} size="xxs" color={colors.whiteText} style={[styles.confirmButton, {backgroundColor: colors.darksteel}]}
            onPress={confirmLogout} 
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({

  navLinks: {
    flexDirection: 'row',
    gap: 15,
    flex: 1,
    justifyContent: 'flex-end',
  },
  
  navLink: { fontSize: 17, marginVertical: 5 },
  
  cancelButton: { marginBottom: 20 },

  confirmButton: {},
});

export default DesktopMenu;

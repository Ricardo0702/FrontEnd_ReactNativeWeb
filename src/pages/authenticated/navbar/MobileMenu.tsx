import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../../components/Colors';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './LanguageDropdown';
import { hasAuthority, Authority} from '../../../hooks/UseAuthority';
import AdminDropdown from './AdminDropdown';
import { useNavigate } from 'react-router-dom';
import PagesDropdown from './PgesDropdown';
import { UserContext } from '../../../context/UserContext';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import colors from '../../../components/Colors';

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
    <View style={styles.dropdown}>
      <PagesDropdown dropdownStyle={{backgroundColor: Colors.darksteel, padding: 5}} closeMenu={closeMenu} />
      {hasAuthority(authorities, Authority.ROLE_ADMIN) && (
        <><AdminDropdown dropdownStyle={{backgroundColor: Colors.darksteel, padding: 5}} closeMenu={closeMenu} /></>
      )}
      <LanguageDropdown onChangeLanguage={onChangeLanguage} closeMenu={closeMenu} 
        dropdownStyle={{backgroundColor: Colors.darksteel, padding: 5}} 
      />
      <TouchableOpacity onPress={handleLogoutClick}>
        <Text style={styles.navLink}>{t('navbar.logout')}</Text>
      </TouchableOpacity>
      <Modal title={t("confirm.logout.title")} visible={logoutModal} onClose={cancelLogout} size="s" position="top" >
        <Text style={{ marginBottom: 20, alignSelf: 'center'}}> {t("confirm.logout.message")} </Text>
        <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 30 }}>
          <Button title={t("button.cancel")} onPress={() => setLogoutModal(false)} size='xxs' color= "white" style={styles.cancelButton}  />
          <Button title={t("button.logout")} onPress={confirmLogout} size='xxs' color= "white" style = {styles.confirmButton} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 5,
    backgroundColor: Colors.lightsteel,
    padding: 5,
    borderRadius: 8,
  },
  navLink: {
    color: 'white',
    fontSize: 17,
    marginVertical: 5,
  },
  cancelButton:{
    backgroundColor: colors.lightsteel,
    color: "white",
    marginBottom: 20
  },
  confirmButton: {
    backgroundColor: colors.lightsteel,
    color: "white"
  }
});

export default MobileMenu;

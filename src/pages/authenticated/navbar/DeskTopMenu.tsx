import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";
import { Authority, hasAuthority } from "../../../hooks/UseAuthority";
import AdminDropdown from "./AdminDropdown";
import PagesDropdown from "./PgesDropdown";
import { UserContext } from "../../../context/UserContext";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import colors from "../../../components/Colors";

interface DesktopMenuProps {
  onLogout: () => void;
  onChangeLanguage: (lng: string) => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({onLogout, onChangeLanguage,}) => {
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
    <View style={styles.navLinks}>
      <PagesDropdown/>
      {hasAuthority(authorities, Authority.ROLE_ADMIN) && (<><AdminDropdown/></>)}
      <LanguageDropdown onChangeLanguage={onChangeLanguage} />
      <TouchableOpacity onPress={handleLogoutClick}>
        <Text style={styles.navLink}>{t("navbar.logout")}</Text>
      </TouchableOpacity>
      <Modal title={t("confirm.logout.title")} visible={logoutModal} onClose={cancelLogout} size="xs" position="center" >
        <Text style={{ marginBottom: 20 }}> {t("confirm.logout.message")} </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 30 }}>
          <Button title="Cancelar" onPress={() => setLogoutModal(false)} width={100} color= "white" style={styles.cancelButton}  />
          <Button title="Cerrar sesión" onPress={confirmLogout} width={130} color= "white" style = {styles.confirmButton} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  navLinks: {
    flexDirection: "row",
    gap: 15,
  },
  navLink: {
    color: "white",
    fontSize: 17,
    marginVertical: 5,
  },
  cancelButton:{
    backgroundColor: colors.lightsteel,
    color: "white"
  },
  confirmButton: {
    backgroundColor: colors.lightsteel,
    color: "white"
  }
});

export default DesktopMenu;

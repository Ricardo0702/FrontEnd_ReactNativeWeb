import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";
import { Authority, hasAuthority } from "../../../hooks/UseAuthority";
import AdminDropdown from "./AdminDropdown";
import PagesDropdown from "./PgesDropdown";
import { UserContext } from "../../../context/UserContext";

interface DesktopMenuProps {
  onLogout: () => void;
  onChangeLanguage: (lng: string) => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({onLogout, onChangeLanguage,}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { authorities } = useContext(UserContext);

  return (
    <View style={styles.navLinks}>
      <PagesDropdown/>
      {hasAuthority(authorities, Authority.ROLE_ADMIN) && (<><AdminDropdown/></>)}
      <LanguageDropdown onChangeLanguage={onChangeLanguage} />
      <TouchableOpacity onPress={onLogout}>
        <Text style={styles.navLink}>{t("navbar.logout")}</Text>
      </TouchableOpacity>
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
});

export default DesktopMenu;

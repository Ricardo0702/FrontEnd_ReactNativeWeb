import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";
import { Authority, hasAuthority } from "../../../hooks/UseAuthority";

interface DesktopMenuProps {
  onLogout: () => void;
  onChangeLanguage: (lng: string) => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  onLogout,
  onChangeLanguage,
}) => {
  const { t } = useTranslation();
  const navigateTo = (path: string) => {
    window.location.pathname = path;
  };

  return (
    <View style={styles.navLinks}>
      <TouchableOpacity onPress={() => navigateTo("/auth/people")}>
        <Text style={styles.navLink}>{t("navbar.people")}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo("/auth/projects")}>
        <Text style={styles.navLink}>{t("navbar.projects")}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo("/auth/directions")}>
        <Text style={styles.navLink}>{t("navbar.addresses")}</Text>
      </TouchableOpacity>
      {hasAuthority(Authority.ROLE_ADMIN) ?? (
        <View>
          <TouchableOpacity onPress={() => navigateTo("/auth/users")}>
            <Text style={styles.navLink}>{t("navbar.users")}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo("/auth/roles")}>
            <Text style={styles.navLink}>{t("navbar.roles")}</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity onPress={onLogout}>
        <Text style={styles.navLink}>{t("navbar.logout")}</Text>
      </TouchableOpacity>
      <LanguageDropdown onChangeLanguage={onChangeLanguage} />
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

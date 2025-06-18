import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Colors from '../../../components/Colors';
import { useNavigate } from 'react-router-dom';

interface PagesDropdownProps{
    dropdownStyle?: object;
}

const PagesDropdown: React.FC<PagesDropdownProps> = ({dropdownStyle}) => {

  const { t } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <View style={styles.container}> {/* Aquí el contenedor relativo */}
      <TouchableOpacity onPress={() => setLangOpen(!langOpen)}>
        <Text style={styles.navLink}>{t('navbar.pages')}▼</Text>
      </TouchableOpacity>
      {langOpen && (
        <View style={dropdownStyle ?? styles.pagesDropdown}>
            <TouchableOpacity onPress={() => {navigate("/auth/people"); setLangOpen(false)}}>
                <Text style={styles.navLink}>{t("navbar.people")}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigate("/auth/projects"); setLangOpen(false)}}>
                <Text style={styles.navLink}>{t("navbar.projects")}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigate("/auth/directions"); setLangOpen(false)}}>
                <Text style={styles.navLink}>{t("navbar.addresses")}</Text>
            </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navLink: {
    color: 'white',
    fontSize: 17,
    marginVertical: 5,
  },
  pagesDropdown: {
    position: 'absolute',
    top: 30,
    backgroundColor: Colors.darksteel,
    padding: 10,
    borderRadius: 5,
  },
  container: {
    position: 'relative', 
  },
});

export default PagesDropdown;

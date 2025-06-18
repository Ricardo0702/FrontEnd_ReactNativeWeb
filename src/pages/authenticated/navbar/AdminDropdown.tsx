import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Colors from '../../../components/Colors';
import { useNavigate } from 'react-router-dom';

interface AdminDropdownProps{
    dropdownStyle?: object;
}

const AdminDropdown: React.FC<AdminDropdownProps> = ({dropdownStyle}) => {

  const { t } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <View style={styles.container}> {/* Aquí el contenedor relativo */}
      <TouchableOpacity onPress={() => setLangOpen(!langOpen)}>
        <Text style={styles.navLink}>{t('navbar.admin')}▼</Text>
      </TouchableOpacity>
      {langOpen && (
        <View style={dropdownStyle ?? styles.adminDropdown}>
          <TouchableOpacity onPress={() => {navigate("/auth/users"); setLangOpen(false)}}>
            <Text style={styles.navLink}>{t("navbar.users")}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigate("/auth/roles"); setLangOpen(false)}}>
            <Text style={styles.navLink}>{t("navbar.roles")}</Text>
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
  adminDropdown: {
    position: 'absolute',
    top: 30,
    backgroundColor: Colors.darksteel,
    padding: 10,
    borderRadius: 5,
    left: 10
  },
  container: {
    position: 'relative', 
  },
});

export default AdminDropdown;

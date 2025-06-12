import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Colors from '../../../components/Colors';

interface LanguageDropdownProps {
  onChangeLanguage: (lng: string) => void;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ onChangeLanguage }) => {
  const { t } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    onChangeLanguage(lng);
    setLangOpen(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setLangOpen(!langOpen)}>
        <Text style={styles.navLink}>{t('navbar.language')}</Text>
      </TouchableOpacity>
      {langOpen && (
        <View style={styles.languageDropdown}>
          <TouchableOpacity onPress={() => changeLanguage('es')}>
            <Text style={styles.navLink}>{t('language.spanish')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeLanguage('ca')}>
            <Text style={styles.navLink}>{t('language.catalan')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeLanguage('en')}>
            <Text style={styles.navLink}>{t('language.english')}</Text>
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
  languageDropdown: {
    position: 'absolute',
    marginTop: 43,
    backgroundColor: Colors.lightsteel,
    padding: 10,
  },
});

export default LanguageDropdown;

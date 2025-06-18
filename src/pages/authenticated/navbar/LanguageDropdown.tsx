import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import Colors from '../../../components/Colors';

interface LanguageDropdownProps {
  onChangeLanguage: (lng: string) => void;
  dropdownStyle?: object;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ onChangeLanguage, dropdownStyle }) => {
  const { t } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const changeLanguage = (lng: string) => {
    onChangeLanguage(lng);
    setLangOpen(false);
  };
  const flagCa = require('../../../../public/assets/cat.png');
  const flagEs = require('../../../../public/assets/es.png');
  const flagEn = require('../../../../public/assets/en.png');

  return (
    <View style={styles.container}> {/* Aquí el contenedor relativo */}
      <TouchableOpacity onPress={() => setLangOpen(!langOpen)}>
        <Text style={styles.navLink}>{t('navbar.language')}▼</Text>
      </TouchableOpacity>
      {langOpen && (
        <View style={dropdownStyle ?? styles.languageDropdown}>
          <TouchableOpacity style={styles.option} onPress={() => changeLanguage('es')}>
            <Text style={styles.navLink}>{t('language.spanish')}</Text>
            <Image source={flagEs} style={styles.flag} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => changeLanguage('ca')}>
            <Text style={styles.navLink}>{t('language.catalan')}</Text>
            <Image source={flagCa} style={styles.flag} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => changeLanguage('en')}>
            <Text style={styles.navLink}>{t('language.english')}</Text>
            <Image source={flagEn} style={styles.flag} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative', // Importante para que el dropdown se posicione respecto a este contenedor
  },
  navLink: {
    color: 'white',
    fontSize: 17,
    marginVertical: 5,
  },
  languageDropdown: {
    position: 'absolute',
    top: 30,  // Ajusta este valor para que quede justo debajo del botón
    left: 0,  // Alineado a la izquierda
    backgroundColor: Colors.darksteel,
    padding: 10,
    borderRadius: 5,
    zIndex: 100, // Para que esté por encima de otros elementos
  },
  flag: {
    width: 20,
    height: 12,
    marginLeft: 8,
    marginTop: 2
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
});

export default LanguageDropdown;

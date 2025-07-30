import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextStyle } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../../context/ThemeContext'
import Icon from '../../../../components/Icon';
import { faCaretDown, faCaretUp, faLanguage } from '@fortawesome/free-solid-svg-icons';

interface LanguageDropdownProps {
  onChangeLanguage: (lng: string) => void;
  dropdownStyle?: object;
  closeMenu?: () => void;
  colorStyle?: TextStyle;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ onChangeLanguage, dropdownStyle, closeMenu, colorStyle }) => {
  const { t } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const flagCa = require('../../../../../public/assets/cat.png');
  const flagEs = require('../../../../../public/assets/es.png');
  const flagEn = require('../../../../../public/assets/en.png');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { colors } = useTheme();

  const changeLanguage = (lng: string) => {
    onChangeLanguage(lng);
    setLangOpen(false);
  };

  return (
    <View style={styles.container} ref={dropdownRef as any}>
      <TouchableOpacity onPress={() => setLangOpen(!langOpen)} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style = {{marginRight: 6, marginTop: 4}}>
          <Icon icon={faLanguage} size={15} color={colors.midsteel} />
        </View>
        <Text style={[styles.navLink, {color: colors.whiteText, marginRight: 6}]}>{t('navbar.language')}</Text>
        <View style = {{marginTop: 3}}>
         <Icon icon={langOpen ? faCaretUp : faCaretDown} size={15} color={colors.whiteText} />
        </View>
      </TouchableOpacity>
      {langOpen && (
        <View style={dropdownStyle ? [dropdownStyle] : [styles.languageDropdown, { backgroundColor: colors.darksteel }]}>

          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              changeLanguage('es');
              setLangOpen(false);
              closeMenu?.();
            }}
          >
            <Text style={[styles.navLink, {color: colors.whiteText}, colorStyle]}>{t('language.spanish')}</Text>
            <Image source={flagEs} style={styles.flag} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              changeLanguage('ca');
              setLangOpen(false);
              closeMenu?.();
            }}
          >
            <Text style={[styles.navLink, {color: colors.whiteText}, colorStyle]}>{t('language.catalan')}</Text>
            <Image source={flagCa} style={styles.flag} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              changeLanguage('en');
              setLangOpen(false);
              closeMenu?.();
            }}
          >
            <Text style={[styles.navLink, {color: colors.whiteText}, colorStyle]}>{t('language.english')}</Text>
            <Image source={flagEn} style={styles.flag} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({

  container: { position: 'relative', width: 120 },

  navLink: { fontSize: 17, marginVertical: 5 },

  languageDropdown: {
    top: 30,
    left: 0,
    padding: 10,
    borderRadius: 5,
    zIndex: 100,
    alignItems: 'flex-end',
  },

  flag: {
    width: 20,
    height: 12,
    marginLeft: 8,
    marginTop: 2,
  },

  option: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
});

export default LanguageDropdown;

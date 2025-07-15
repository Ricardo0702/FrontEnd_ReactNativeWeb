import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextStyle } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../../context/ThemeContext'
import Icon from '../../../../components/Icon';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isMobile = window.innerWidth <= 700;
      if (!isMobile) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setLangOpen(false);
        }
      }
    };
    if (langOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langOpen]);

  return (
    <View style={styles.container} ref={dropdownRef as any}>
      <TouchableOpacity onPress={() => setLangOpen(!langOpen)} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={[styles.navLink, {color: colors.whiteText}]}>{t('navbar.language')}</Text>
        <Icon icon={langOpen ? faCaretUp : faCaretDown} size={15} color={colors.whiteText} />
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

  container: { position: 'relative' },

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

  option: { flexDirection: 'row', alignItems: 'center' },
});

export default LanguageDropdown;

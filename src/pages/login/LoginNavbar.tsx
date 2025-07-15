import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import Icon from '../../components/Icon';
import ConfigDropdown from '../authenticated/navbar/dropdowns/ConfigDropdown';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const LoginNavbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { colors } = useTheme();

  const flagCa = require('../../../public/assets/cat.png');
  const flagEs = require('../../../public/assets/es.png');
  const flagEn = require('../../../public/assets/en.png');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isMobile = window.innerWidth <= 700;
      if (!isMobile && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangOpen(false);
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
    <View style={[styles.navbar, {backgroundColor: colors.darksteel}]}>
      <Text style={[styles.title, {color: colors.whiteText}]}>{t('title.My Dashboard')}</Text>
      <ConfigDropdown onChangeLanguage={changeLanguage}/>
    </View>
  );
};

const styles = StyleSheet.create({

  navbar: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    maxWidth: '100%',
  },

  title: { fontSize: 24, fontWeight: 'bold'},

  flag: {
    width: 20,
    height: 12,
    marginLeft: 8,
    marginTop: 2,
  },
});

export default LoginNavbar;

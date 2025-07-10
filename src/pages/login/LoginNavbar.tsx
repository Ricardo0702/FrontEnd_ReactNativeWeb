import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import Colors from '../../components/Colors';
import Icon from '../../components/Icon';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const LoginNavbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    <View style={styles.navbar}>
      <Text style={styles.title}>{t('title.My Dashboard')}</Text>

      <View style={styles.languageSelector} ref={dropdownRef as any}>
        <TouchableOpacity onPress={() => setLangOpen(!langOpen)} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.navLink}>{t('navbar.language')}</Text>
          <Icon icon={langOpen ? faCaretUp : faCaretDown} size={15} color="white" />
        </TouchableOpacity>
        {langOpen && (
          <View style={styles.languageDropdown}>
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
    </View>
  );
};

const styles = StyleSheet.create({

  navbar: {
    backgroundColor: Colors.darksteel,
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

  title: { fontSize: 24, fontWeight: 'bold', color: 'white' },

  navLink: { color: 'white', fontSize: 17, marginVertical: 5 },

  languageSelector: { position: 'relative' },

  languageDropdown: {
    position: 'absolute',
    top: 30,
    left: 0,
    backgroundColor: Colors.darksteel,
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

  option: { flexDirection: 'row', alignItems: 'center', marginVertical: 4 },
});

export default LoginNavbar;

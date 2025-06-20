import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../../components/Colors';
import { useTranslation } from 'react-i18next';

import MobileMenu from './MobileMenu';
import DesktopMenu from './DeskTopMenu';

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);

    const savedLang = localStorage.getItem('appLanguage');
    if (savedLang) i18n.changeLanguage(savedLang);

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('appLanguage', lng);
  };

  return (
    <>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => (window.location.pathname = '/')}>
          <Text style={styles.logo}>{t('title.My Dashboard')}</Text>
        </TouchableOpacity>

        {isMobile ? (
          <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
            <Text style={styles.burger}>☰</Text>
          </TouchableOpacity>
        ) : (
          <DesktopMenu onLogout={onLogout} onChangeLanguage={changeLanguage} />
        )}
      </View>

      {isMobile && menuOpen && (
        <View style={styles.menuContainer}>
          <MobileMenu
            onLogout={onLogout}
            onChangeLanguage={changeLanguage}
            closeMenu={() => setMenuOpen(false)}
          />
        </View>
      )}
    </>
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
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  burger: {
    fontSize: 26,
    color: 'white',
    padding: 5,
  },
  menuContainer: {
    position: 'absolute',
    top: 60, // Altura del navbar
    right: 10,
    backgroundColor: Colors.lightsteel,
    zIndex: 999,
    borderRadius: 6,
    padding: 10,
  },
});

export default Navbar;

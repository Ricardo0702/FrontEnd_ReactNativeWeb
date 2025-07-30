import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DeskTopMenu';
import { useTheme } from '../../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const menuRef = useRef<HTMLDivElement>(null);
  const { themeName, toggleTheme, colors } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 730);
    const savedLang = localStorage.getItem('appLanguage');
    if (savedLang) i18n.changeLanguage(savedLang);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('appLanguage', lng);
  };

  return (
    <>
      <View style={[styles.navbar, { backgroundColor: colors.darksteel }]}>
        <TouchableOpacity onPress={() => navigate('/auth/dashboard')}>
          <Text style={[styles.logo, { color: colors.whiteText }]}>{t('title.My Dashboard')}</Text>
        </TouchableOpacity>

        {isMobile  ? (
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'flex-end' }}
            onPress={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
          >
            <Text style={[styles.burger, { color: colors.whiteText }]}>☰</Text>
          </TouchableOpacity>
        ) : (
          <>
            <DesktopMenu onLogout={onLogout} onChangeLanguage={changeLanguage} />
          </>
        )}
      </View>

      {isMobile && menuOpen && (
        <View style={[styles.menuContainer, { backgroundColor: colors.midsteel }]} ref={menuRef as any}>
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

  logo: { fontSize: 24, fontWeight: 'bold' },

  burger: { fontSize: 26, padding: 5 },

  menuContainer: {
    position: 'absolute',
    top: 60,
    right: 10,
    flex: 1,
    alignItems: 'flex-end',
    zIndex: 999,
    borderRadius: 6,
    padding: 10,
  },

  themeButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'transparent',
  },
});

export default Navbar;

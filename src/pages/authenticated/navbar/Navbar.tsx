import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../../components/colors/Colors';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const {t} = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    handleResize(); // inicializa
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => window.location.pathname = '/'}>
        <Text style={styles.logo}>{t('My Dashboard')}</Text>
      </TouchableOpacity>

      {isMobile ? (
        <View style={styles.mobileMenu}>
          <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
            <Text style={styles.burger}>☰</Text>
          </TouchableOpacity>
          {menuOpen && (
            <View style={styles.dropdown}>
              <TouchableOpacity onPress={() => window.location.pathname = '/auth/people'}>
                <Text style={styles.navLink}>{t('Personas')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => window.location.pathname = '/auth/projects'}>
                <Text style={styles.navLink}>{t('Proyectos')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => window.location.pathname = '/auth/directions'}>
                <Text style={styles.navLink}>{t('Direcciones')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onLogout}>
                <Text style={styles.navLink}>t{('Cerrar sesión')}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ) : (
        <View style={styles.navLinks}>
          <TouchableOpacity onPress={() => window.location.pathname = '/auth/people'}>
            <Text style={styles.navLink}>{t('Personas')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => window.location.pathname = '/auth/projects'}>
            <Text style={styles.navLink}>{t('Proyectos')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => window.location.pathname = '/auth/directions'}>
            <Text style={styles.navLink}>{t('Direcciones')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onLogout}>
            <Text style={styles.navLink}>{t('Cerrar sesión')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: Colors.darksteel,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    maxWidth: '100%',
    flexWrap: 'wrap',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  navLinks: {
    flexDirection: 'row',
    gap: 15,
    flexWrap: 'wrap',
  },
  navLink: {
    color: 'white',
    fontSize: 17,
    textDecorationLine: 'none',
    cursor: 'pointer',
    marginTop: 5,
  },
  mobileMenu: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  burger: {
    fontSize: 26,
    color: 'white',
    padding: 5,
  },
  dropdown: {
    marginTop: 10,
    backgroundColor: Colors.darksteel,
    padding: 10,
    borderRadius: 8,
    gap: 10,
  },
});

export default Navbar;

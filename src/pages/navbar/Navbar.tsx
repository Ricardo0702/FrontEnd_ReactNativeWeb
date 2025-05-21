import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../components/colors/Colors';

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => window.location.pathname = '/'}>
      <Text style={styles.logo}>My Dashboard</Text>
      </TouchableOpacity>
      <View style={styles.navLinks}>
        <TouchableOpacity onPress={() => window.location.pathname = '/people'}>
          <Text style={styles.navLink}>Personas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => window.location.pathname = '/projects'}>
          <Text style={styles.navLink}>Proyectos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => window.location.pathname = '/directions'}>
          <Text style={styles.navLink}>Direcciones</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onLogout}>
          <Text style={styles.navLink}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
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
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    maxWidth: '100%',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  navLinks: {
    flexDirection: 'row',
    gap: 15,
  },
  navLink: {
    color: 'white',
    fontSize: 17,
    textDecorationLine: 'none',
    cursor: 'pointer',
  },
});

export default Navbar;

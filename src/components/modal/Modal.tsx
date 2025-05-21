import React from 'react';
import { Modal as RNModal, View, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import useResponsiveXS from '../useResponsives/useResponsiveXS';
import useResponsiveM from '../useResponsives/useResponsiveM';
import useResponsiveXL from '../useResponsives/useResponsiveXL';
import type { Modal as ModalProps } from './ModalInterface';

const Modal: React.FC<ModalProps> = ({
  title,
  visible,
  onClose,
  children,
  size = 'm', // Establecemos 'm' como valor por defecto
  position = 'center',
}) => {

  if (!visible) return null;

  // Estilo adicional para la posición
  const getPositionStyle = (): ViewStyle => {
  if (position === 'top') {
    return {
      justifyContent: 'flex-start' as const, // 👈 Aseguramos que es un valor válido
      marginTop: 50,
    };
  } else if (position === 'bottom') {
    return {
      justifyContent: 'flex-end' as const, // 👈 Aseguramos que es un valor válido
      marginBottom: 50,
    };
  } else {
    return {
      justifyContent: 'center' as const, // 👈 Aseguramos que es un valor válido
      alignItems: 'center',
    };
  }
};

  // Estilo del modal basado en el tamaño seleccionado
  const getSizeStyle = () => {
    switch (size) {
      case 'xs':
        return useResponsiveXS();
      case 'm':
        return useResponsiveM();
      case 'xl':
        return useResponsiveXL();
      default:
        return useResponsiveM(); // Valor por defecto
    }
  };

  return (
    <RNModal transparent visible={visible} animationType="slide">
      <View style={[styles.overlay, getPositionStyle()]}>
        <View style={[styles.modalContainer, getSizeStyle()]}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            {children}
          </View>
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 18,
    color: '#ff5c5c',
  },
  content: {
    padding: 15,
  },
});

export default Modal;

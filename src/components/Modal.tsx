import React from 'react';
import {
  Modal as RNModal,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  ScrollView,
  Dimensions,
} from 'react-native';
import useResponsive from './UseResponsive';

export interface ModalProps {
  title: string;
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: 'xs' | 'm' | 'xl';
  position?: 'center' | 'top' | 'bottom'; // Posición opcional
}


const Modal: React.FC<ModalProps> = ({
  title,
  visible,
  onClose,
  children,
  size = 'm',
  position = 'center',
}) => {
  if (!visible) return null;

  const getPositionStyle = (): ViewStyle => {
    if (position === 'top') {
      return {
        justifyContent: 'flex-start',
        marginTop: 50,
      };
    } else if (position === 'bottom') {
      return {
        justifyContent: 'flex-end',
        marginBottom: 50,
      };
    } else {
      return {
        justifyContent: 'center',
        alignItems: 'center',
      };
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'xs':
        return useResponsive({type: 'Modal', size: 's'});
      case 'm':
        return useResponsive({type: 'Modal', size: 'm'});
      case 'xl':
        return useResponsive({type: 'Modal', size: 'l'});
      default:
        return useResponsive({type: 'Modal', size: 'm'});
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
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.content}>
              {children}
            </View>
          </ScrollView>
        </View>
      </View>
    </RNModal>
  );
};

const { height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    maxHeight: screenHeight * 0.8, // evita que el modal crezca más allá del 80% de la pantalla
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
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    padding: 15,
  },
});

export default Modal;

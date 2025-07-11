import React from 'react';
import { Modal as RNModal, View, StyleSheet, Text, TouchableOpacity, ViewStyle, ScrollView, Dimensions, GestureResponderEvent } from 'react-native';
import useResponsive from './UseResponsive';
import Icon from './Icon';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';

export interface ModalProps {
  title: string;
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: 'xxs' | 'xs' | 's' | 'm' | 'xl';
  position?: 'center' | 'top' | 'bottom';
  style?: ViewStyle;
  animationType?: 'none' | 'slide' | 'fade';
  hideHeader?: boolean;
  overlayOpacity?: number;
  borderRadius?: number;
  headerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
}

const Modal: React.FC<ModalProps> = ({
  title,
  visible,
  onClose,
  children,
  size = 'm',
  position = 'center',
  style,
  animationType = 'slide',
  hideHeader = false,
  overlayOpacity = 0.5,
  borderRadius = 10,
  headerStyle,
  contentStyle,
}) => {
  if (!visible) return null;

  const { colors } = useTheme();

  const getPositionStyle = (): ViewStyle => {
    if (position === 'top') {
      return {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 50,
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
      case 'xxs':
        return useResponsive({ type: 'Modal', size: 'xxs' });
      case 'xs':
        return useResponsive({ type: 'Modal', size: 'xs' });
      case 's':
        return useResponsive({ type: 'Modal', size: 's' });
      case 'm':
        return useResponsive({ type: 'Modal', size: 'm' });
      case 'xl':
        return useResponsive({ type: 'Modal', size: 'l' });
      default:
        return useResponsive({ type: 'Modal', size: 'm' });
    }
  };

  const handleModalContentPress = (event: GestureResponderEvent) => {
    event.stopPropagation();
  };

  return (
    <RNModal transparent visible={visible} animationType={animationType}>
      <View
        style={[styles.overlay, getPositionStyle(), { backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }]}
        onStartShouldSetResponder={() => true}
        onResponderRelease={onClose}
      >
        <View
          style={[styles.modalContainer, {backgroundColor: colors.whiteBackground}, getSizeStyle(), { borderRadius }, style]}
          onStartShouldSetResponder={() => true}
          onResponderRelease={handleModalContentPress}
        >
          {!hideHeader && (
            <View style={[styles.header, {borderColor: colors.ccc}, headerStyle]}>
              <Text style={[styles.title, {color: colors.text}]}>{title}</Text>
              <TouchableOpacity onPress={onClose}>
                <Icon icon={faXmark} size={24} color={colors.darksteel} />
              </TouchableOpacity>
            </View>
          )}
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={[styles.content, contentStyle]}>{children}</View>
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
  },
  modalContainer: {
    overflow: 'hidden',
    maxHeight: screenHeight * 0.8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    padding: 15,
  },
});

export default Modal;

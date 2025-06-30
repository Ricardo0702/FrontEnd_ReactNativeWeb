import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, type DimensionValue } from 'react-native';
import colors from './Colors'
import useResponsive from './UseResponsive';
import { useTranslation, Trans } from 'react-i18next';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  width?: number | string;
  height?: number;
  type?: 'delete' | 'save' | 'link' | 'add' | 'associate';  
  size?: 'xxs' | 'xs' | 'm' | 'xl';
  disabled?: boolean;
  fontSize?: number;
  style?: any;
  minWidth?: number | string;
  color?: string
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  minWidth,
  width,
  height,
  type,
  disabled = false,
  fontSize,
  style,
  size,
  color
}) => {
  const minWidthValue = minWidth as DimensionValue;
  const widthValue = width as DimensionValue;
  const heightValue = height as DimensionValue;
  const fontSizeValue = fontSize;
  const fontColor = color;
  const {t} = useTranslation();

  const getType = () => {
    switch (type) {
      case 'delete':
        return {
          buttonStyle: { backgroundColor: colors.lightRed},
          textStyle: { color: 'black' }
        };
      case 'save':
        return {
          buttonStyle: { backgroundColor: '#e6f4ea' },
          textStyle: { color: '#27ae60' },
        };
      case 'link':
        return {
          buttonStyle: { backgroundColor: 'transparent', borderWidth: 0 },
          textStyle: { color: '#2980b9', textDecorationLine: "underline" as "underline" },
        };
      case 'add':
        return {
          buttonStyle: { backgroundColor: colors.lightBlue },
          textStyle: { color: 'black'},
        };
      case 'associate':
        return{
          buttonStyle: { backgroundColor: 'transparent'},
          textStyle: { color: 'black'}
        }
      default:
        return {
          buttonStyle: {},
          textStyle: {color: fontColor},
        };
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'xxs':
        return useResponsive({type: 'Button', size: 'xs'});
      case 'xs':
        return useResponsive({type: 'Button', size: 's'});
      case 'm':
        return useResponsive({type: 'Button', size: 'm'});
      case 'xl':
        return useResponsive({type: 'Button', size: 'l'});
      default:
        return;
    }
  };

  const { buttonStyle, textStyle } = getType();

  return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.button, getSizeStyle(),
          { width: widthValue, height: heightValue, minWidth: minWidthValue },
          buttonStyle,
          disabled && { backgroundColor: '#f5f5f5' }, style
        ]}
        activeOpacity={0.7}
      >
        <Text style={[styles.text, { fontSize: fontSizeValue}, textStyle, ]}>{title}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  text: {
    fontSize: 16,
  },
});

export default Button;

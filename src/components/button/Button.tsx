import React from 'react';
import { Text, TouchableOpacity, StyleSheet, type DimensionValue } from 'react-native';
import type { ButtonProps } from './ButtonInterface';
import colors from '../colors/Colors'

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  width,
  height,
  type,
  disabled = false,
  fontSize
}) => {
  const widthValue = width as DimensionValue;
  const heightValue = height as DimensionValue;
  const fontSizeValue = fontSize;

  const getType = () => {
    switch (type) {
      case 'delete':
        return {
          buttonStyle: { backgroundColor: "transparent"},
          textStyle: { color: colors.red , textDecorationLine: "underline" as "underline"}
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
          textStyle: {},
        };
    }
  };

  const { buttonStyle, textStyle } = getType();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        { width: widthValue, height: heightValue },
        buttonStyle,
        disabled && { backgroundColor: '#f5f5f5' },
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
    minHeight: 40,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default Button;

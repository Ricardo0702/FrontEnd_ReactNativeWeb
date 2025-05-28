import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, type DimensionValue } from 'react-native';
import type { ButtonProps } from './ButtonInterface';
import colors from '../colors/Colors'
import useResponsive from '../useResponsives/useResponsive';

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
  size
}) => {
  const minWidthValue = minWidth as DimensionValue;
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

  const getSizeStyle = () => {
    switch (size) {
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
    <View style= {style}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.button, getSizeStyle(),
          { width: widthValue, height: heightValue, minWidth: minWidthValue },
          buttonStyle,
          disabled && { backgroundColor: '#f5f5f5' },
        ]}
        activeOpacity={0.7}
      >
        <Text style={[styles.text, { fontSize: fontSizeValue}, textStyle, ]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default Button;

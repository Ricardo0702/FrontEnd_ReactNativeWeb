import React from 'react';
import { Text, StyleSheet, type TextStyle } from 'react-native';

export interface TitleProps {
  type?: 'Main' | 'Subtitle';
  text?: string;
  size?: 'xs' | 'm' | 'xl' | number;
  color?: string;
  align?: 'left' | 'center' | 'right';
  style?: TextStyle;
  bold?: boolean;
  underline?: boolean;
}

const Title: React.FC<TitleProps> = ({ type, text, size = 'm', color, align = 'center', bold = true, underline = false, style }) => {
  const getSize = () => {
    switch (size) {
      case 'xs':
        return 15;
      case 'm':
        return 20;
      case 'xl':
        return 30;
      default:
        return typeof size === 'number' ? size : 20;
    }
  };

  const getPosition = () => {
    switch (align) {
      case 'left':
        return 'left';
      case 'center':
        return 'center';
      case 'right':
        return 'right';
      default:
        return typeof align == 'string' ? align : 'center';
    }
  };

  const getType = (): TextStyle | undefined => {
    switch (type) {
      case 'Main':
        return {
          fontSize: 30,
          textAlign: 'center',
          fontWeight: 'bold',
          textDecorationLine: 'underline',
        };
      case 'Subtitle':
        return { fontSize: 24, textAlign: 'left', fontWeight: 'bold' };
      default:
        return undefined;
    }
  };

  if (type) {
    return <Text style={[getType(), style]}>{text}</Text>;
  }
  return (
    <Text
      style={[
        {
          fontSize: getSize(),
          color,
          textAlign: getPosition(),
          fontWeight: bold ? 'bold' : 'normal',
          textDecorationLine: underline ? 'underline' : 'none',
        },
        style,
      ]}
    >
      {text}
    </Text>
  );
};

export default Title;

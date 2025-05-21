import React from 'react';
import { Text, StyleSheet, type TextStyle } from 'react-native';
import {TitleProps} from './TitleInterface'

const Title: React.FC<TitleProps> = ({
  text,
  size = 'm',
  color,
  align = 'center',
  bold = true,
  underline = false,
  style,
}) => {
  const getSize = () => {
    switch (size) {
      case 'xs': return 15;
      case 'm': return 20;
      case 'xl': return 30;
      default: return typeof size === 'number' ? size : 20;
    }
  };

  return (
    <Text
      style={[
        {
          fontSize: getSize(),
          color,
          textAlign: align,
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

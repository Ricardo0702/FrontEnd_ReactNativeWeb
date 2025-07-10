import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ViewStyle } from 'react-native';

export interface IconProps {
  icon: IconDefinition;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

const Icon: React.FC<IconProps> = ({ icon, size = 24, color = '#000', style }) => {
  return <FontAwesomeIcon icon={icon} size={size} color={color} style={style} />;
};

export default Icon;

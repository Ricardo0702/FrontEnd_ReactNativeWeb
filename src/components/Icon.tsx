import React, { useState } from 'react';
import { Platform, View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

let FontAwesomeIconWeb: React.FC<any> | null = null;
let FontAwesomeIconNative: React.FC<any> | null = null;

if (Platform.OS === 'web') {
  // Import dinámico solo en web para evitar bundling en móvil
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  FontAwesomeIconWeb = require('@fortawesome/react-fontawesome').FontAwesomeIcon;
} else {
  // Import para móvil
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  FontAwesomeIconNative = require('@fortawesome/react-native-fontawesome').FontAwesomeIcon;
}

export interface IconProps {
  icon: IconDefinition;
  size?: number;
  color?: string;
  style?: ViewStyle;
  title?: string;
}

const Icon: React.FC<IconProps> = ({ icon, size = 24, color = '#000', style, title }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  if (Platform.OS === 'web' && FontAwesomeIconWeb) {
    return (
      <FontAwesomeIconWeb
        icon={icon}
        style={{ fontSize: size, color, ...(style as object) }}
        title={title}
      />
    );
  }

  if (FontAwesomeIconNative) {
    return (
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => title && setShowTooltip((v) => !v)}
          activeOpacity={0.7}
          style={style}
        >
          <FontAwesomeIconNative icon={icon} size={size} color={color} />
        </TouchableOpacity>

        {showTooltip && title && (
          <View style={styles.tooltip}>
            <Text style={styles.tooltipText}>{title}</Text>
          </View>
        )}
      </View>
    );
  }

  return null; // fallback si no carga nada
};

const styles = StyleSheet.create({
  tooltip: {
    position: 'absolute',
    bottom: '100%',
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    marginBottom: 8,
    zIndex: 999,
  },
  tooltipText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default Icon;

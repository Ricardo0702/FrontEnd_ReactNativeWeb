import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useTheme } from '../../context/ThemeContext';
import Button from '../Button';
import { t } from 'i18next';

export interface HSLColorPickerProps {
  onColorSelect: (color: string) => void;
  onColorPreview: (color: string) => void;
}

const HSLColorPicker = ({ onColorSelect, onColorPreview }: HSLColorPickerProps) => {
  const [hue, setHue] = useState(180);
  const [saturation, setSaturation] = useState(50);
  const [lightness, setLightness] = useState(50);

  const { colors } = useTheme();

  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Color</Text>
      <Slider
        min={0}
        max={360}
        value={hue}
        onChange={(value) => setHue(Array.isArray(value) ? value[0] : value)}
        trackStyle={{ backgroundColor: '#ff0000' }}
        handleStyle={{ borderColor: '#ff0000' }}
      />

      <Text style={styles.label}>Saturation</Text>
      <Slider
        min={0}
        max={100}
        value={saturation}
        onChange={(value) => setSaturation(Array.isArray(value) ? value[0] : value)}
        trackStyle={{ backgroundColor: '#00ff00' }}
        handleStyle={{ borderColor: '#00ff00' }}
      />

      <Text style={styles.label}>Lightness</Text>
      <Slider
        min={0}
        max={100}
        value={lightness}
        onChange={(value) => setLightness(Array.isArray(value) ? value[0] : value)}
        trackStyle={{ backgroundColor: '#0000ff' }}
        handleStyle={{ borderColor: '#0000ff' }}
      />

      <View style={[styles.preview, { backgroundColor: color }]} />

      <View style={styles.buttonRow}>
        <Button
          title={t("button.preview")}
          style={[styles.button, { backgroundColor: colors.darksteel }]}
          color={colors.whiteText}
          onPress={() => onColorPreview(color)}
        />

        <Button
          title={t("button.apply color")}
          style={[styles.button, { backgroundColor: colors.darksteel }]}
          color={colors.whiteText}
          onPress={() => onColorSelect(color)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, width: '100%' },
  label: { marginVertical: 10 },
  preview: {
    width: '100%',
    height: 50,
    marginVertical: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
});

export default HSLColorPicker;

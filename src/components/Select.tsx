import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../context/ThemeContext';

export interface SelectOption {
  label: string;
  value: number | string;
}

export interface SelectProps {
  options: SelectOption[];
  selectedValue: number | string | undefined;
  onValueChange: (value: number | string) => void;
  placeholder?: string;
  style?: any;
}

const Select: React.FC<SelectProps> = ({ options, selectedValue, onValueChange, placeholder, style }) => {
  const {colors} = useTheme();
  
  if (Platform.OS === 'web') {
    return (
      <View style={[style]}>
        <select
          value={selectedValue === null || selectedValue === undefined ? '' : selectedValue}
          onChange={(e) => onValueChange(e.target.value)}
          style={{
            ...styles.webSelect,
            backgroundColor: colors.whiteBackground, color: colors.text
          }}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </View>
    );
  }

  return (
    <Picker selectedValue={selectedValue ?? undefined} onValueChange={onValueChange} style={{ height: 50, width: '100%' }}>
      {placeholder && <Picker.Item label={placeholder} value={undefined} enabled={false} color="#999" style={style} />}
      {options.map((option) => (
        <Picker.Item key={option.value} label={option.label} value={option.value} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  webSelect: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default Select;

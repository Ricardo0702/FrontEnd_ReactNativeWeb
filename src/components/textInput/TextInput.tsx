import React from 'react';
import { View, Text, TextInput as RNTextInput, StyleSheet } from 'react-native';
import type { TextInput as TextInputProps } from './TextInputInterface';

const TextInput: React.FC<TextInputProps> = ({
  label,
  errorMessage,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  value,
}) => {
  const stringValue = value !== undefined && value !== null ? String(value) : '';

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
      <RNTextInput
        style={[styles.input, inputStyle]}
        value={stringValue}
      />
      {errorMessage ? (
        <Text style={[styles.error, errorStyle]}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    color: '#000',
  },
  error: {
    marginTop: 4,
    color: '#cc0000',
    fontSize: 12,
  },
});

export default TextInput;

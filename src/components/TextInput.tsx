import React from 'react';
import { View, Text, TextInput as RNTextInput, StyleSheet, TextInputProps as RNTextInputProps } from 'react-native';

export interface TextInputProps extends Omit<RNTextInputProps, 'value'> {
  value?: string | number | null;
  label?: string;
  errorMessage?: string;
  containerStyle?: object;
  inputStyle?: object;
  labelStyle?: object;
  errorStyle?: object;
  onChangeText?: (text: string) => void;
  secure?: boolean;
  onSubmitEditing?: () => void;
  returnKeyType?: RNTextInputProps['returnKeyType'];
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  errorMessage,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  value,
  onChangeText,
  secure,
  onSubmitEditing,
  returnKeyType,
  placeholder
}) => {
  const stringValue = value !== undefined && value !== null ? String(value) : '';

  return (
    <View style={[containerStyle]}>
      {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
      <RNTextInput
        style={[styles.input, inputStyle]}
        value={stringValue}
        onChangeText={(text) => onChangeText?.(text)}
        secureTextEntry =  {secure}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        placeholder={placeholder}  
        placeholderTextColor="#999"
      />
      {errorMessage ? (
        <Text style={[styles.error, errorStyle]}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
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

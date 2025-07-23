import React from 'react';
import { View, Text, TextInput as RNTextInput, StyleSheet, TextInputProps as RNTextInputProps } from 'react-native';
import { useTheme } from '../context/ThemeContext';

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
  rightIcon?: React.ReactNode;
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
  placeholder,
  rightIcon,
}) => {
  const stringValue = value !== undefined && value !== null ? String(value) : '';
  const { colors } = useTheme();

  return (
    <View style={[containerStyle]}>
      {label ? <Text style={[styles.label, {color: colors.text},labelStyle]}>{label}</Text> : null}
      <View style={styles.inputWrapper}>
        <RNTextInput
          style={[styles.input, {borderColor: colors.darksteel, color: colors.black}, inputStyle, rightIcon ? { paddingRight: 40 } : {}]}
          value={stringValue}
          onChangeText={(text) => onChangeText?.(text)}
          secureTextEntry={secure}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          placeholder={placeholder}
          placeholderTextColor={colors.midsteel}
        />
        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>
      {errorMessage ? <Text style={[styles.error, {color: colors.red}, errorStyle]}>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: '600',
    marginBottom: 4,
  },
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    fontSize: 16,
    height: 45,
  },
  rightIcon: {
    marginTop: -4,
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  error: {
    marginTop: 4,
    fontSize: 12,
  },
});

export default TextInput;

// TextInputInterface.ts
import type { TextInputProps as RNTextInputProps } from 'react-native';

export interface TextInput extends Omit<RNTextInputProps, 'value'> {
  value?: string | number | null;
  label?: string;
  errorMessage?: string;
  containerStyle?: object;
  inputStyle?: object;
  labelStyle?: object;
  errorStyle?: object;
  onChangeText?: (text: string) => void;
  secure?: boolean;
}

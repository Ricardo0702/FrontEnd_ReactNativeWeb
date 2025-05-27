export interface SelectOption {
  label: string;
  value: number | string;
};

export interface SelectProps {
  options: SelectOption[];
  selectedValue: number | string | undefined;
  onValueChange: (value: number | string) => void;
  placeholder?: string;
  style?: any;
};

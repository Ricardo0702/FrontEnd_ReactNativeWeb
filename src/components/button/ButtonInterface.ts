export interface ButtonProps {
  title: string;
  onPress: () => void;
  width?: number | string;    // Puede ser número o porcentaje (e.g. '100%')
  height?: number;
  type?: 'delete' | 'save' | 'link' | 'add' | 'associate';  
  size?: 'xxs' | 'xs' | 'm' | 'xl';
  disabled?: boolean;
  fontSize?: number;
  style?: any;
  minWidth?: number | string;
  color?: string
}

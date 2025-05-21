export interface Modal {
  title: string;
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: 'xs' | 'm' | 'xl';
  position?: 'center' | 'top' | 'bottom'; // Posición opcional
}

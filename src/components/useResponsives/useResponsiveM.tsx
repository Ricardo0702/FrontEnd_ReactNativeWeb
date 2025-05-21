import { useWindowDimensions } from 'react-native';

const useResponsiveM = () => {
  const { width, height } = useWindowDimensions();
  return {
    width: width * 0.7,   // 70% del ancho
    height: height * 0.5, // 50% del alto
  };
};

export default useResponsiveM;

import { useWindowDimensions } from 'react-native';

const useResponsiveXL = () => {
  const { width, height } = useWindowDimensions();
  return {
    width: width * 0.9,   // 90% del ancho
    height: height * 0.8, // 80% del alto
  };
};

export default useResponsiveXL;

import { useWindowDimensions } from 'react-native';

const useResponsiveXS = () => {
  const { width, height } = useWindowDimensions();
  return {
    width: width * 0.5,   // 50% del ancho
    height: height * 0.4, // 40% del alto
  };
};

export default useResponsiveXS;

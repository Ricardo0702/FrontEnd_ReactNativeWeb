import { useWindowDimensions } from 'react-native';

export interface IUseResponsive {
  type: 'Button' | 'Modal';
  size: 'xxs' |'xs' | 's' | 'm' | 'l';
}

const useResponsive = ({ type, size }: IUseResponsive) => {
  const { width, height } = useWindowDimensions();

  if (type === 'Modal'){ 
    if(size === 'xxs') {
      return{
        width: width * 0.3,
        height: height * 0.3
      };
    }

    if (size === 'xs'){
      return{
        width: width * 0.4,
        height: height * 0.4,
      };
    }

    if (size === 's') {
      return {
        width: width * 0.5,
        height: height * 0.5,
      };
    }

    if (size === 'm') {
      return {
        width: width * 0.7,
        height: height * 0.7,
      }
    } 

    if (size === 'l') {
      return {
      width: width * 0.9,
      height: height * 0.9
      }
    }
  };

  const minButtonWidth = 150;
  let responsiveWidth = 0;
  let responsiveHeight = 0;

  if (type === 'Button') {
    switch (size) {
      case 'xxs':
        responsiveWidth = width * 0.02;
        responsiveHeight = height *0.04;
        break;
      case 'xs':
        responsiveWidth = width * 0.03;
        responsiveHeight = height * 0.04;
        break;
      case 's':
        responsiveWidth = width * 0.15;
        responsiveHeight = height * 0.06;
        break;
      case 'm':
        responsiveWidth = width * 0.2;
        responsiveHeight = height * 0.08;
        break;
      case 'l':
        responsiveWidth = width * 0.25;
        responsiveHeight = height * 0.1;
        break;
    }

    if (responsiveWidth < minButtonWidth) {
      responsiveWidth = minButtonWidth;
    }

    return {
      width: responsiveWidth,
      height: responsiveHeight
    };
  }
};

export default useResponsive;

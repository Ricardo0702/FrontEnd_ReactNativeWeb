// src/theme/colors.ts
export interface AppColors {
  name: string;
  background: string;
  text: string;
  link: string;
  red: string;
  lightRed: string;
  green: string;
  lightGreen: string;
  blue: string;
  lightBlue: string;
  yellow: string;
  lightYellow: string;
  darksteel: string;
  lightsteel: string;
  midsteel: string;
  whiteText: string;
  whiteBackground: string;
  ccc: string;
  midgrey: string;
  eee: string;
  evenRow: string;
  oddRow: string;
  black: string;
  highlight: string;
}

export const lightColors: AppColors = {
  name: 'light',
  eee: '#eee',
  midgrey: '#999',
  ccc: '#ccc',
  background: '#f5f5f5',
  whiteBackground: 'white',
  text: '#333333',
  whiteText: 'white',
  link: '#2980b9',
  red: '#c0392b',
  lightRed: '#F5D5D2',
  green: '#27ae60',
  lightGreen: '#e6f4ea',
  blue: '#2980b9',
  lightBlue: '#e6f0fa',
  yellow: '#f1c40f',
  lightYellow: '#fff9e6',
  darksteel: '#1f2937',
  lightsteel: '#E5E8EC',
  midsteel: '#7E858E',
  evenRow: '#f9f9f9',
  oddRow: '#f0f0f0',
  black: 'black',
  highlight: '#FFF59D'
};

export const darkColors: AppColors = {
  name: 'dark',
  eee: '#1e1e1e',
  midgrey: '#777777',
  ccc: '#444444', 
  background: '#1f1f1f', 
  whiteBackground: '#111111', 
  text: '#f0f0f0', 
  link: '#3498db', 
  red: '#ee6151', 
  lightRed: '#552b28', 
  green: '#44d685', 
  lightGreen: '#1a6b3c',
  blue: '#3498db',
  lightBlue: '#284fa9',
  yellow: '#f4ab33', 
  lightYellow: '#967200', 
  darksteel: '#d0d2d6', 
  lightsteel: '#3A3F4A', 
  midsteel: '#98A0AA', 
  whiteText: '#111111',
  evenRow: '#131313', 
  oddRow: '#1b1b1b', 
  black: 'white',
  highlight: '#FFD7404D'
};


// src/theme/colors.ts
export interface AppColors {
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
}

export const lightColors: AppColors = {
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
  lightsteel: '#DDE1E6',
  midsteel: '#7E858E',
  evenRow: '#f9f9f9',
  oddRow: '#f0f0f0',
  black: 'black'
};

export const darkColors: AppColors = {
  eee: '#1e1e1e', // antes: #111111
  midgrey: '#777777', // antes: #666666
  ccc: '#444444', // antes: #333333
  background: '#1f1f1f', // antes: #121212
  whiteBackground: '#111111', // antes: black
  text: '#f0f0f0', // igual
  link: '#3498db', // igual
  red: '#ee6151', // antes: #e74c3c
  lightRed: '#91403a', // antes: #7b2d26
  green: '#44d685', // antes: #2ecc71
  lightGreen: '#1a6b3c', // antes: #14532d
  blue: '#3498db', // igual
  lightBlue: '#284fa9', // antes: #1e3a8a
  yellow: '#f4ab33', // antes: #f39c12
  lightYellow: '#967200', // antes: #7c5e00
  darksteel: '#f0f1f3', // antes: #e5e7eb
  lightsteel: '#475061', // antes: #374151
  midsteel: '#aeb5bd', // antes: #9ca3af
  whiteText: '#111111', // antes: black
  evenRow: '#131313', // antes: #060606
  oddRow: '#1b1b1b', // antes: #0f0f0f
  black: 'white'
};


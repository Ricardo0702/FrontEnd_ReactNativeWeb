import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppColors, lightColors, darkColors } from '../components/colors/Colors';


type ThemeName = 'light' | 'dark' | 'custom';

interface ThemeContextType {
  themeName: ThemeName;
  colors: AppColors;
  toggleTheme: () => void;
  setThemeByName: (themeName: ThemeName) => void;
  setCustomColors: (preset: AppColors) => void;
  setPreviewColors: (preset: AppColors) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  themeName: 'light',
  colors: lightColors,
  toggleTheme: () => {},
  setThemeByName: () => {},
  setCustomColors: () => {},
  setPreviewColors: () => {}
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colors, setColors] = useState<AppColors>(lightColors);
  const themeName: ThemeName = colors.name === 'light' || colors.name === 'dark' ? colors.name : 'custom';

  useEffect(() => {
    const stored = sessionStorage.getItem('colors');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as AppColors;
        setColors(parsed);
      } catch {
        setColors(lightColors);
      }
    }
  }, []);

  const toggleTheme = () => {
    const newColors = themeName === 'light' ? darkColors : lightColors;
    setColors(newColors);
    sessionStorage.setItem('colors', JSON.stringify(newColors));
  };

  const setThemeByName = (newThemeName: ThemeName) => {
    let newColors: AppColors;
    if (newThemeName === 'light') newColors = lightColors;
    else if (newThemeName === 'dark') newColors = darkColors;
    else newColors = colors; 

    setColors(newColors);
    sessionStorage.setItem('colors', JSON.stringify(newColors));
  };

  const setCustomColors = (preset: AppColors) => {
    setColors(preset);
    sessionStorage.setItem('colors', JSON.stringify(preset));
  };

  const setPreviewColors = (preset: AppColors) => {
    setColors(preset);
  };

  return (
    <ThemeContext.Provider value={{ themeName, colors, toggleTheme, setThemeByName, setCustomColors, setPreviewColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextStyle } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../../components/Icon';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

interface ThemesDropdownProps {
  dropdownStyle?: object;
  closeMenu?: () => void;
  colorStyle?: TextStyle;
}

type ThemeMode = 'light' | 'dark';

const ThemesDropdown: React.FC<ThemesDropdownProps> = ({ dropdownStyle, closeMenu, colorStyle }) => {
  const { t } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme, colors } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isMobile = window.innerWidth <= 700;
      if (!isMobile) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setLangOpen(false);
        }
      }
    };
    if (langOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langOpen]);

  const handleSelectTheme = (selectedTheme: ThemeMode) => {
    setTheme(selectedTheme);
    setLangOpen(false);
    closeMenu?.();
  };

  return (
    <View style={styles.container} ref={dropdownRef as any}>
      <TouchableOpacity onPress={() => setLangOpen(!langOpen)} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={[styles.navLink, {color: colors.whiteText}]}>{t('navbar.theme')}</Text>
        <Icon icon={langOpen ? faCaretUp : faCaretDown} size={15} color={colors.whiteText} />
      </TouchableOpacity>
      {langOpen && (
        <View style={dropdownStyle ?? [styles.themesDropdown, {backgroundColor: colors.darksteel}]}>
          <TouchableOpacity onPress= {() => handleSelectTheme('light')}>
            <Text style={[styles.navLink, { color: colors.whiteText }, colorStyle]}>{t('theme.light')}</Text>
          </TouchableOpacity>
          <View style ={{ marginTop: 5}}>
            <TouchableOpacity onPress= {() => handleSelectTheme('dark')}>
              <Text style={[styles.navLink, { color: colors.whiteText }, colorStyle]}>{t('theme.dark')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({

  navLink: { fontSize: 17, marginVertical: 5 },
  
  themesDropdown: {
    top: 30,
    padding: 10,
    borderRadius: 5,
  },
  
  container: { position: 'relative' },
});

export default ThemesDropdown;

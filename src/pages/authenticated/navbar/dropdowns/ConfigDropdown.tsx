import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../../context/ThemeContext';
import Icon from '../../../../components/Icon';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import ThemesDropdown from './ThemeDropdown';
import LanguageDropdown from './LanguageDropdown';

interface ConfigDropdownProps {
  onChangeLanguage: (lng: string) => void;
  dropdownStyle?: object;
  closeMenu?: () => void;
}

const ConfigDropdown: React.FC<ConfigDropdownProps> = ({ onChangeLanguage, dropdownStyle, closeMenu }) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<any>(null);

  const changeLanguage = (lng: string) => {
    onChangeLanguage(lng);
    setOpen(false);
    closeMenu?.();
  };
  
  useEffect(() => {
    const isMobile = window.innerWidth <= 700;
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMobile && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <View ref={dropdownRef} style={styles.container}>
      <TouchableOpacity onPress={() => setOpen(!open)} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={[styles.navLink, { color: colors.whiteText }]}>{t('navbar.config')}</Text>
        <Icon icon={open ? faCaretUp : faCaretDown} size={15} color={colors.whiteText} />
      </TouchableOpacity>

      {open && (
        <View style={dropdownStyle ? [dropdownStyle] : [styles.dropdown, { backgroundColor: colors.darksteel }]}>
          <ThemesDropdown dropdownStyle={{ backgroundColor: colors.darksteel, padding: 5, alignItems: 'flex-start'}} colorStyle={{color: colors.whiteText}} closeMenu={closeMenu}/>
          <LanguageDropdown onChangeLanguage={changeLanguage} dropdownStyle={{ backgroundColor: colors.darksteel, padding: 5, alignItems: 'flex-start' }} 
            colorStyle={{color: colors.whiteText}} closeMenu={closeMenu}/>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  },
  navLink: {
    fontSize: 17,
    marginVertical: 5,
  },
  dropdown: {
    position: 'absolute',
    top: 30,
    padding: 10,
    borderRadius: 5,
    zIndex: 100,
    alignItems: 'flex-start',
  },
});

export default ConfigDropdown;

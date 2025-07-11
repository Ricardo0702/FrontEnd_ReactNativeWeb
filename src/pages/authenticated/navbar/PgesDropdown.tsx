import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/Icon';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

interface PagesDropdownProps {
  dropdownStyle?: object;
  closeMenu?: () => void;
}

const PagesDropdown: React.FC<PagesDropdownProps> = ({ dropdownStyle, closeMenu }) => {
  const { t } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { colors } = useTheme();

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

  return (
    <View style={styles.container} ref={dropdownRef as any}>
      <TouchableOpacity onPress={() => setLangOpen(!langOpen)} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={[styles.navLink, {color: colors.whiteText}]}>{t('navbar.pages')}</Text>
        <Icon icon={langOpen ? faCaretUp : faCaretDown} size={15} color={colors.whiteText} />
      </TouchableOpacity>
      {langOpen && (
        <View style={dropdownStyle ?? [styles.pagesDropdown, {backgroundColor: colors.darksteel}]}>
          <TouchableOpacity
            onPress={() => {
              navigate('/auth/people');
              setLangOpen(false);
              closeMenu?.();
            }}
          >
            <Text style={[styles.navLink, {color: colors.whiteText}]}>{t('navbar.people')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate('/auth/projects');
              setLangOpen(false);
              closeMenu?.();
            }}
          >
            <Text style={[styles.navLink, {color: colors.whiteText}]}>{t('navbar.projects')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate('/auth/directions');
              setLangOpen(false);
              closeMenu?.();
            }}
          >
            <Text style={[styles.navLink, {color: colors.whiteText}]}>{t('navbar.addresses')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({

  navLink: { fontSize: 17, marginVertical: 5 },
  
  pagesDropdown: {
    position: 'absolute',
    top: 30,
    padding: 10,
    borderRadius: 5,
  },
  
  container: { position: 'relative' },
});

export default PagesDropdown;

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/Icon';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../../context/ThemeContext';

interface AdminDropdownProps {
  dropdownStyle?: object;
  closeMenu?: () => void;
}

const AdminDropdown: React.FC<AdminDropdownProps> = ({ dropdownStyle, closeMenu }) => {
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
        <Text style={[styles.navLink, {color: colors.whiteText}]}>{t('navbar.admin')}</Text>
        <Icon icon={langOpen ? faCaretUp : faCaretDown} size={15} color={colors.whiteText} />
      </TouchableOpacity>
      {langOpen && (
        <View style={dropdownStyle ?? [styles.adminDropdown, {backgroundColor: colors.darksteel}]}>
          <TouchableOpacity
            onPress={() => {
              navigate('/auth/users');
              setLangOpen(false);
              closeMenu?.();
            }}
          >
            <Text style={[styles.navLink, {color: colors.whiteText}]}>{t('navbar.users')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate('/auth/roles');
              setLangOpen(false);
              closeMenu?.();
            }}
          >
            <Text style={[styles.navLink, {color: colors.whiteText}]}>{t('navbar.roles')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({

  navLink: { fontSize: 17, marginVertical: 5 },
  
  adminDropdown: {
    position: 'absolute',
    top: 30,
    padding: 10,
    borderRadius: 5,
    left: 10,
  },
  
  container: { position: 'relative' },
});

export default AdminDropdown;

import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../../context/ThemeContext';
import Icon from '../../../../components/Icon';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import ThemesDropdown from './ThemeDropdown';
import LanguageDropdown from './LanguageDropdown';
import { faGear } from '@fortawesome/free-solid-svg-icons';

interface ConfigDropdownProps {
  onChangeLanguage: (lng: string) => void;
  dropdownStyle?: object;
  closeMenu?: () => void;
}

const ConfigDropdown: React.FC<ConfigDropdownProps> = ({ onChangeLanguage, dropdownStyle, closeMenu }) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const isMobile = window.innerWidth <= 700;
  const [showCustomModal, setShowCustomModal] = useState(false);

  const changeLanguage = (lng: string) => {
    onChangeLanguage(lng);
    setOpen(false);
    closeMenu?.();
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (!isMobile && dropdownRef.current && !dropdownRef.current.contains(target)) {
        const clickedInsideModal = modalRef.current && modalRef.current.contains(target);
        if (!clickedInsideModal && !showCustomModal) {
          setOpen(false);
        }
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open,  showCustomModal]);

  return (
    <View ref={dropdownRef as any} style={styles.container}>
      <TouchableOpacity onPress={() => setOpen(!open)} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style = {{marginRight: 6, marginTop: 3}}>
          <Icon icon={faGear} size={14} color={isMobile? colors.darksteel : colors.midsteel} />
        </View>
        <Text style={[styles.navLink, { color: colors.whiteText, marginRight: 6 }]}>{t('navbar.config')}</Text>
        <View style = {{marginTop: 3}}>
         <Icon icon={open ? faCaretUp : faCaretDown} size={15} color={colors.whiteText} />
        </View>
      </TouchableOpacity>

      {open && (
        <View style={dropdownStyle ? [dropdownStyle] : [styles.dropdown, { backgroundColor: colors.darksteel }]}>
          <ThemesDropdown 
            dropdownStyle={{ backgroundColor: colors.midsteel, padding: 5, alignItems: 'flex-start' }} 
            colorStyle={{ color: colors.whiteText }} closeMenu={closeMenu}  modalRef={modalRef}
            showCustomModal={showCustomModal} setShowCustomModal={setShowCustomModal}
          />
          <LanguageDropdown onChangeLanguage={changeLanguage} dropdownStyle={{ backgroundColor: colors.midsteel, padding: 5}} 
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

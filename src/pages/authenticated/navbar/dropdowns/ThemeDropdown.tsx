import React, { useEffect, useRef, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextStyle, FlatList, useWindowDimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../../context/ThemeContext';
import { UserContext } from '../../../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../../components/Icon';
import { faCaretDown, faCaretUp, faPalette, faSliders, faMoon, faTrashCan, faSun, faDownload, faPaintbrush } from '@fortawesome/free-solid-svg-icons';
import { generateColorsFromBackground } from '../../../../components/colors/GenerateColorsFromBackground';
import Modal from '../../../../components/Modal';
import HSLColorPicker from '../../../../components/colors/HSLColorPicker';
import { associateUser, createBaseColor } from '../../../../services/BaseColorService';
import { fetchUserByUsername } from '../../../../services/UserService';
import { deleteBaseColor } from '../../../../services/BaseColorService';
import Button from '../../../../components/Button';

interface ThemesDropdownProps {
  dropdownStyle?: object;
  closeMenu?: () => void;
  colorStyle?: TextStyle;
  modalRef?: React.RefObject<HTMLDivElement | null>;
  showCustomModal: boolean;
  setShowCustomModal: (value: boolean) => void;
}

type ThemeMode = 'light' | 'dark' | 'custom';

const ThemesDropdown: React.FC<ThemesDropdownProps> = ({ dropdownStyle, closeMenu, colorStyle, modalRef, showCustomModal, setShowCustomModal }) => {
  const { t } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { themeName, setThemeByName, colors, setCustomColors, setPreviewColors } = useTheme();
  const isMobile = window.innerWidth <= 700;
  const { username, id, baseColors, baseColorIds } = useContext(UserContext);
  const [prevColor, setPrevColor] = useState('');
  const [customColor, setCustomColor] = useState('');
  const [colorApplied, setColorApplied] = useState(false);

  {/*Modificar el flatList par que savedColors sea un useState'<'BaseColor'>',}
    de tal forma que se pueda trabajar sobre su id o sobre el color, al seleccionar cada uno */}
  const [savedColors, setSavedColors] = useState<string[]>([]);
  
  const [selectedSavedColor, setSelectedSavedColor] = useState<string | null>(null);
  const { width, height } = useWindowDimensions();

  const handleSelectTheme = (selectedTheme: ThemeMode) => {
    setThemeByName(selectedTheme);
    setLangOpen(false);
    closeMenu?.();
  };

  useEffect(() => {
    const loadUserColors = async () => {
    try {
      setSavedColors(baseColors.flat());
    } catch (error) {
      console.error('Error fetching user base colors:', error);
    }
  };
    loadUserColors();
  }, [showCustomModal, username]);

  const handleDeleteAllColors = async() => {
    try {
      const colorIds = baseColorIds.flat();
      if (colorIds === null) return;
      await Promise.all(colorIds.map(id => deleteBaseColor(id)));
      setSavedColors([]);
    } catch (error) {
      console.error('Error deleting base colors: ', error);
    }
  }

  useEffect(() => {
    if (showCustomModal) {
      setPrevColor((prev) => prev || colors.background);
      setColorApplied(false);
    } else {
      setPrevColor('');
    }
  }, [showCustomModal]);

  const LIGHT_COLORS = [
    '#F0E6F6', '#E6F0F0', '#F6F0E6', '#F0F6E6', '#F6E6E6',
    '#F0E6E6', '#C2B29B', '#FFB399', '#FFD1B3', '#99D9D9',
    '#FFBF66', '#D7C1E1', '#E8F1E1', '#FFF5E6', '#FFE6E6',
    '#DCE6F0', '#EAE1D6', '#F9F4E7', '#F4E1E1', '#E1F4F4',
  ];

  const DARK_COLORS = [
    '#6B5B7B', '#5A7D7C', '#7B6B5B', '#5B7B5A', '#7B5A5A',
    '#6B4A4A', '#5A4A4A', '#4A3A3A', '#3A2A2A', '#2F2441',
    '#253736', '#3E2F2F', '#2F2B2B', '#2d288bff', '#A39BA8',
    '#FF6F91', '#7E6990', '#506E6B', '#865D4F', '#4A5551',
  ];

  const handleClose = () => {
    setShowCustomModal(false);
    console.log('onClose');
    if (!colorApplied && prevColor) {
      const prevColors = generateColorsFromBackground(prevColor);
      setPreviewColors(prevColors);
    }
    setColorApplied(false);
  };

  const handleColorSelection = async (color: string) => {
    try {
      const newColor = await createBaseColor(color); 
      const user = await fetchUserByUsername(username); // desde contexto
      await associateUser(newColor.id, user.id);
      setSavedColors( prev => prev.includes(color) ? prev : [...prev, color] );
      const newColors = generateColorsFromBackground(color);
      setThemeByName('custom');
      setCustomColors(newColors);
      setColorApplied(true);
      setSavedColors
    } catch (error) {
      console.error('Error al aplicar el color personalizado:', error);
    }
  };


  return (
    <View style={styles.container} ref={dropdownRef as any}>
      <TouchableOpacity onPress={() => setLangOpen(!langOpen)} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginRight: 6, marginTop: 3 }}>
          <Icon icon={faPalette} size={14} color={colors.midsteel} />
        </View>
        <Text style={[styles.navLink, { color: colors.whiteText }]}>{t('navbar.theme')}</Text>
        <Icon icon={langOpen ? faCaretUp : faCaretDown} size={15} color={colors.whiteText} />
      </TouchableOpacity>
      
      {langOpen && (
        <View style={dropdownStyle ?? [styles.themesDropdown, { backgroundColor: colors.darksteel }]}>
          <TouchableOpacity onPress={() => handleSelectTheme('light')}>
            <Text style={[styles.navLink, { color: colors.whiteText }, colorStyle]}>{t('theme.light')}</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 5 }}>
            <TouchableOpacity onPress={() => handleSelectTheme('dark')}>
              <Text style={[styles.navLink, { color: colors.whiteText }, colorStyle]}>{t('theme.dark')}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 5 }}>
            <TouchableOpacity onPress={() => setShowCustomModal(true)} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={[styles.navLink, { color: colors.whiteText }, colorStyle]}>
                {t('theme.custom')}
              </Text>
              <View style={{ marginLeft: 6, marginTop: 3 }}>
                <Icon icon={faSliders} size={14} color={colors.darksteel} />
              </View>
            </TouchableOpacity>
          </View>
          <Modal
            ref={modalRef}
            title={t('text.select.background colors')}
            visible={showCustomModal}
            onClose={handleClose}
            size="m"
            position="center"
          >
            {savedColors.length > 0 && (
              <View style={{ marginBottom: 20 }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                    <Text style={[styles.modalSectionTitle, { color: colors.text }]}>
                      {t('text.saved colors')}
                    </Text>
                    <View style={{ marginLeft: 6, marginBottom: 6}}>
                      <Icon icon={faDownload} size={17} color={colors.darksteel} />
                    </View>
                  </View>
                  <View style= {{flexDirection: 'row', alignItems: 'center'}}>

                    {/*Modificar el flatList par que sabedColors sea un useState'<'BaseColor'>',}
                     de tal forma que se pueda trabajar sobre su id o sobre el color, al seleccionar cada uno */}
                    <FlatList
                      horizontal
                      data={savedColors}
                      keyExtractor={(item) => item}
                      renderItem={({ item }) => (
                        <View style={{ alignItems: 'center', marginHorizontal: 5 }}>
                          <TouchableOpacity
                            style={[
                              styles.colorCircle,
                              {
                                backgroundColor: item,
                                borderColor: selectedSavedColor === item ? colors.background : colors.ccc,
                                borderWidth: selectedSavedColor === item ? 3 : 2,
                              },
                            ]}
                            onPress={() => {handleColorSelection(item) }}
                            activeOpacity={0.7}
                          />
                        </View>
                      )}
                      contentContainerStyle={{ paddingHorizontal: 10 }}
                      showsHorizontalScrollIndicator={false}
                    />

                    <View style = {{flexDirection: 'row', borderRadius: 10, justifyContent: 'center', marginTop: 5, alignItems: 'center', backgroundColor: colors.lightRed}}>
                      <Button title={t('button.reset')} type="associate" onPress={() => handleDeleteAllColors()} />
                      <View style = {{marginLeft: 2, marginTop: 2}}>
                        <Icon icon={faTrashCan} size={14} color={colors.darksteel} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
            <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: 20, marginTop: 10 }}>
              <View style ={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={[styles.modalSectionTitle, { color: colors.text }]}>{t('text.light colors')}</Text>
                <View style={{ marginLeft: 6, marginBottom: 5}}>
                  <Icon icon={faSun} size={17} color={colors.darksteel} />
                </View>
              </View>
            </View>

            <FlatList
              data={LIGHT_COLORS}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.colorCircle, { backgroundColor: item, borderColor: colors.ccc }]}
                  onPress={() => {
                    setCustomColor(item);
                    setColorApplied(true);
                    const newColors = generateColorsFromBackground(item);
                    setThemeByName('custom');
                    setCustomColors(newColors);
                  }}
                  activeOpacity={0.7}
                />
              )}
              keyExtractor={(item) => item}
              numColumns={4}
              columnWrapperStyle={styles.colorRow}
              contentContainerStyle={styles.colorList}
              scrollEnabled={false}
            />
            <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
              <View style ={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={[styles.modalSectionTitle, { color: colors.text}]}>
                  {t('text.dark colors')}
                </Text>
                <View style={{ marginLeft: 6, marginBottom: 5}}>
                  <Icon icon={faMoon} size={17} color={colors.darksteel} />
                </View>
              </View>
            </View>
            <FlatList
              data={DARK_COLORS}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.colorCircle, { backgroundColor: item, borderColor: colors.ccc }]}
                  onPress={() => {
                    setCustomColor(item);
                    setColorApplied(true);
                    const newColors = generateColorsFromBackground(item);
                    setThemeByName('custom');
                    setCustomColors(newColors);
                  }}
                  activeOpacity={0.7}
                />
              )}
              keyExtractor={(item) => item}
              numColumns={4}
              columnWrapperStyle={styles.colorRow}
              contentContainerStyle={styles.colorList}
              scrollEnabled={false}
            />

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Text style={[styles.modalSectionTitle, { color: colors.text }]}>
                  {t('text.custom color')}
                </Text>
                <View style={{ marginLeft: 6, marginBottom: 6}}>
                  <Icon icon={faPaintbrush} size={17} color={colors.darksteel} />
                </View>
              </View>
              <View style={{ width: width * 0.5, flex: 1, alignItems: 'center' }}>
                <HSLColorPicker
                  onColorSelect={(color) => {handleColorSelection(color);}}
                  onColorPreview={(color) => {
                    const newColors = generateColorsFromBackground(color);
                    setPreviewColors(newColors);
                  }}
                />
              </View>
            </View>
          </Modal>
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
  
  // Estilos para el modal de tema personalizado
  modalDescription: {
    marginBottom: 15,
    fontSize: 16,
    textAlign: 'center',
  },
  modalSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'left',
  },
  colorList: {
    justifyContent: 'center',
    paddingBottom: 10,
  },
  colorRow: {
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  colorCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export default ThemesDropdown;
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RecentChange } from '../../../types/IRecentChange';
import { LoadingSpinner } from '../../../components/LoadingSpinner';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../context/ThemeContext';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../../components/Icon';

const RecentChanges: React.FC = () => {
  const [recentChanges, setRecentChanges] = useState<RecentChange[] | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();
  const { colors } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      const storedChanges = localStorage.getItem('recentChanges');
      if (storedChanges) {
        setRecentChanges(JSON.parse(storedChanges));
      } else {
        setRecentChanges([]);
      }
    }, 500);
  }, []);

  if (recentChanges === null) {
    return <LoadingSpinner size={50} color="#3498db" />;
  }

  if (recentChanges.length === 0) {
    return <Text style={[styles.noChanges, { color: colors.text }]}>{t('There are no recent changes')}</Text>;
  }

  const visibleChanges = showAll ? recentChanges : recentChanges.slice(0, 5);

  return (
    <View>
      {visibleChanges.map((change, index) => (
        <View key={index} style={[styles.changeItem, { backgroundColor: colors.lightsteel }]}>
          <Text style={[styles.changeText, { color: colors.text }]}>
            [{new Date(change.timestamp).toLocaleTimeString()}] {t(change.type)} - {change.name}: {t(change.action)}
          </Text>
        </View>
      ))}

      {recentChanges.length > 5 && (
        <View style = {{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => setShowAll(!showAll)} style = {{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[styles.toggleButton, { color: colors.midsteel }]}>
              {showAll ? t('Show less') : t('Show more')}
            </Text>
            <View style={{ marginLeft: 6, marginTop:11}}>
              <Icon icon={showAll ? faCaretUp : faCaretDown} size={17} color={colors.midsteel} />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  noChanges: {
    fontSize: 16,
  },
  changeItem: {
    padding: 10,
    marginVertical: 4,
    borderRadius: 6,
    width: '100%',
  },
  changeText: {
    fontSize: 14,
  },
  toggleButton: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default RecentChanges;

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RecentChange } from '../../../types/IRecentChange';
import { LoadingSpinner } from '../../../components/LoadingSpinner';
import { useTranslation } from 'react-i18next';

const RecentChanges: React.FC = () => {
  const [recentChanges, setRecentChanges] = useState<RecentChange[] | null>(null);
  const { t } = useTranslation();

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
    return <Text style={styles.noChanges}>{t('No hay cambios recientes.')}</Text>;
  }

  return (
    <View>
      {recentChanges.map((change, index) => (
        <View key={index} style={styles.changeItem}>
          <Text style={styles.changeText}>
            [{new Date(change.timestamp).toLocaleTimeString()}] {t(change.type)} - {change.name}: {t(change.action)}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  noChanges: {
    fontSize: 16,
    color: '#777'
  },
  changeItem: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    marginVertical: 4,
    borderRadius: 6,
    width: '100%',
  },
  changeText: {
    fontSize: 14,
  },
});

export default RecentChanges;

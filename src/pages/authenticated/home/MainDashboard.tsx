import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import { RecentChange } from '../../../types/IRecentChange';
import Title from '../../../components/Title';
import { useTranslation } from 'react-i18next';
import RecentChanges from './RecentChanges';
import { useTheme } from '../../../context/ThemeContext';

const MainDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [recentChanges, setRecentChanges] = useState<RecentChange[] | null>(null);
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

  return (
    <ScrollView>
      <View style={styles.container}>
        <Title style={styles.title} text={t('title.select.page')} size="xl" align="center" color={colors.text}/>

        <View style={[styles.button, {backgroundColor: colors.darksteel}] }>
          <Button title={t('button.people')} color={colors.whiteText} size="m" fontSize={20} onPress={() => navigate('/auth/people')} />
        </View>

        <View style={[styles.button, {backgroundColor: colors.darksteel}]}>
          <Button title={t('button.projects')} color={colors.whiteText} size="m" fontSize={20} onPress={() => navigate('/auth/projects')} />
        </View>

        <View style={[styles.button, {backgroundColor: colors.darksteel}] }>
          <Button title={t('button.addresses')} color={colors.whiteText} size="m" fontSize={20} onPress={() => navigate('/auth/directions')} />
        </View>

        <Text style={[styles.subtitle, {color: colors.text}]}>{t('Recent changes:')}</Text>
        <View style={{ marginHorizontal: 30 }}>
          <RecentChanges />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 70,
    paddingBottom: 40,
  },

  title: { marginBottom: 30 },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 15,
  },

  button: { marginBottom: 15, borderRadius: 5 },
});

export default MainDashboard;

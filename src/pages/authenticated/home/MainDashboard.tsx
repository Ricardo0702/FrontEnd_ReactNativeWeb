import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import { RecentChange } from '../../../types/IRecentChange';
import Title from '../../../components/Title';
import { LoadingSpinner } from '../../../components/LoadingSpinner';  
import { useTranslation } from 'react-i18next';
import RecentChanges from './RecentChanges';

const MainDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [recentChanges, setRecentChanges] = useState<RecentChange[] | null>(null); 

  const {t} = useTranslation();

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
    <ScrollView contentContainerStyle={styles.container}>

      <Title style={styles.title} text= {t("title.select.page")} size="xl" align="center" underline />

      <View style={styles.peopleButton}>
        <Button title={t("button.people")} size = 'xl' fontSize={20} onPress={() => navigate('/auth/people')} />
      </View>

      <View style={styles.projectsButton}>
        <Button title={t("button.projects")} size = 'xl' fontSize={20} onPress={() => navigate('/auth/projects')} />
      </View>

      <View style={styles.directionsButton}>
        <Button title={t("button.addresses")} size = 'xl' fontSize={20} onPress={() => navigate('/auth/directions')} />
      </View>

      <Text style={styles.subtitle}>{t('Recent changes:')}</Text>
      <RecentChanges/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 10,
  },
  noChanges: {
    fontSize: 16,
    color: '#777',
  },
  changeItem: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    marginVertical: 4,
    borderRadius: 6,
    width: '80%',
  },
  changeText: {
    fontSize: 14,
  },
  peopleButton: {
    backgroundColor: '#fdecea',
    marginBottom: 10,
    borderRadius: 15,
  },
  projectsButton: {
    backgroundColor: '#e6f4ea',
    marginBottom: 10,
    borderRadius: 15,
  },
  directionsButton: {
    backgroundColor: '#e6f0fa',
    marginBottom: 10,
    borderRadius: 15,
  },
});

export default MainDashboard;

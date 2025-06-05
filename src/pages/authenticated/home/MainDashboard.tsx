import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import { RecentChange } from '../../../types/IRecentChange';
import Title from '../../../components/Title'; 
import { useTranslation } from 'react-i18next';
import RecentChanges from './RecentChanges';
import Colors from '../../../components/Colors';

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

      <View style={styles.leftColumn}>
      <Text style={styles.subtitle}>{t('Recent changes:')}</Text>
      <RecentChanges />
    </View>

      <View style={styles.rightColumn}>
        <Title
          style={styles.title}
          text={t("title.select.page")}
          size="xl"
          align="center"
          underline
        />

        <View style={styles.peopleButton}>
          <Button
            title={t("button.people")}
            color="white"
            size="m"
            fontSize={20}
            onPress={() => navigate('/auth/people')}
          />
        </View>

        <View style={styles.projectsButton}>
          <Button
            title={t("button.projects")}
            color="white"
            size="m"
            fontSize={20}
            onPress={() => navigate('/auth/projects')}
          />
        </View>

        <View style={styles.directionsButton}>
          <Button
            title={t("button.addresses")}
            color="white"
            size="m"
            fontSize={20}
            onPress={() => navigate('/auth/directions')}
          />
        </View>
    </View>
    
  </ScrollView>
)};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 40,
    flexWrap: 'nowrap',  
    alignItems: 'flex-start',
  },
   rightColumn: {
    position: 'absolute',
    top: 60,
    left: '50%',
    transform: [{ translateX: -0.5 * 300 }], // si el ancho es 300
    width: 300,
    alignItems: 'center',
  },

  leftColumn: {
    flex: 1,
    alignItems: 'flex-start', 
    paddingLeft: 20,
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
    marginBottom: 15,
  },
  peopleButton: {
    backgroundColor: Colors.lightsteel,
    marginBottom: 15,
    borderRadius: 5,
  },
  projectsButton: {
    backgroundColor: Colors.lightsteel,
    marginBottom: 15,
    borderRadius: 5,
  },
  directionsButton: {
    backgroundColor: Colors.lightsteel,
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default MainDashboard;

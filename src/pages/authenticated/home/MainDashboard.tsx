import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
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
  const { width: windowWidth } = useWindowDimensions();

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

      {windowWidth >= 465 && (
        <>
          <View style={styles.leftColumn}>
            <Text style={styles.subtitle}>{t('Recent changes:')}</Text>
            <RecentChanges />
          </View>

          {windowWidth >= 650 && (
            <View style={styles.rightColumn}>
              <Title
                style={styles.title}
                text={t("title.select.page")}
                size="xl"
                align="center"
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
          )}

          {windowWidth < 650 && (
            <View style={styles.rightColumnReduced}>

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
          )}
        </>
      )}

    </View>

    <View style={styles.containerReduced}>

      {windowWidth < 465 && (
        <>

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
          
          <Text style={styles.subtitle}>{t('Recent changes:')}</Text>
          <RecentChanges />

        </>
      )}

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

  containerReduced: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 10,
    flexWrap: 'nowrap',  
    alignItems: 'center'
  },
   rightColumn: {
    position: 'absolute',
    top: 60,
    left: '50%',
    transform: [{ translateX: -0.5 * 300 }], // si el ancho es 300
    width: 600,
    alignItems: 'center',
  },
  rightColumnReduced: {
    position: 'absolute',
    paddingTop: 40,
    top: 60,
    left: '50%',
    transform: [{ translateX: -0.5 * 300 }], // si el ancho es 300
    width: 600,
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

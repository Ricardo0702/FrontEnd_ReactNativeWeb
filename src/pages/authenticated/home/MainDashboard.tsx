import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/button/Button';
import { RecentChange } from '../../../types/IRecentChange';
import Title from '../../../components/title/Title';

const MainDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [recentChanges, setRecentChanges] = useState<RecentChange[]>([]);

  useEffect(() => {
    const storedChanges = localStorage.getItem('recentChanges');
    if (storedChanges) {
      setRecentChanges(JSON.parse(storedChanges));
    }
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style = {styles.title}
        text = 'Selecciona una página:'
        size = 'xl'
        align = 'center'
        underline
      />
      <View style={styles.peopleButton}>
        <Button
          title="Personas"
          width={320}
          height={75}
          fontSize={20}
          onPress={() => navigate('/auth/people')}          
        />
      </View>
      <View style={styles.projectsButton}>
        <Button
          title="Proyectos"
          width={320}
          height={75}
          fontSize={20}
          onPress={() => navigate('/auth/projects')}      
        />
      </View>
      <View style={styles.directionsButton}>
        <Button
          title="Direcciones"
          width={320}
          height={75}
          fontSize={20}
          onPress={() => navigate('/auth/directions')}
        />
      </View>

      <Text style={styles.subtitle}>Cambios recientes:</Text>
      {recentChanges.length === 0 ? (
        <Text style={styles.noChanges}>No hay cambios recientes.</Text>
      ) : (
        recentChanges.map((change, index) => (
          <View key={index} style={styles.changeItem}>
            <Text style={styles.changeText}>
              [{new Date(change.timestamp).toLocaleTimeString()}] {change.type} - {change.name}: {change.action}
            </Text>
          </View>
        ))
      )}
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
   paddingBottom: 20
  },
  subtitle: {
    fontSize: 18,
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
    borderRadius: 15
  },
  projectsButton: {
    backgroundColor: '#e6f4ea',
    marginBottom: 10,
    borderRadius: 15
  },
  directionsButton: {
    backgroundColor: '#e6f0fa',
    marginBottom: 10,
    borderRadius: 15
  },
});

export default MainDashboard;

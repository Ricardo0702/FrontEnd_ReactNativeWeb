import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';

const MainDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona una página:</Text>

      <View style={styles.peopleButton}>
        <Button
          title="Personas"
          width={200}
          height={50}
          onPress={() => navigate('/people')}
          type = 'link'
        />
      </View>
      <View style={styles.projectsButton}>
        <Button
          title="Proyectos"
          width={200}
          height={50}
          onPress={() => navigate('/projects')}
          type = 'link'
        />
      </View>
      <View style={styles.directionsButton}>
        <Button
          title="Direcciones"
          width={200}
          height={50}
          onPress={() => navigate('/directions')}
          type = 'link'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: 60
},
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  peopleButton: {
    backgroundColor: '#fdecea'
  },
  projectsButton: {
    backgroundColor: '#e6f4ea'
  },
  directionsButton: {
    backgroundColor: '#e6f0fa' 
  }
});

export default MainDashboard;

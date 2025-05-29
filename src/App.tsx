import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate, useParams } from 'react-router-dom';
import Navbar from './pages/authenticated/navbar/Navbar';
import MainDashboard from './pages/authenticated/home/MainDashboard';
import PeopleDashboard from './pages/authenticated/people/PeopleDashboard';
import ProjectsDashboard from './pages/authenticated/projects/ProjectsDashboard';
import DirectionsDashboard from './pages/authenticated/directions/DirectionsDashboard';
import LoginForm from './pages/login/Login';
import { isLoggedIn, logout } from './services/AuthService';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PersonModification from './pages/authenticated/people/PersonModification';
import './types/I18n';

const PersonModificationWrapper: React.FC = () => {
  const { personId } = useParams<{ personId: string }>();
  if (!personId) return null; // opcional: manejo de error o carga

  return <PersonModification personId={Number(personId)} />;
};
// Componente que usa useNavigate dentro del Router
const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(isLoggedIn());

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    navigate('/'); // redirige a login
  };

  return (
    <View style={styles.container}>
      <Navbar onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated
              ? <Navigate to="/auth/dashboard" />
              : <LoginForm onLoginSuccess={handleLoginSuccess} />
          }
        />
        <Route
          path="/auth/dashboard"
          element={isAuthenticated ? <MainDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/auth/people"
          element={isAuthenticated ? <PeopleDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/auth/projects"
          element={isAuthenticated ? <ProjectsDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/auth/directions"
          element={isAuthenticated ? <DirectionsDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/auth/person/:personId"
          element={isAuthenticated ? <PersonModificationWrapper /> : <Navigate to="/" />}
        />
      </Routes>
    </View>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%', 
    backgroundColor: '#f9f9f9'
  },
});

export default App;

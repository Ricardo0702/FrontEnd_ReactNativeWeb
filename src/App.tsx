import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './pages/navbar/Navbar';
import MainDashboard from './pages/home/MainDashboard';
import PeopleDashboard from './pages/people/PeopleDashboard';
import ProjectsDashboard from './pages/projects/ProjectsDashboard';
import DirectionsDashboard from './pages/directions/DirectionsDashboard';
import LoginForm from './pages/login/Login';
import { isLoggedIn, logout } from './services/AuthService';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

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
              ? <Navigate to="/dashboard" />
              : <LoginForm onLoginSuccess={handleLoginSuccess} />
          }
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <MainDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/people"
          element={isAuthenticated ? <PeopleDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/projects"
          element={isAuthenticated ? <ProjectsDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/directions"
          element={isAuthenticated ? <DirectionsDashboard /> : <Navigate to="/" />}
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

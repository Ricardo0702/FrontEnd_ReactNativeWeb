import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate, useParams } from 'react-router-dom';
import { View, StyleSheet } from 'react-native';

import Navbar from './pages/authenticated/navbar/Navbar';
import MainDashboard from './pages/authenticated/home/MainDashboard';
import PeopleDashboard from './pages/authenticated/people/PeopleDashboard';
import ProjectsDashboard from './pages/authenticated/projects/ProjectsDashboard';
import DirectionsDashboard from './pages/authenticated/directions/DirectionsDashboard';
import LoginForm from './pages/login/Login';
import PersonModification from './pages/authenticated/people/PersonModification';

import './types/I18n';

import { UserContextProvider } from './context/UserContextProvider';
import { UserContext } from './context/UserContext';
import ProtectedRoutes from './components/ProtectedRoutes';

const PersonModificationWrapper: React.FC = () => {
  const { personId } = useParams<{ personId: string }>();
  if (!personId) return null;

  return <PersonModification personId={Number(personId)} />;
};

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  const checkToken = async () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      await userContext.loginByStorage();
    }
    setIsLoading(false);
  };
  checkToken();
}, []);


  const handleLoginSuccess = () => {
    navigate('/auth/dashboard');
  };

  const handleLogout = () => {
    userContext.logout();
    navigate('/');
  };

  if (isLoading) {
    return null; 
  }

  return (
    <View style={styles.container}>
      {userContext.username && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={ userContext.username ? ( <Navigate to="/auth/dashboard" />) : 
          ( <LoginForm onLoginSuccess={handleLoginSuccess} /> )} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/auth/dashboard" element={<MainDashboard />} />
          <Route path="/auth/people" element={<PeopleDashboard />} />
          <Route path="/auth/projects" element={<ProjectsDashboard />} />
          <Route path="/auth/directions" element={<DirectionsDashboard />} />
          <Route path="/auth/person/:personId" element={<PersonModificationWrapper />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth/dashboard" />} />
      </Routes>
    </View>
  );
};

const App: React.FC = () => {
  return (
    <UserContextProvider>
      <Router>
        <AppContent />
      </Router>
    </UserContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
    backgroundColor: '#f9f9f9',
  },
});

export default App;

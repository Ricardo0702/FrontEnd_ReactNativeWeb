import React, { useContext, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate, useParams } from 'react-router-dom';
import { View, StyleSheet } from 'react-native';
import Navbar from './pages/authenticated/navbar/Navbar';
import MainDashboard from './pages/authenticated/home/MainDashboard';
import PeopleDashboard from './pages/authenticated/people/PeopleDashboard';
import ProjectsDashboard from './pages/authenticated/projects/ProjectsDashboard';
import DirectionsDashboard from './pages/authenticated/addresses/AddressesDashboard';
import UsersDashboard from './pages/authenticated/admin/users/UsersDashboard';
import RolesDashboard from './pages/authenticated/admin/roles/RolesDashboard';
import LoginForm from './pages/login/Login';
import LoginNavbar from './pages/login/LoginNavbar';
import './types/I18n';
import { UserContextProvider } from './context/UserContextProvider';
import { UserContext } from './context/UserContext';
import ProtectedRoutes from './components/routes/ProtectedRoutes';
import AdminRoutes from './components/routes/AdminRoutes';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const { colors, resetColors } = useTheme();
  const [refreshKey, setRefreshKey] = useState(0);

  const handleGlobalReset = () => {
    setRefreshKey(prev => prev + 1);
  };

  useEffect(() => {
    const checkToken = async () => {
      const token = sessionStorage.getItem('token');
      if (token) {
        userContext.loginByStorage();
      }
      setIsLoading(false);
    };
    checkToken();
  }, []);

  const handleLoginSuccess = () => {
    navigate('/auth/dashboard');
    userContext.loginByStorage();
  };

  const handleLogout = () => {
    userContext.logout();
    navigate('/');
    window.location.reload();
  };

  if (isLoading) {
    return null;
  }

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {userContext.username && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route
          path="/"
          element={
            userContext.username ? (
              <Navigate to="/auth/dashboard" />
            ) : (
              <>
                <LoginNavbar />
                <LoginForm onLoginSuccess={handleLoginSuccess} />
              </>
            )
          }
        />
        <Route element={<ProtectedRoutes />}>
          <Route element={<AdminRoutes />}>
            <Route path="/auth/users" element={<UsersDashboard />} />
            <Route path="/auth/roles" element={<RolesDashboard />} />
          </Route>
          <Route path="/auth/dashboard" element={<MainDashboard />} />
          <Route path="/auth/people" element={<PeopleDashboard />} />
          <Route path="/auth/projects" element={<ProjectsDashboard />} />
          <Route path="/auth/directions" element={<DirectionsDashboard />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth/dashboard" />} />
      </Routes>
    </View>
  );
};

const App: React.FC = () => {
  return (
    <UserContextProvider>
      <ThemeProvider>
        <Router>
          <AppContent/>
        </Router>
      </ThemeProvider>
    </UserContextProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, minHeight: '100%' },
});

export default App;

import React from 'react';
import { useRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './elements/Header/Header';
import Footer from './elements/Footer/Footer';
import { useAuth } from './hooks/auth.hooks';
import { AuthContext } from './context/AuthContext';

function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider value = {{
      token, login, logout, userId, isAuthenticated
    }}>
      <BrowserRouter>
        <Header />
        {routes}
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

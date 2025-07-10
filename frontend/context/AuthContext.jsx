import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getCurrentUser } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Create a memoized function to load user
  const loadUser = useCallback(async () => {
    setIsLoading(true);
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const userData = await getCurrentUser(token);
        setUser(userData);
      } catch (err) {
        console.error('Authentication check failed:', err);
        localStorage.removeItem('token');
      }
    }
    setIsLoading(false);
  }, []);

  // Initial load on mount
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  // Login function
  const login = async (token, userData) => {
    localStorage.setItem('token', token);
    setUser(userData);
    await loadUser(); // Ensure user state is updated
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isLoading, 
      login, 
      logout,
      loadUser // Expose loadUser for manual refreshes
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
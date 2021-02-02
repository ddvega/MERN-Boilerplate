import React from 'react';
import './App.css';
import './components/Button.css'
import { AuthProvider } from './contexts/AuthContext';
import { Router } from './Router';

export const App = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);

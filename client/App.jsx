import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Router } from './Router';

export const App = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './contexts/AuthContext';

// Add future flags for React Router
const futureFlags = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter future={futureFlags}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

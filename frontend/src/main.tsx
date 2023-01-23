import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';

import App from './App';
import './styles/main.css';
import AppointmentProvider from './context/AppointmentProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <AppointmentProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppointmentProvider>
    </AuthProvider>
  </React.StrictMode>,
);

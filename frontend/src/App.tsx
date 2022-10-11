import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from './hooks/useAuth'

import theme from './styles/theme';
import GlobalStyle from './styles/global'
import Routes from './routes';

import Header from './Components/Header';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { AuthProvider } from './contexts/AuthContext'
import { ConsultationsProvider } from './contexts/ConsultationsContext'

export function App() {
  return (
    <AuthProvider>
      <ConsultationsProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </ConsultationsProvider>
    </AuthProvider>
  )
}

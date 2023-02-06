import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { AuthProvider } from './contexts/AuthContext'

export function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  )
}

import { useContextSelector } from 'use-context-selector'
import logoConexa from '../../assets/logo-conexa.svg'
import { AuthContext } from '../../contexts/AuthContext'
import { Button } from '../Button'
import { HeaderFooterContent } from '../styles'
import { HeaderContainer, LoginNameContainer } from './styles'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()
  const contextAuth = useContextSelector(AuthContext, (context) => {
    return context
  })

  const { handleLogout, isAuthenticated } = contextAuth

  function handleLogoutUser() {
    try {
      handleLogout()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const doctor = JSON.parse(localStorage.getItem('APP_ACCESS_USER') || '{}')

  return (
    <HeaderContainer>
      <HeaderFooterContent variant={isAuthenticated}>
        <img src={logoConexa} alt="logo" />
        {isAuthenticated && (
          <LoginNameContainer>
            <span>Olá, Dr. {doctor.name}</span>
            <Button variant="outline" text="Sair" onClick={handleLogoutUser} />
          </LoginNameContainer>
        )}
      </HeaderFooterContent>
    </HeaderContainer>
  )
}

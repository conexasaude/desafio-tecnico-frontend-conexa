import { useContextSelector } from 'use-context-selector'
import logoConexa from '../../assets/logo-conexa.svg'
import { AuthContext } from '../../contexts/AuthContext'
import { Button } from '../Button'
import { HeaderFooterContent } from '../styles'
import { HeaderContainer } from './styles'
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

  return (
    <HeaderContainer>
      <HeaderFooterContent variant={isAuthenticated}>
        <img src={logoConexa} alt="logo" />
        {isAuthenticated && (
          <Button variant="outline" text="Sair" onClick={handleLogoutUser} />
        )}
      </HeaderFooterContent>
    </HeaderContainer>
  )
}

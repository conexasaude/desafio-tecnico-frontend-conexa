import { useContext } from 'react'
import logoConexa from '../../assets/logo-conexa.svg'
import { AuthContext } from '../../contexts/AuthContext'
import { Button } from '../Button'
import { HeaderFooterContent } from '../styles'
import { HeaderContainer } from './styles'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()
  const { handleLogout } = useContext(AuthContext)

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
      <HeaderFooterContent>
        <img src={logoConexa} alt="logo" />
        <Button variant="outline" text="Sair" onClick={handleLogoutUser} />
      </HeaderFooterContent>
    </HeaderContainer>
  )
}

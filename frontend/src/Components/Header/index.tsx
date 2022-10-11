import React from 'react'
import { useAuth }from "../../hooks/useAuth"

import { Container, HeaderContent, Logo,Button,User } from './styles'

const Header: React.FC = () => {
  const { logout, getLogged } = useAuth()
  const islogged = getLogged()
  
  return (
    <Container>
      <HeaderContent>
        <div>
          <Logo src="/logo.png" />
        </div>
        {(!!islogged && islogged.token) && (
          <div>
            <User>
              Olá, {(!!islogged && islogged.token) && islogged.name}
            </User>
            <span>
              <Button onClick={()=>{logout()}}>SAIR</Button>
            </span>
          </div>
        )}
      </HeaderContent>
    </Container>
  )
}

export default Header;
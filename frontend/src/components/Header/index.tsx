import { HeaderContainer, HeaderContent } from './styles'
import logoConexa from '../../assets/logo-conexa.svg'
import { Button } from '../Button'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoConexa} alt="logo" />
        <Button variant="outline" text="Sair" />
      </HeaderContent>
    </HeaderContainer>
  )
}

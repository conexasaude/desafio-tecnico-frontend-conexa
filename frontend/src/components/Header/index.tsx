import logoConexa from '../../assets/logo-conexa.svg'
import { Button } from '../Button'
import { HeaderFooterContent } from '../styles'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderFooterContent>
        <img src={logoConexa} alt="logo" />
        <Button variant="outline" text="Sair" />
      </HeaderFooterContent>
    </HeaderContainer>
  )
}

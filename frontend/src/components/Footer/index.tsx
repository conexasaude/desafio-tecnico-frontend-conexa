import { Button } from '../Button'
import { HeaderFooterContent } from '../styles'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <HeaderFooterContent>
        <Button variant="outline" text="Ajuda" />
        <Button variant="inline" text="Agendar Consulta" />
      </HeaderFooterContent>
    </FooterContainer>
  )
}

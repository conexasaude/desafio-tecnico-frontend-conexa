import { Button } from '../Button'
import { useContextSelector } from 'use-context-selector'
import { HeaderFooterContent } from '../styles'
import { FooterContainer } from './styles'
import { NewConsultationModal } from '../../pages/Consultations/components/NewConsultationModal'
import { AuthContext } from '../../contexts/AuthContext'
import * as Dialog from '@radix-ui/react-dialog'

export function Footer() {
  const contextAuth = useContextSelector(AuthContext, (context) => {
    return context.isAuthenticated
  })
  return (
    <FooterContainer>
      <HeaderFooterContent variant={contextAuth}>
        <a
          href="https://www.conexasaude.com.br/#contato"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="outline" text="Ajuda" />
        </a>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="inline" text="Agendar Consulta" />
          </Dialog.Trigger>
          <NewConsultationModal />
        </Dialog.Root>
      </HeaderFooterContent>
    </FooterContainer>
  )
}

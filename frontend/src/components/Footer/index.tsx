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
        <Button variant="outline" text="Ajuda" />
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

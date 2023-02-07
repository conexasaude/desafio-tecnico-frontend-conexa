import { Button } from '../Button'
import { HeaderFooterContent } from '../styles'
import { FooterContainer } from './styles'
import { NewConsultationModal } from '../../pages/Consultations/components/NewConsultationModal'
import * as Dialog from '@radix-ui/react-dialog'

export function Footer() {
  return (
    <FooterContainer>
      <HeaderFooterContent>
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

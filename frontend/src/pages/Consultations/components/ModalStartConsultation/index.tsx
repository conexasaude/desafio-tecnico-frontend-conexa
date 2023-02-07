import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButtonStart,
  ContentContainer,
  ContentStart,
  OverlayStart,
} from './styles'
import { X } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { ConsultationsContext } from '../../../../contexts/ConsultationsContext'

export function ModalStartConsultation() {
  const startConsultation = useContextSelector(
    ConsultationsContext,
    (consultation) => {
      return consultation.startConsultation
    },
  )

  return (
    <Dialog.Portal>
      <OverlayStart />

      <ContentStart>
        <Dialog.Title>Paciente em atendimento</Dialog.Title>
        <ContentContainer>
          {startConsultation && (
            <h3>
              {`${startConsultation.patient.first_name} ` +
                `${startConsultation.patient.last_name}`}
            </h3>
          )}
        </ContentContainer>
        <CloseButtonStart>
          <X size={24} />
        </CloseButtonStart>
      </ContentStart>
    </Dialog.Portal>
  )
}

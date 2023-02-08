import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButtonStart,
  ContentContainer,
  ContentStart,
  ImgContainerStart,
  OverlayStart,
} from './styles'
import { X } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import logoConexa from '../../../../assets/logo-conexa.svg'
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
        <ImgContainerStart>
          <img src={logoConexa} alt="logo" />
        </ImgContainerStart>
        <Dialog.Title>Paciente em atendimento</Dialog.Title>
        <ContentContainer>
          {startConsultation && (
            <h2>
              {`${startConsultation.patient.first_name} ` +
                `${startConsultation.patient.last_name}`}
            </h2>
          )}
        </ContentContainer>
        <CloseButtonStart>
          <X size={24} />
        </CloseButtonStart>
      </ContentStart>
    </Dialog.Portal>
  )
}

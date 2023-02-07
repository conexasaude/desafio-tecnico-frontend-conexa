import * as zod from 'zod'
import * as Dialog from '@radix-ui/react-dialog'
import logoConexa from '../../../../assets/logo-conexa.svg'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { X } from 'phosphor-react'
import { NewConsultationInputs } from './NewConsultationInputs'
import { useContextSelector } from 'use-context-selector'
import { ConsultationsContext } from '../../../../contexts/ConsultationsContext'
import {
  ButtonModalSubmit,
  CloseButton,
  Content,
  ImgContainer,
  Overlay,
} from './styles'

const newConsulationSchema = zod.object({
  patientId: zod.string(),
  date: zod.date(),
})

type NewConsultationFormInputs = zod.infer<typeof newConsulationSchema>

export function NewConsultationModal() {
  const newConsultationForm = useForm<NewConsultationFormInputs>({
    resolver: zodResolver(newConsulationSchema),
  })

  const createNewConsultation = useContextSelector(
    ConsultationsContext,
    (context) => {
      return context.createNewConsultation
    },
  )

  const { handleSubmit, reset } = newConsultationForm

  async function handleNewConsultation(data: NewConsultationFormInputs) {
    const patientId = parseInt(data.patientId)
    const date = data.date

    await createNewConsultation({
      patientId,
      date,
    })

    reset()
  }

  return (
    <FormProvider {...newConsultationForm}>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>Agendar Consulta</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>
          <ImgContainer>
            <img src={logoConexa} alt="logo" />
          </ImgContainer>
          <form onSubmit={handleSubmit(handleNewConsultation)}>
            <NewConsultationInputs />
            <ButtonModalSubmit variant="inline" text="Agendar" type="submit" />
          </form>
        </Content>
      </Dialog.Portal>
    </FormProvider>
  )
}

import * as zod from 'zod'
import * as Dialog from '@radix-ui/react-dialog'
import shortid from 'shortid'
import DatePicker, { registerLocale } from 'react-datepicker'
import br from 'date-fns/locale/pt-BR'
import { useContextSelector } from 'use-context-selector'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { X } from 'phosphor-react'
import { ButtonModalSubmit, CloseButton, Content, Overlay } from './styles'
import { ConsultationsContext } from '../../../../contexts/ConsultationsContext'
registerLocale('br', br)

const newConsulationSchema = zod.object({
  patientId: zod.string(),
  date: zod.date(),
})

type NewConsultationFormInputs = zod.infer<typeof newConsulationSchema>

export function NewConsultationModal() {
  const consultations = useContextSelector(ConsultationsContext, (context) => {
    return context.consultations
  })

  const patients = consultations.map((patients) => patients.patient)

  const { control, register, handleSubmit, reset } =
    useForm<NewConsultationFormInputs>({
      resolver: zodResolver(newConsulationSchema),
    })

  async function handleNewConsultation(data: NewConsultationFormInputs) {
    console.log(data)
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Agendar Consulta</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleNewConsultation)}>
          <Controller
            control={control}
            name="patientId"
            render={({ field }) => (
              <select {...field} {...register('patientId')}>
                <option value="">Selecione o paciente</option>
                {patients.map((patient) => (
                  <option key={shortid.generate()} value={patient.id}>
                    {patient.first_name}
                  </option>
                ))}
              </select>
            )}
          />

          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <DatePicker
                locale="br"
                placeholderText="Selecione a data"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />

          <ButtonModalSubmit variant="inline" text="Agendar" type="submit" />
        </form>
      </Content>
    </Dialog.Portal>
  )
}

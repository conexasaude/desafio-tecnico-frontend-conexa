import { memo, useEffect } from 'react'
import shortid from 'shortid'
import DatePicker, { registerLocale } from 'react-datepicker'
import br from 'date-fns/locale/pt-BR'
import { useContextSelector } from 'use-context-selector'
import { useFormContext, Controller } from 'react-hook-form'
import { PatientsContext } from '../../../../contexts/PatientsContext'

registerLocale('br', br)

export function NewConsultationInputsForm() {
  const patientsContext = useContextSelector(PatientsContext, (context) => {
    return context
  })

  const { patients, fetchPatients } = patientsContext

  const { register, control } = useFormContext()

  useEffect(() => {
    fetchPatients()
  }, [fetchPatients])

  return (
    <>
      <Controller
        control={control}
        name="patientId"
        render={({ field }) => (
          <select {...field} {...register('patientId')}>
            <option>Selecione o paciente</option>
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
    </>
  )
}

export const NewConsultationInputs = memo(NewConsultationInputsForm)

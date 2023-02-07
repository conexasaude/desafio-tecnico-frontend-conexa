import { memo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { Button } from '../../../../components/Button'
import { ConsultationsContext } from '../../../../contexts/ConsultationsContext'
import { dateFormatter } from '../../../../utils/formatter'
import { TableConsultationsContainer, TableConsultations } from './styles'

function TableConsultationsListGet() {
  const consultations = useContextSelector(ConsultationsContext, (context) => {
    return context.consultations
  })
  const numbersScheduledAppointments = consultations.length

  function handleClickFilterConsultation(consultationId: number) {
    const filterConsultation = consultations.filter(
      (consultation) => consultation.id === consultationId,
    )
    console.log('em atendimento', filterConsultation[0])
  }

  return (
    <TableConsultationsContainer>
      <span>{`${numbersScheduledAppointments} consultas agendadas`}</span>
      <TableConsultations>
        <tbody>
          {consultations.map((consultation) => (
            <tr key={consultation.id}>
              <td>
                <div>{`${consultation.patient.first_name}  ${consultation.patient.last_name}`}</div>
                <div>{dateFormatter(consultation.date)}</div>
              </td>
              <td>
                <Button
                  variant="inline"
                  text="Atender"
                  onClick={() => handleClickFilterConsultation(consultation.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </TableConsultations>
    </TableConsultationsContainer>
  )
}

export const TableConsultationsList = memo(TableConsultationsListGet)

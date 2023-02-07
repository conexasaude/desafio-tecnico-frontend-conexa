import { useEffect, memo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { Button } from '../../../../components/Button'
import { ConsultationsContext } from '../../../../contexts/ConsultationsContext'
import { dateFormatter } from '../../../../utils/formatter'
import { TableConsultationsContainer, TableConsultations } from './styles'

function TableConsultationsListGet() {
  const consultations = useContextSelector(ConsultationsContext, (context) => {
    return context.consultations
  })

  const fetchConsultations = useContextSelector(
    ConsultationsContext,
    (context) => {
      return context.fetchConsultations
    },
  )

  useEffect(() => {
    fetchConsultations()
  }, [fetchConsultations])
  const numbersScheduledAppointments = consultations.length

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
                <Button variant="inline" text="Atender" />
              </td>
            </tr>
          ))}
        </tbody>
      </TableConsultations>
    </TableConsultationsContainer>
  )
}

export const TableConsultationsList = memo(TableConsultationsListGet)

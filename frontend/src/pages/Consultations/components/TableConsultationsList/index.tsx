import { useContext } from 'react'
import { Button } from '../../../../components/Button'
import { ConsultationsContext } from '../../../../contexts/ConsultationsContext'
import { dateFormatter } from '../../../../utils/formatter'
import { TableConsultationsContainer, TableConsultations } from './styles'

export function TableConsultationsList() {
  const { consultations } = useContext(ConsultationsContext)
  const numbersScheduledAppointments = consultations.length

  return (
    <TableConsultationsContainer>
      <TableConsultations>
        <tbody>
          <span>{`${numbersScheduledAppointments} consultas agendadas`}</span>
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

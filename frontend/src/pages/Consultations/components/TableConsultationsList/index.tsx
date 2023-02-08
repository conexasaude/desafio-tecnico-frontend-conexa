import * as Dialog from '@radix-ui/react-dialog'
import { memo, useEffect } from 'react'
import { useContextSelector } from 'use-context-selector'
import { Button } from '../../../../components/Button'
import { ConsultationsContext } from '../../../../contexts/ConsultationsContext'
import { dateFormatter } from '../../../../utils/formatter'
import { EmptyConsultationsContainer } from '../EmptyConsultationsContainer'
import { ModalStartConsultation } from '../ModalStartConsultation'
import { TableConsultationsContainer, TableConsultations } from './styles'

function TableConsultationsListGet() {
  const consultationsContext = useContextSelector(
    ConsultationsContext,
    (context) => {
      return context
    },
  )

  const { consultations, startNewConsultation, fetchConsultations } =
    consultationsContext

  const numbersScheduledAppointments = consultations.length

  function handleClickFilterStartConsultation(consultationId: number) {
    const filterConsultation = consultations.filter(
      (consultation) => consultation.id === consultationId,
    )
    startNewConsultation(filterConsultation[0])
  }

  useEffect(() => {
    fetchConsultations()
  }, [])

  return (
    <>
      {numbersScheduledAppointments <= 0 ? (
        <EmptyConsultationsContainer />
      ) : (
        <>
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
                      <Dialog.Root>
                        <Dialog.Trigger asChild>
                          <Button
                            variant="inline"
                            text="Atender"
                            onClick={() =>
                              handleClickFilterStartConsultation(
                                consultation.id,
                              )
                            }
                          />
                        </Dialog.Trigger>

                        <ModalStartConsultation />
                      </Dialog.Root>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableConsultations>
          </TableConsultationsContainer>
        </>
      )}
    </>
  )
}

export const TableConsultationsList = memo(TableConsultationsListGet)

import React, { useEffect, useState } from 'react';
import moment from 'moment'
import { useAppointment } from '../../../hooks/useAppointment'
import { useModal } from '../../../hooks/useModal'
import type { IAppointment } from '../../../hooks/useAppointment'

import Error from './Error'

import { Container, Title, List, Patient, Button } from './styles';

const Itens: React.FC = () => {
    const { getAppointments } = useAppointment()
    const { getStatus } = useModal()

    const isOpen = getStatus()
    const appointments = getAppointments()

    const [appointmentList, setAppointmentList] = useState({} as IAppointment[])


    useEffect(() => {
        const getAppointmentList = async () => {
            const appointmentList = await getAppointments()
            setAppointmentList(appointmentList)
        }
        getAppointmentList()
    }, [isOpen])

    if (!appointmentList.length) { return (<Error />) }

    return (
        <Container>
            <Title>{appointmentList?.length} consultas agendadas</Title>
            <List>
                {appointmentList?.map(({ id, date, patient }) => (
                    <li key={id}>
                        <Patient>
                            <p><strong>{patient?.first_name} {patient?.last_name} </strong></p>
                            <p>{moment(date).format('DD/MM/YYYY [às] h:mm ')}</p>
                        </Patient>
                        <Button> Atender</Button>
                    </li>
                ))}
            </List>
        </Container>
    );
}

export default Itens;
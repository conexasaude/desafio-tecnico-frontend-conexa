import type { FormEvent } from 'react';

import React, { useEffect, useState } from 'react';
import { registerLocale } from "react-datepicker";
import moment from 'moment'

import ptBR from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";

import type { IPatient } from '../../hooks/useAppointment'

import { useModal } from '../../hooks/useModal'
import { useAppointment } from '../../hooks/useAppointment'

import { Container, Title, Form, Select, Button, Picker } from './styles';

registerLocale('pt_BR', ptBR)

const Modal: React.FC = () => {
    const { getPatients, sendAppointment } = useAppointment()
    const { getStatus, close } = useModal()
    const isOpen = getStatus()

    const [patientstList, setPatientsList] = useState({} as IPatient[])
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const { patient, date } = document.forms[0];

        sendAppointment(patient.value, new Date(moment(date.value).format()))
        close()
    };


    useEffect(() => {
        const getAppointmentList = async () => {
            const patients = await getPatients()
            setPatientsList(patients)
        }
        getAppointmentList()
    }, [])

    if (!isOpen) {
        return null
    }

    return (
        <Container>
            <Title>Agendar consulta</Title>
            <Form onSubmit={handleSubmit}>
                <Select name='patient'>
                    {patientstList.length && patientstList.map(({ id, last_name, first_name }) => (
                        <option key={id} value={id}>{first_name} {last_name}</option>
                    ))}
                </Select>

                <Picker name='date' locale="pt_BR" selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                <Button className='inverse'>Agendar</Button>
            </Form>
        </Container>
    );
}

export default Modal;
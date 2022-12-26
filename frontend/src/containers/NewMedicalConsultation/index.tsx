import Button from 'components/Button';
import GenericModal from 'components/GenericModal';
import Input from 'components/Input';
import { GenericLayoutContext } from 'containers/GenericLayout';
import { createPatientAndConsultation } from 'infrastructure/conexaApi';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { AppDispatch, RootState } from 'store';
import { ConsultationsState, create, fetch } from 'store/consultations';
import * as S from './index.style';

const NewMedicalConsultation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await dispatch(
      create({
        firstName,
        lastName,
        email,
        date: new Date(`${date}T${time}`).toString(),
      })
    ).unwrap();
    handleClose();
    await dispatch(fetch()).unwrap();
  };

  return (
    <GenericModal show handleClose={handleClose}>
      <S.NewMedicalConsultationWrapper>
        <form onSubmit={handleSubmit}>
          <Input
            labelText="Nome"
            name="firstName"
            placeholder="Digite seu nome"
            value={firstName}
            onChange={(e) => setFirstName((e.target as HTMLInputElement).value)}
            type="text"
            required
          />
          <Input
            labelText="Sobenome"
            name="lastName"
            placeholder="Digite seu sobrenome"
            value={lastName}
            onChange={(e) => setLastName((e.target as HTMLInputElement).value)}
            type="text"
            required
          />
          <Input
            labelText="E-mail"
            name="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
            type="email"
            required
          />
          <Input
            labelText="Data"
            name="date"
            value={date}
            onChange={(e) => {
              debugger;
              setDate((e.target as HTMLInputElement).value);
            }}
            type="date"
            required
          />
          <Input
            labelText="Horário"
            name="time"
            value={time}
            onChange={(e) => {
              debugger;
              setTime((e.target as HTMLInputElement).value);
            }}
            type="time"
            required
          />
          <Button type="submit">Salvar</Button>
        </form>
      </S.NewMedicalConsultationWrapper>
    </GenericModal>
  );
};

export default NewMedicalConsultation;

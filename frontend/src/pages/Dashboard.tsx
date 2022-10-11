import React from 'react';

import { AppointmentProvider } from '../hooks/useAppointment'
import { ModalProvider } from '../hooks/useModal'

import Footer from '../Components/Footer';
import Itens from '../Components/List/Itens'
import Modal from '../Components/Modal'

import { Container, Title, Content } from '../styles/Page/dashboard';

const Dashboard: React.FC = () => {

  return (
    <Container>
      <Title>Consultas</Title>
      <AppointmentProvider>
        <ModalProvider>
          <Modal />
          <Content>
            <Itens />
          </Content>
          <Footer />
        </ModalProvider>
      </AppointmentProvider>
    </Container>
  );
}

export default Dashboard;
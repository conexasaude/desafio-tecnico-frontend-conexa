import React from "react";
import Form from "../Components/Form";
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


import { Container,ImageBox, Title } from "../styles/Page/login"
const Login: React.FC = () => {

  return (
      <Container>
        <ImageBox>
          <Title>Faça Login</Title>
          <img src="/login.png" alt="" />
        </ImageBox>
        <Form />
      </Container>

  )
}

export default Login;
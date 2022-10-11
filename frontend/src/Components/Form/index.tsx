import React, { FormEvent } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { Container, Login, Input, Button } from './styles';

const Form: React.FC = () => {
  const { altenticate } = useAuth()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { email, password } = document.forms[0];

    await altenticate(email.value, password.value);
  };

  return (
    <Container>
      <Login onSubmit={handleSubmit}>
        <Input type="text" id="email" name="email" placeholder="E-mail" />
        <Input type="password" id="password" name="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
      </Login>
    </Container>
  );
}

export default Form;
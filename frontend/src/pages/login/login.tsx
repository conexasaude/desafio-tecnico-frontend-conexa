import React, { useContext } from "react";
import {
  ContainerLogin,
  ContentLeftLogin,
  ContentRigthLogin,
} from "./styled-login";

import imglogin from "../../assets/imglogin.svg";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { AuthContext } from "../../auth/context/authContext";

const Login: React.FC = () => {
  const { handleLogin } = useContext(AuthContext);

  return (
    <ContainerLogin>
      <ContentLeftLogin>
        <h1>Faça Login</h1>
        <img
          src={imglogin}
          alt="Imagem que complementa o titulo; Faça Login, uma planta azul sobre uma cadeixa ao lado de um formulário azul de cadastro de usuário"
        />
      </ContentLeftLogin>
      <ContentRigthLogin>
        <form>
          <Input type="email" label="E-mail" placeholder="Digite seu e-mail" />
          <Input type="password" label="Senha" placeholder="Digite sua senha" />
          <Button onClick={handleLogin}>Entrar </Button>
        </form>
      </ContentRigthLogin>
    </ContainerLogin>
  );
};

export default Login;

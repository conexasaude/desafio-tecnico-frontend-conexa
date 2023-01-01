import React, { useContext, useEffect } from "react";
import {
  ContainerLogin,
  ContentLeftLogin,
  ContentRigthLogin,
} from "./styled-login";

import { FaRegQuestionCircle } from "react-icons/fa";

import imglogin from "../../assets/imglogin.svg";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { AuthContext } from "../../auth/context/authContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { handleLogin, authenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate("/home");
    }
    // eslint-disable-next-line
  }, []);

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
          <Input
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            tooltipContent={<FaRegQuestionCircle />}
            tooltipText={<p>Digite sua senha secreta</p>}
          />
          <Button onClick={handleLogin}>Entrar </Button>
        </form>
      </ContentRigthLogin>
    </ContainerLogin>
  );
};

export default Login;

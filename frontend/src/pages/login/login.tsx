import React, { useContext, useEffect, useState } from "react";
import {
  ContainerLogin,
  ContentLeftLogin,
  ContentRigthLogin,
  SpanError,
} from "./styled-login";

import { useForm, SubmitHandler } from "react-hook-form";

import { FaRegQuestionCircle } from "react-icons/fa";

import imglogin from "../../assets/imglogin.svg";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { AuthContext } from "../../auth/context/authContext";
import { useNavigate } from "react-router-dom";

type userProps = {
  email: "string";
  password: "string";
};

const Login: React.FC = () => {
  const { handleLogin, authenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const [errorLogin, setErrorLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userProps>();

  useEffect(() => {
    if (authenticated) {
      navigate("/home");
    }
    // eslint-disable-next-line
  }, []);

  function showErrorLogin() {
    setErrorLogin(true);

    setTimeout(() => {
      setErrorLogin(false);
    }, 5000);
  }

  const onSubmit: SubmitHandler<userProps> = async (data: userProps) => {
    try {
      await handleLogin(data);
    } catch (e) {
      console.error("entrei", e);

      showErrorLogin();
    }
  };
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            formUser={{
              ...register("email", { required: true }),
            }}
            type="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
          />

          <Input
            formUser={{
              ...register("password", { required: true }),
            }}
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            tooltipContent={<FaRegQuestionCircle />}
            tooltipText={<p>Digite sua senha secreta</p>}
          />
          {errors?.email && (
            <SpanError>*É necessário digitar um email</SpanError>
          )}
          {errors?.password && (
            <SpanError>*É necessário digitar uma senha</SpanError>
          )}

          {errorLogin && (
            <SpanError>
              *Ops, houve um problema! Email ou senha está incorreto, tente
              novamente!
            </SpanError>
          )}
          <Button>Entrar </Button>
        </form>
      </ContentRigthLogin>
    </ContainerLogin>
  );
};

export default Login;

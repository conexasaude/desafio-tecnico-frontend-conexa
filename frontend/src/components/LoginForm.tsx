import { useFormResolver } from "../hooks/useFormResolver";
import { loginSchema } from "../schemas/login";
import Container from "./Container";
import { DefaultInput } from "./DefaultInput";
import { FaRegQuestionCircle } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { createRef, useRef, useState } from "react";
import axios from "axios";
import { loginProps } from "../types/auth";

export function LoginForm() {
  const { register, handleSubmit, errors } = useFormResolver(loginSchema);
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputUseRef = useRef<HTMLInputElement | null>(null);

  async function handleLogin(data: loginProps) {
    console.log(data);
    try {
      const res = axios.post("/login", { data });
      console.log(res);
    } catch (error) {}
  }

  async function toggleShowPassword() {
    setShowPassword(!showPassword);
    passwordInputUseRef.current.type == "password"
      ? (passwordInputUseRef.current.type = "text")
      : (passwordInputUseRef.current.type = "password");
  }

  return (
    <form className="flex flex-col space-y-10 w-full max-w-lg" onSubmit={handleSubmit(handleLogin)}>
      <DefaultInput
        title="E-mail"
        formRegister={register}
        registerName="email"
        placeholder="Digite seu e-mail"
        errors={errors}
      />

      <div className="relative">
        <DefaultInput
          icon={<FaRegQuestionCircle className="text-lg text-gray-500" />}
          title="Senha"
          formRegister={register}
          registerName="password"
          placeholder="Digite sua senha"
          errors={errors}
          reactRef={passwordInputUseRef}
          type="password"
          tooltipText="Senha de no minimo 8 digitos criada ao se registrar"
        />

        <div
          className="absolute right-0 bottom-3 text-2xl text-gray-500 cursor-pointer"
          onClick={() => toggleShowPassword()}
        >
          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </div>
      </div>

      <button className="filled" type="submit">
        Entrar
      </button>
    </form>
  );
}

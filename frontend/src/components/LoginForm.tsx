import { useFormResolver } from "../hooks/useFormResolver";
import { loginSchema } from "../schemas/login";
import { DefaultInput } from "./DefaultInput";
import { FaRegQuestionCircle } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRef, useState } from "react";
import { loginProps } from "../types/auth";
import { api } from "../config/axios";
import { useUser } from "../context/user";
import { notify } from "../utils/notify";
import { ToastContainer } from "react-toastify";
import { useRedirectLogin } from "../hooks/RedirectLogin";

export function LoginForm() {
  const { register, handleSubmit, errors } = useFormResolver(loginSchema);
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputUseRef = useRef<HTMLInputElement | null>(null);
  const { setName } = useUser();

  useRedirectLogin();

  async function handleLogin(formData: loginProps) {
    try {
      const res = await api.post("/login", { ...formData });

      if (res.status == 200) {
        localStorage.setItem("bearer", res.data.token);
        setName(res.data.name);
        return;
      }
    } catch (error) {
      notify("Erro ao fazer login", "error");
    }
  }

  async function toggleShowPassword() {
    setShowPassword(!showPassword);
    passwordInputUseRef.current.type == "password"
      ? (passwordInputUseRef.current.type = "text")
      : (passwordInputUseRef.current.type = "password");
  }

  return (
    <>
      <form
        className="flex flex-col space-y-10 w-full max-w-lg"
        onSubmit={handleSubmit(handleLogin)}
      >
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
      <ToastContainer />
    </>
  );
}

import { useFormResolver } from "../hooks/useFormResolver";
import { loginSchema } from "../schemas/login";
import { DefaultInput } from "./DefaultInput";
import { FaRegQuestionCircle } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRef, useState } from "react";
import { LoginProps } from "../types/auth";
import { useAuth } from "../context/auth";
import { notify } from "../utils/notify";
import { ToastContainer } from "react-toastify";
import { Controller } from "react-hook-form";

export function LoginForm() {
  const { handleSubmit, errors, control } = useFormResolver(loginSchema);

  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();

  async function handleLogin(formData: LoginProps) {
    try {
      await login(formData);
    } catch (error) {
      notify("Erro ao fazer login", "error");
    }
  }

  async function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <form
        className="flex flex-col space-y-10 w-full max-w-lg"
        onSubmit={handleSubmit(handleLogin)}
      >
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value }, fieldState }) => {
            return (
              <div>
                <DefaultInput
                  placeholder="Digite seu e-mail"
                  onChange={onChange}
                  value={value}
                  title="E-mail"
                />
                <span className="text-red-500">
                  {errors.email && errors.email.message.toString()}
                </span>
              </div>
            );
          }}
        />

        <div className="relative">
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div>
                <DefaultInput
                  onChange={onChange}
                  value={value}
                  icon={<FaRegQuestionCircle className="text-lg text-gray-500" />}
                  title="Senha"
                  placeholder="Digite sua senha"
                  type={showPassword ? "text" : "password"}
                  tooltipText="Senha de no minimo 8 digitos criada ao se registrar"
                />
                <span className="text-red-500">
                  {errors.password && errors.password.message.toString()}
                </span>
              </div>
            )}
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

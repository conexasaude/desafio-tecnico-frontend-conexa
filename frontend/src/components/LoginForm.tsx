import { useFormResolver } from "../hooks/useFormResolver";
import { loginSchema } from "../schemas/login";
import Container from "./Container";
import { DefaultInput } from "./DefaultInput";
import { FaRegQuestionCircle } from "react-icons/fa";

export function LoginForm() {
  const { register, handleSubmit, errors } = useFormResolver(loginSchema);

  async function handleLogin() {}

  return (
    <Container className="flex flex-col h-screen w-full items-center justify-center space-y-20">
      <h1 className="text-primaryDark text-7xl font-bold">Faça Login</h1>
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

        <DefaultInput
          icon={<FaRegQuestionCircle className="text-lg" />}
          title="Senha"
          formRegister={register}
          registerName="password"
          placeholder="Digite sua senha"
          errors={errors}
        />

        <button className="filled">Entrar</button>
      </form>
    </Container>
  );
}

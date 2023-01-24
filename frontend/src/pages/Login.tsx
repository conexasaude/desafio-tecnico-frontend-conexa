import Container from "../components/Container";
import Header from "../components/Header";
import { LoginForm } from "../components/LoginForm";

export function Login() {
  return (
    <div className="flex flex-col">
      <Header />
      <Container className="flex flex-col h-[calc(100vh-80px)] w-full max-w-5xl justify-center items-center xl:items-start space-y-10">
        <h1 className="font-bold text-5xl lg:7xl text-primaryDark">Faça Login</h1>

        <div className="flex w-full justify-center">
          <div className="hidden flex-grow justify-center lg:flex">
            <img src="smartphone.svg" />
          </div>

          <div className="flex flex-grow">
            <LoginForm />
          </div>
        </div>
      </Container>
    </div>
  );
}

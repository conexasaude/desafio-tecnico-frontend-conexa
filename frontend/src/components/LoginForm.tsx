import Container from "./Container";

export function LoginForm() {
  return (
    <Container className="flex flex-col h-screen w-full items-center justify-center space-y-20">
      <h1 className="text-primaryDark text-7xl font-bold">Faça Login</h1>
      <form className="flex flex-col space-y-10 w-full max-w-lg">
        <input type="text" />

        <input type="text" />
      </form>
    </Container>
  );
}

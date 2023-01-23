import Header from "../components/Header";
import { LoginForm } from "../components/LoginForm";

export function Login() {
  return (
    <div className="flex flex-col">
      <Header />

      <LoginForm />
    </div>
  );
}

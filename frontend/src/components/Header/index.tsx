import { useAuth } from "../../context/auth";
import Container from "../Container";
import { UserArea } from "./UserArea";
interface HeaderProps {
  styles?: string;
}

function Header({ styles }: HeaderProps) {
  const { name } = useAuth();

  return (
    <header className={`h-20 drop-shadow-lg bg-white top-0 w-full ${styles}`}>
      <Container className="flex items-center h-full p-5 justify-center lg:justify-start mr-auto">
        <img src="/logo.png" alt="logo" className="h-10" />
        {name && <UserArea />}
      </Container>
    </header>
  );
}

export default Header;

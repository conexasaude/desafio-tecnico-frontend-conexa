import Container from "../Container";
import { UserArea } from "./UserArea";
interface HeaderProps {
  session?: boolean;
}

function Header({ session }: HeaderProps) {
  return (
    <header className="h-20 drop-shadow-lg bg-white">
      <Container
        className={`flex items-center h-full p-5 ${
          !session ? "justify-center" : "justify-between"
        }`}
      >
        <img src="/logo.png" alt="logo" className="h-10" />
        {session && <UserArea name="User" />}
      </Container>
    </header>
  );
}

export default Header;

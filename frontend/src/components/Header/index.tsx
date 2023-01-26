import { useAuth } from "../../context/auth";
import Container from "../Container";
import { UserArea } from "./UserArea";
import { motion } from "framer-motion";

export interface HeaderProps {
  styles?: string;
}

function Header({ styles }: HeaderProps) {
  const { name } = useAuth();

  return (
    <header className={`h-20 drop-shadow-lg bg-white top-0 w-full ${styles}`}>
      <Container className="flex items-center h-full p-5 justify-center lg:justify-start mr-auto">
        <motion.span initial={{ x: -100 }} animate={{ x: 0 }}>
          <img src="/logo.png" alt="logo" className="h-10" />
        </motion.span>

        {name && <UserArea />}
      </Container>
    </header>
  );
}

export default Header;

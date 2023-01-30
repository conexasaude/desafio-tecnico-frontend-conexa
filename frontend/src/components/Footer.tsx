import { useModal } from "../context/modal";
import Container from "./Container";

export function Footer() {
  const { toggle } = useModal();

  return (
    <div className="flex items-center h-20 py-5 w-full border-t-2 lg:border-gray-300 bottom-0 bg-secondary fixed">
      <Container className="flex justify-between w-full">
        <button className="default w-20 mr-auto">Ajuda</button>
        <button className="filled w-40" onClick={() => toggle()}>
          Agendar consulta
        </button>
      </Container>
    </div>
  );
}

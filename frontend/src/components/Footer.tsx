import Container from "./Container";

export function Footer() {
  return (
    <div className="flex h-20 py-5 w-full border-t-2 lg:border-gray-300 bottom-0 bg-gray-50">
      <Container className="flex justify-between w-full">
        <button className="default w-20 mr-auto">Ajuda</button>
        <button className="filled w-40">Agendar consulta</button>
      </Container>
    </div>
  );
}

import { api } from "../config/axios";
import { useAppointment } from "../context/appointment";
import { notify } from "../utils/notify";
import Container from "./Container";

export function Footer() {
  const { createAppointment } = useAppointment();

  async function handleNewAppointment() {
    try {
      const res = await createAppointment({
        patientId: 1,
        date: "Fri Feb 05 2021 10:20:00 GMT-0300 (Brasilia Standard Time)",
      });

      if (res.id) {
        return notify("Agendamento Criado!", "success");
      }

      return notify("Erro ao agendar", "warning");
    } catch (error) {
      return notify("Erro ao agendar", "warning");
    }
  }

  return (
    <div className="flex items-center h-20 py-5 w-full border-t-2 lg:border-gray-300 bottom-0 bg-gray-50 fixed">
      <Container className="flex justify-between w-full">
        <button className="default w-20 mr-auto">Ajuda</button>
        <button className="filled w-40" onClick={() => handleNewAppointment()}>
          Agendar consulta
        </button>
      </Container>
    </div>
  );
}

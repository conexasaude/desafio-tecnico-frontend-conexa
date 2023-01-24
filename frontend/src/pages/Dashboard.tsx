import Container from "../components/Container";
import { EmpityAppointments } from "../components/EmpityAppointments";
import Header from "../components/Header";

export function Dashboard() {
  const appointmentsFilled = [
    {
      id: 1,
      patientId: 1,
      date: "Fri Feb 05 2021 10:20:00 GMT-0300 (Brasilia Standard Time)",
      patient: {
        id: 1,
        first_name: "Frodo",
        last_name: "Baggins",
        email: "frodo.baggins@mail.com",
      },
    },
  ];

  const appointmentsEmpity = [];

  return (
    <>
      <Header session />
      <Container className="py-10 felx flex-col h-[calc(100vh-80px)]">
        <p className="text-6xl text-primaryDark font-bold">Consultas</p>
        <div className="flex items-center justify-center h-full">
          <EmpityAppointments />
        </div>
      </Container>
    </>
  );
}

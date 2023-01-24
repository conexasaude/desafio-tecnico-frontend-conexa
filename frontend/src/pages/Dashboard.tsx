import { Appointments } from "../components/Appointments";
import Container from "../components/Container";
import { EmpityAppointments } from "../components/EmpityAppointments";
import Header from "../components/Header";

export function Dashboard() {
  const appointments = [
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
    {
      id: 2,
      patientId: 3,
      date: "Thu Feb 11 2021 09:00:00 GMT-0300 (Brasilia Standard Time)",
      patient: {
        id: 3,
        first_name: "Saruman",
        last_name: "The White",
        email: "saruman.thewhite@mail.com",
      },
    },
    {
      id: 3,
      patientId: 2,
      date: "Thu Feb 11 2021 10:00:00 GMT-0300 (Brasilia Standard Time)",
      patient: {
        id: 2,
        first_name: "Samwise",
        last_name: "Gamgee",
        email: "samwise.gamgee@mail.com",
      },
    },
    {
      id: 4,
      patientId: 3,
      date: "Thu Feb 11 2021 13:00:00 GMT-0300 (Brasilia Standard Time)",
      patient: {
        id: 3,
        first_name: "Saruman",
        last_name: "The White",
        email: "saruman.thewhite@mail.com",
      },
    },
  ];

  return (
    <>
      <Header session />
      <Container className="py-10 felx flex-col h-[calc(100vh-80px)]">
        <p className="text-6xl text-primaryDark font-bold">Consultas</p>
        <div className="flex items-center justify-center h-full">
          <Appointments appointments={appointments} />
        </div>
      </Container>
    </>
  );
}

import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { AppointmentModal } from "../components/AppointmentModal";
import { Appointments } from "../components/Appointments";
import Container from "../components/Container";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { useAppointment } from "../context/appointment";
import { useRedirectLogin } from "../hooks/RedirectLogin";
import { AppointmentProps } from "../types/appointment";
import { notify } from "../utils/notify";

export function Dashboard() {
  const { fetchAppointments } = useAppointment();
  const [appointments, setAppointments] = useState<AppointmentProps[]>();

  useRedirectLogin();

  async function handleFetchAppointments() {
    try {
      const res = await fetchAppointments();

      setAppointments(res);
    } catch (error) {
      return notify("Erro ao acessar agendamentos", "warning");
    }
  }

  useEffect(() => {
    handleFetchAppointments();
  }, []);

  return (
    <>
      <div className="relative">
        <Header styles="fixed" />
        <Container className="flex flex-col h-[calc(100vh-180px)] mt-[80px]">
          <p className="text-6xl text-primaryDark font-bold mt-10">Consultas</p>
          <div className="flex items-center justify-center h-full">
            <Appointments appointments={appointments} />
          </div>
        </Container>
        <Footer />
        <ToastContainer />
      </div>
      <AppointmentModal />
    </>
  );
}

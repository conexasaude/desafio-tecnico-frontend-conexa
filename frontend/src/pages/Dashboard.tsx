import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { AppointmentModal } from "../components/AppointmentModal";
import { Appointments } from "../components/Appointments";
import Container from "../components/Container";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { useAppointment } from "../context/appointment";
import { notify } from "../utils/notify";
import { motion } from "framer-motion";
import { useAuth } from "../context/auth";
import { EmpityAppointments } from "../components/EmpityAppointments";

export function Dashboard() {
  const { fetchAppointments, appointments } = useAppointment();

  const { name } = useAuth();

  async function handleFetchAppointments() {
    try {
      await fetchAppointments();
    } catch (error) {
      return notify("Erro ao acessar agendamentos", "warning");
    }
  }

  useEffect(() => {
    handleFetchAppointments();
  }, [name]);

  return (
    <div className="overflow-y-">
      <div className="relative">
        <Header styles="fixed z-10" />

        <Container className="flex flex-col h-full z-index mt-[4rem]">
          <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <p className="text-6xl text-primaryDark font-bold my-10">Consultas</p>
          </motion.div>

          <div className="flex flex-col items-center justify-center h-full">
            <Appointments appointments={appointments} />
            {!appointments?.length && <EmpityAppointments />}
          </div>
        </Container>

        <Footer />

        <ToastContainer />
      </div>
      <AppointmentModal />
    </div>
  );
}

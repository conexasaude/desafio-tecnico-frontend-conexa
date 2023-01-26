import { useEffect, useState } from "react";
import { api } from "../config/axios";
import Container from "./Container";
import { MdClose } from "react-icons/md";
import { useModal } from "../context/modal";
import { useAppointment } from "../context/appointment";
import { notify } from "../utils/notify";
import { PatientProps } from "../types/patient";
import Calendar from "react-calendar";
import Select, { OptionsOrGroups, GroupBase } from "react-select";
import { usePatient } from "../context/patient";
import { optionsMaker } from "../utils/optionsMaker";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface Option {
  label: string;
  value: PatientProps;
}

export function AppointmentModal() {
  const { toggle, isOpen } = useModal();
  const { createAppointment } = useAppointment();
  const [patients, setPatients] = useState<PatientProps[]>([]);
  const [patient, setPatient] = useState<PatientProps>();
  const [date, setDate] = useState(new Date());
  const { fetchPatients } = usePatient();

  async function handleNewAppointment() {
    try {
      const res = await createAppointment({
        patientId: patient.id,
        date,
      });

      if (res.id && patient && date) {
        return notify("Agendamento Criado!", "success");
      }

      return notify("Erro ao agendar", "warning");
    } catch (error) {
      return notify("Erro ao agendar", "warning");
    }
  }

  async function handleFetchPatients() {
    try {
      const patients = await fetchPatients();
      setPatients(patients);
    } catch (error) {
      return;
    }
  }

  function patientOptions() {
    return optionsMaker<PatientProps>(patients, ["first_name", "last_name"]);
  }

  useEffect(() => {
    handleFetchPatients();
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: -500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -500, opacity: 0 }}
          className={`absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto bg-secondary z-50`}
        >
          <Container className="relative w-full h-full flex flex-col items-center justify-center space-y-5">
            <MdClose
              className="absolute right-10 top-10 text-4xl cursor-pointer text-primary"
              onClick={() => toggle()}
            />
            <div className="flex flex-col justify-center max-w-[300px] w-full space-y-5">
              <Calendar onChange={setDate} value={date} />
              <Select
                options={patientOptions()}
                placeholder="Paciente"
                onChange={(selected: Option) => setPatient(selected.value)}
                className="w-full"
              />
              <button className="filled w-full" onClick={() => handleNewAppointment()}>
                Agendar
              </button>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

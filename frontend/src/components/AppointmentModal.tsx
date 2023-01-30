import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { Controller } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { useAppointment } from "../context/appointment";
import { useModal } from "../context/modal";
import { usePatient } from "../context/patient";
import { useFormResolver } from "../hooks/useFormResolver";
import { newAppointmentSchema } from "../schemas/newAppointmentSchema";
import { PatientProps } from "../types/patient";
import { addHourToDate } from "../utils/addHourToDate";
import { notify } from "../utils/notify";
import { optionsMaker } from "../utils/optionsMaker";
import Container from "./Container";
import { Select } from "./Select";

interface Option {
  label: string;
  value: PatientProps;
}

export function AppointmentModal() {
  const { toggle, isOpen } = useModal();
  const { createAppointment } = useAppointment();
  const { fetchPatients } = usePatient();
  const { patients } = usePatient();

  const { register, handleSubmit, errors, control } = useFormResolver(newAppointmentSchema);

  async function handleNewAppointment(data) {
    try {
      await createAppointment({
        patientId: data.patient.id,
        date: addHourToDate(data.date, data.hour),
      });
      return notify("Agendamento Criado!", "success");
    } catch (error) {
      return notify("Erro ao agendar", "warning");
    }
  }

  async function handleFetchPatients() {
    try {
      await fetchPatients();
    } catch (error) {
      return notify("Erro ao buscar agendamentos", "warning");
    }
  }

  function patientOptions() {
    console.log(patients);

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
          className={`fixed left-0 right-0 top-0 bottom-0 mx-auto my-auto bg-secondary z-50`}
        >
          <Container className="relative w-full h-full flex flex-col items-center justify-center space-y-5">
            <MdClose
              className="absolute right-10 top-10 text-4xl cursor-pointer text-primary"
              onClick={() => toggle()}
            />

            <form
              onSubmit={handleSubmit(handleNewAppointment)}
              className="flex flex-col justify-center items-center max-w-[300px] w-full space-y-5"
            >
              <Controller
                name="date"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Calendar onChange={onChange} value={value} />
                )}
              />
              <p>{errors?.date && errors.date.message.toString()}</p>

              <input
                type="time"
                className="flex items-center rounded-md justify-center border-[1px] border-gray-300 p-3 w-full"
                min="8:00"
                max="18:00"
                {...register("hour")}
              />
              <p>{errors?.hour && errors.hour.message.toString()}</p>

              <Controller
                name="patient"
                control={control}
                render={({ field: { onChange } }) => (
                  <Select options={patientOptions()} onChange={onChange} />
                )}
              ></Controller>

              <p>{errors?.patient && errors.patient.message.toString()}</p>

              <button className="filled w-full" type="submit">
                Agendar
              </button>
            </form>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import * as yup from "yup";

export const newAppointmentSchema = yup.object({
  patient: yup.object().required("Escolha um paciente"),
  date: yup.date().required("Escolha uma data"),
});

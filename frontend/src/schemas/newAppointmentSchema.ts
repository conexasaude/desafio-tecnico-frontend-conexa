import * as yup from "yup";

export const newAppointmentSchema = yup.object({
  hour: yup.string().required("Selecione a hora"),
  date: yup.date().required("Selecione data"),
  patient: yup.object().required("Selecione o paciente").typeError("Selecione o paciente"),
});

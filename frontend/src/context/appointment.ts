import { create } from "zustand";
import { api } from "../config/axios";
import { NewAppointmentProps, NewAppointmentResponseProps } from "../types/appointment";
import { loginProps } from "../types/auth";

interface AppointmentProps {
  appointments: [];
  fetchAppointments: () => Promise<AppointmentProps>;
  createAppointment: (data: NewAppointmentProps) => Promise<NewAppointmentResponseProps>;
}

export const useAppointment = create<AppointmentProps>(() => ({
  appointments: [],
  fetchAppointments: async () => {
    const res = await api.get("/consultations?_expand=patient");

    if (res.status == 200) {
      return res.data;
    }

    throw new Error("Error when fetch appointments");
  },
  createAppointment: async () => {
    const res = await api.post("/consultations", {
      patientId: 1,
      date: "Fri Feb 05 2021 10:20:00 GMT-0300 (Brasilia Standard Time)",
    });

    return res.data;
  },
}));

import { create } from "zustand";
import { api } from "../config/axios";
import {
  AppointmentProps,
  NewAppointmentProps,
  NewAppointmentResponseProps,
} from "../types/appointment";

interface AppointmentStoreProps {
  appointments: AppointmentProps[];
  fetchAppointments: () => Promise<AppointmentProps[]>;
  createAppointment: (data: NewAppointmentProps) => Promise<void>;
}

export const useAppointment = create<AppointmentStoreProps>((set, get) => ({
  appointments: [],
  fetchAppointments: async () => {
    const res = await api.get("/consultations?_expand=patient");

    return res.data;
  },
  createAppointment: async (data: NewAppointmentProps) => {
    await api.post("/consultations", { ...data });

    get().fetchAppointments();
  },
}));

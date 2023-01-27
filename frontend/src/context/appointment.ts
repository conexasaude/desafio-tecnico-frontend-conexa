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
  createAppointment: (data: NewAppointmentProps) => Promise<NewAppointmentResponseProps>;
}

export const useAppointment = create<AppointmentStoreProps>((set) => ({
  appointments: [],
  fetchAppointments: async () => {
    try {
      const res = await api.get("/consultations?_expand=patient");

      if (res.status == 200) {
        return res.data;
      }
      throw new Error("Error when fetch appointments");
    } catch (error) {
      throw new Error("Error when fetch appointments");
    }
  },
  createAppointment: async (data: NewAppointmentProps) => {
    try {
      const res = await api.post("/consultations", { ...data });

      if (res.data) {
        set((state) => ({ ...state, appointments: res.data }));
        return res.data;
      }

      throw new Error("Error when create appointment");
    } catch (error) {
      throw new Error("Error when create appointment");
    }
  },
}));

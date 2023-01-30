import { create } from "zustand";
import { api } from "../config/axios";
import { PatientProps } from "../types/patient";

interface PatientStoreProps {
  patients: PatientProps[];
  setPatients: (patients: PatientProps[]) => void;
  fetchPatients: () => Promise<PatientProps[]>;
}

export const usePatient = create<PatientStoreProps>((set, get) => ({
  patients: [],
  setPatients: (patients: PatientProps[]) => {
    set(() => ({ patients }));
  },
  fetchPatients: async () => {
    const { data } = await api.get("/patients");
    set(() => ({ patients: data }));
    return data;
  },
}));

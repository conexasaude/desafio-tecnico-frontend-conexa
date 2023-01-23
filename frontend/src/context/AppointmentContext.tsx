import { createContext } from 'react';
import { Appointment } from '../types/Appointment';
import { Patient } from '../types/Patient';

export type AppointmentContextType = {
  appointmentList: Appointment[];
  patientList: Patient[];

  isAppointmentRetrievalSuccessful: boolean;
  isPatientRetrievalSuccessful: boolean;
  isPostSuccessful: boolean;

  getAppointmentList: () => Promise<boolean>;
  getPatientList: () => Promise<boolean>;
  postNewAppointment: (appointment: Appointment) => Promise<boolean>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppointmentContext = createContext<AppointmentContextType>(null!);

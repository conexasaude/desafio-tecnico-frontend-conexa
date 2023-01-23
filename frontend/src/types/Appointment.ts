import { Patient } from './Patient';

export type Appointment = {
  id?: number;
  date: string;
  patient?: Patient;
  patientId: string;
};

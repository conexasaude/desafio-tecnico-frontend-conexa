import { MomentInput } from "moment";

interface PatientProps {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface AppointmentProps {
  id: number;
  patientId: number;
  date: MomentInput;
  patient: PatientProps;
}

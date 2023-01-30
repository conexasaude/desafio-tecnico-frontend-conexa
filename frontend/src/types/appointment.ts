interface PatientProps {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface AppointmentProps {
  id: number;
  patientId: number;
  date: string;
  patient: PatientProps;
}

export interface NewAppointmentResponseProps {
  id: number;
  patientId: number;
  date: Date;
}

export interface NewAppointmentProps {
  patientId: number;
  patient: PatientProps;
  date: Date;
  hour: string;
}

import { Appointment } from '../types/Appointment';
import { Patient } from '../types/Patient';
import api from './api';

const useApi = () => ({
  getAppointmentList: async (): Promise<Appointment[]> => {
    let data: Appointment[];
    await api.get('/consultations?_expand=patient').then(response => {
      data = response.data;
    });
    return data;
  },
  postNewAppointment: async (appointment: Appointment) => {
    let data;
    await api.post('/consultations', appointment).then(response => {
      data = response.data;
    });
    return data;
  },
  getPatientList: async (): Promise<Patient[]> => {
    let data: Patient[];
    await api.get('/patients?').then(response => {
      data = response.data;
    });
    return data;
  },
});

export default useApi;

/* eslint-disable react/jsx-no-constructed-context-values */
import { useContext, useEffect, useState } from 'react';
import { AppointmentContext } from './AppointmentContext';
import { Appointment } from '../types/Appointment';
import useApi from '../hooks/appointment';
import { AuthContext } from './AuthContext';
import { Patient } from '../types/Patient';

function AppointmentProvider({ children }: { children: JSX.Element }) {
  const [appointmentList, setAppointmentList] = useState<Appointment[] | null>(null);
  const [patientList, setPatientList] = useState<Patient[] | null>(null);
  const [isAppointmentRetrievalSuccessful, setIsAppointmentRetrievalSuccessful] = useState(false);
  const [isPatientRetrievalSuccessful, setIsPatientRetrievalSuccessful] = useState(false);
  const [isPostSuccessful, setIsPostSuccessful] = useState(false);

  const auth = useContext(AuthContext);
  const api = useApi();

  const getAppointmentList = async (): Promise<boolean> => {
    const data = await api.getAppointmentList();
    if (data.length) {
      setAppointmentList(data);
      setIsAppointmentRetrievalSuccessful(true);
    }
    return isAppointmentRetrievalSuccessful;
  };

  const postNewAppointment = async (appointment: Appointment): Promise<boolean> => {
    await api.postNewAppointment(appointment);
    setIsPostSuccessful(true);
    setIsAppointmentRetrievalSuccessful(false);

    return isPostSuccessful;
  };

  const getPatientList = async (): Promise<boolean> => {
    const data = await api.getPatientList();
    if (data.length) {
      setPatientList(data);
      setIsPatientRetrievalSuccessful(true);
    }
    return isPatientRetrievalSuccessful;
  };

  useEffect(() => {
    if (auth.isAuthenticated && !isPatientRetrievalSuccessful) getPatientList();
    if (auth.isAuthenticated && !isAppointmentRetrievalSuccessful) getAppointmentList();

    if (!auth.isAuthenticated) {
      setAppointmentList(null);
      setIsAppointmentRetrievalSuccessful(false);
    }
  }, [auth.isAuthenticated, isAppointmentRetrievalSuccessful, isPatientRetrievalSuccessful]);

  return (
    <AppointmentContext.Provider
      value={{
        appointmentList,
        patientList,
        isAppointmentRetrievalSuccessful,
        isPatientRetrievalSuccessful,
        isPostSuccessful,
        getAppointmentList,
        getPatientList,
        postNewAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export default AppointmentProvider;

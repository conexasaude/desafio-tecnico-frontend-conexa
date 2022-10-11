import React, {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
} from 'react';
import API from '../services/api'

interface AppointmentContextData {
    getAppointments(): Promise<IAppointment[]>
    getPatients(): Promise<IPatient[]>
    sendAppointment(patientId: number, date: Date): void
}

export interface IPatient {
    id: number
    first_name: string
    last_name: string
    email: string
}

export interface IAppointment {
    date: Date
    id: number
    patient: IPatient
    patientId: number
}

const AppointmentContext = createContext<AppointmentContextData>({} as AppointmentContextData);

const AppointmentProvider: React.FC<PropsWithChildren> = ({ children }) => {

    const getAppointments = useCallback(async () => {
        const { data } = await API.get<IAppointment[]>('consultations?_expand=patient');
        return data
    }, [])

    const getPatients = useCallback(async () => {
        const { data } = await API.get<IPatient[]>('patients');
        return data
    }, [])

    const sendAppointment = useCallback(async (patientId: number, date: Date) => {
        try {
            await API.post('consultations', {
                patientId,
                date
            });
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <AppointmentContext.Provider
            value={{
                getAppointments,
                sendAppointment,
                getPatients
            }}
        >
            {children}
        </AppointmentContext.Provider>
    );
};

function useAppointment(): AppointmentContextData {
    const context = useContext(AppointmentContext);
    if (!context) {
        throw new Error('useAppointment must be used within an AppointmentProvider');
    }
    return context;
}

export { useAppointment, AppointmentProvider };

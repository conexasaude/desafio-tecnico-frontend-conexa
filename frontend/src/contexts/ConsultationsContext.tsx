import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { ConsultationsService } from '../services/api/consultations/Consultations'

interface Consultation {
  patientId: number
  date: Date
  patient: object
}

interface ConsultationsContextType {
  consultations: Consultation[]
}

interface ConsultationsProviderProps {
  children: ReactNode
}

export const ConsultationsContext = createContext(
  {} as ConsultationsContextType,
)

export function ConsultationsProvider({
  children,
}: ConsultationsProviderProps) {
  const [consultations, setConsultations] = useState<Consultation[]>([])
  console.log(consultations)

  const fetchConsultations = useCallback(async () => {
    const response = await ConsultationsService.getAll()

    if (response) {
      setConsultations(response)
    }
  }, [])

  useEffect(() => {
    fetchConsultations()
  }, [fetchConsultations])

  return (
    <ConsultationsContext.Provider value={{ consultations }}>
      {children}
    </ConsultationsContext.Provider>
  )
}

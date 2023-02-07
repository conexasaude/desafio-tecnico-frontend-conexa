import { ReactNode, useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'
import { ConsultationsService } from '../services/api/consultations/Consultations'

interface Consultation {
  id: number
  date: string
  patient: {
    id: number
    email: string
    first_name: string
    last_name: string
  }
}

interface ConsultationsContextType {
  consultations: Consultation[]
  fetchConsultations: () => Promise<void>
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

  const fetchConsultations = useCallback(async () => {
    const response = await ConsultationsService.getAll()

    if (response) {
      setConsultations(response)
    }
  }, [])

  return (
    <ConsultationsContext.Provider
      value={{ consultations, fetchConsultations }}
    >
      {children}
    </ConsultationsContext.Provider>
  )
}

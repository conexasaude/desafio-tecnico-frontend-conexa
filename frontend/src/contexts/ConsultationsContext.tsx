import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../services/api/axios-config'
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

interface NewConsultationProps {
  patientId: number
  date: Date
}

interface ConsultationsContextType {
  consultations: Consultation[]
  fetchConsultations: () => Promise<void>
  createNewConsultation: (data: NewConsultationProps) => Promise<void>
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

  const createNewConsultation = useCallback(
    async (data: NewConsultationProps) => {
      await api.post('/consultations', data)
      await fetchConsultations()
    },
    [fetchConsultations],
  )

  useEffect(() => {
    fetchConsultations()
  }, [fetchConsultations])

  return (
    <ConsultationsContext.Provider
      value={{ consultations, fetchConsultations, createNewConsultation }}
    >
      {children}
    </ConsultationsContext.Provider>
  )
}

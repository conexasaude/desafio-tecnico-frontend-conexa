import { ReactNode, useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../services/api/axios-config'
import { ConsultationsService } from '../services/api/consultations'

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
  startConsultation: Consultation | undefined
  fetchConsultations: () => Promise<void>
  createNewConsultation: (data: NewConsultationProps) => Promise<void>
  startNewConsultation: (data: Consultation) => void
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
  const [startConsultation, setStartConsultation] = useState<Consultation>()

  const fetchConsultations = useCallback(async () => {
    const response = await ConsultationsService.getAll()

    if (response) {
      setConsultations([])
    }
  }, [])

  const createNewConsultation = useCallback(
    async (data: NewConsultationProps) => {
      try {
        await api.post('/consultations', data)
        await fetchConsultations()
        alert('Consulta agendada com sucesso')
      } catch (error) {
        console.log(error)
      }
    },
    [fetchConsultations],
  )

  function startNewConsultation(consultation: Consultation) {
    if (consultation) {
      setStartConsultation(consultation)
    }
  }

  return (
    <ConsultationsContext.Provider
      value={{
        consultations,
        fetchConsultations,
        createNewConsultation,
        startNewConsultation,
        startConsultation,
      }}
    >
      {children}
    </ConsultationsContext.Provider>
  )
}

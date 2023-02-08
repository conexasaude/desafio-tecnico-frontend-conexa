import { useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../services/api/axios-config'
import { ConsultationsService } from '../services/api/consultations'
import {
  Consultation,
  NewConsultationProps,
  ConsultationsContextType,
  ConsultationsProviderProps,
} from './../interfaces/Consultation'

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
      setConsultations(response)
    }
  }, [])

  const createNewConsultation = useCallback(
    async (data: NewConsultationProps) => {
      try {
        await api.post('/consultations', data)
        fetchConsultations()
        alert('Consulta agendada com sucesso')
      } catch (error) {
        console.log(error)
      }
    },
    [],
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

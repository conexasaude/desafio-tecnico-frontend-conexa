import { ReactNode } from 'react'

export interface Consultation {
  id: number
  date: string
  patient: {
    id: number
    email: string
    first_name: string
    last_name: string
  }
}

export interface NewConsultationProps {
  patientId: number
  date: Date
}

export interface ConsultationsContextType {
  consultations: Consultation[]
  startConsultation: Consultation | undefined
  fetchConsultations: () => Promise<void>
  createNewConsultation: (data: NewConsultationProps) => Promise<void>
  startNewConsultation: (data: Consultation) => void
}

export interface ConsultationsProviderProps {
  children: ReactNode
}

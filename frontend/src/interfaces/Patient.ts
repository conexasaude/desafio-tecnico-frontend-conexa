import { ReactNode } from 'react'

export interface Patient {
  id: number
  email: string
  first_name: string
  last_name: string
}

export interface PatientsContextType {
  patients: Patient[]
  fetchPatients: () => Promise<void>
}

export interface PatientsProviderProps {
  children: ReactNode
}

import { ReactNode, useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'
import { PatientsService } from '../services/api/patients'

interface Patient {
  id: number
  email: string
  first_name: string
  last_name: string
}

interface PatientsContextType {
  patients: Patient[]
  fetchPatients: () => Promise<void>
}

interface PatientsProviderProps {
  children: ReactNode
}

export const PatientsContext = createContext({} as PatientsContextType)

export function PatientsProvider({ children }: PatientsProviderProps) {
  const [patients, setPatients] = useState<Patient[]>([])

  const fetchPatients = useCallback(async () => {
    const response = await PatientsService.getAll()

    if (response) {
      setPatients(response)
    }
  }, [])

  return (
    <PatientsContext.Provider value={{ patients, fetchPatients }}>
      {children}
    </PatientsContext.Provider>
  )
}

import { useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'
import { PatientsService } from '../services/api/patients'
import {
  Patient,
  PatientsContextType,
  PatientsProviderProps,
} from '../interfaces/Patient'

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

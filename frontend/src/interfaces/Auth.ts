import { ReactNode } from 'react'

export interface AuthProps {
  email: string
  password: string
}
export interface AuthContextProviderProps {
  isAuthenticated: boolean
  handleLogin: (data: AuthProps) => Promise<string | void>
  handleLogout: () => void
}

export interface AuthContextProps {
  children: ReactNode
}

import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { createContext } from 'use-context-selector'
import { Authservice } from '../services/api/auth/AuthService'

interface AuthProps {
  email: string
  password: string
}
interface AuthContextProviderProps {
  isAuthenticated: boolean
  handleLogin: (data: AuthProps) => Promise<string | void>
  handleLogout: () => void
}

interface AuthContextProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProviderProps)

const LOCAL_STORAGE_KEY__ACCESS_TOKEN = 'APP_ACCESS_TOKEN'

const LOCAL_STORE_DATA_USER = 'APP_ACCESS_USER'

export function AuthProvider({ children }: AuthContextProps) {
  const [accessToken, setAcessToken] = useState<string>()

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN)
    if (accessToken) {
      setAcessToken(JSON.parse(accessToken))
    } else {
      setAcessToken(undefined)
    }
  }, [])

  const handleLogin = useCallback(async (data: AuthProps) => {
    const response = await Authservice.auth({
      email: data.email,
      password: data.password,
    })

    if (response) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY__ACCESS_TOKEN,
        JSON.stringify(response.data.token),
      )
      localStorage.setItem(LOCAL_STORE_DATA_USER, JSON.stringify(response.data))
      setAcessToken(response.data.token)
    }
  }, [])

  const handleLogout = useCallback(() => {
    setAcessToken(undefined)
    localStorage.removeItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN)
  }, [])

  const isAuthenticated = useMemo(() => !!accessToken, [accessToken])

  return (
    <AuthContext.Provider
      value={{ handleLogin, handleLogout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  )
}

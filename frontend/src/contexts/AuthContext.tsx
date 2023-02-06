import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Authservice } from '../services/api/auth/AuthService'

interface AuthContextProviderProps {
  isAuthenticated: boolean
  handleLogin: (email: string, password: string) => Promise<string | void>
  handleLogout: () => void
}

interface AuthContextProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProviderProps)

const LOCAL_STORAGE_KEY__ACCESS_TOKEN = 'APP_ACCESS_TOKEN'

export function AuthProvider({ children }: AuthContextProps) {
  const [accessToken, setAcessToken] = useState<string>()

  useEffect(() => {
    // const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN)
    // if (accessToken) {
    //   setAcessToken(JSON.parse(accessToken))
    // } else {
    //   setAcessToken(undefined)
    // }
  }, [])

  const handleLogin = useCallback(async (email: string, password: string) => {
    const result = await Authservice.auth(email, password)

    if (result instanceof Error) {
      return result.message
    } else {
      // localStorage.setItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN, JSON.stringify(result))
      console.log(result)
    }
  }, [])

  const handleLogout = useCallback(() => {
    setAcessToken(undefined)
    localStorage.removeItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN)
  }, [])

  const isAuthenticated = useMemo(() => !!accessToken, [])

  return (
    <AuthContext.Provider
      value={{ handleLogin, handleLogout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  )
}

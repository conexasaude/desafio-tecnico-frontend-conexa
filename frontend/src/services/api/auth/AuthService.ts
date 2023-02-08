import { api } from '../axios-config'

interface AuthProps {
  email: string
  password: string
}

export const auth = async (dataLogin: AuthProps) => {
  try {
    const response = await api.post('/login', dataLogin)

    if (response) {
      return response
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const Authservice = {
  auth,
}

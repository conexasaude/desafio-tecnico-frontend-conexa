import { api } from '../axios-config'

interface IAuth {
  accessToken: string
}

export const auth = async (
  email: string,
  password: string,
): Promise<IAuth | Error> => {
  try {
    const { data } = await api.post('/login', { data: { email, password } })

    if (data) {
      return data
    }

    return new Error('Erro no login')
  } catch (error) {
    console.log(error)
    return new Error((error as { message: string }).message || 'Erro no login')
  }
}

export const Authservice = {
  auth,
}

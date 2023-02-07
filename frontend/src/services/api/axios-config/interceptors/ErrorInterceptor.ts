import { AxiosError } from 'axios'

export const errorInterceptor = (error: AxiosError) => {
  if (error.message === 'NetworkError') {
    return Promise.reject(new Error('Erro de conexão'))
  }

  if (error.response?.status === 401) {
    alert('Usuário nao cadastrado')
  }

  return Promise.reject(error)
}

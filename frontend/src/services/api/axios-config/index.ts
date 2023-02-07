import axios from 'axios'
import { errorInterceptor, responseInterceptor } from './interceptors'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${JSON.parse(
      localStorage.getItem('APP_ACCESS_TOKEN') || '',
    )}`,
  },
})

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
)

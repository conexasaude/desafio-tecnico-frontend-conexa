import axios from 'axios'
import { errorInterceptor, responseInterceptor } from './interceptors'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = JSON.parse(
    localStorage.getItem('APP_ACCESS_TOKEN') as string,
  )
  console.log('config', config)
  return config
})
api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
)

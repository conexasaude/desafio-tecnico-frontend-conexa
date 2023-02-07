import axios from 'axios'
import { errorInterceptor, responseInterceptor } from './interceptors'

const TOKEN_USER =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZmFrZSB0b2tlbiJ9.-tvEhfr6_VHfKU9bumcmdvku-IfwZDz2LtjeqZOuH-g'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: TOKEN_USER,
  },
})

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
)

import { api } from '../axios-config'

export const getAll = async () => {
  try {
    const response = await api.get('/consultations?_expand=patient')
    if (response) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export const ConsultationsService = {
  getAll,
}

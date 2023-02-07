import { api } from '../axios-config'

export const getAll = async () => {
  return await api
    .get('/consultations?_expand=patient')
    .then((result) => {
      return result.data
    })
    .catch((err) => {
      return err
    })
}

export const ConsultationsService = {
  getAll,
}

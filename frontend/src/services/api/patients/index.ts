import { api } from '../axios-config'

export const getAll = async () => {
  return await api
    .get('/patients')
    .then((result) => {
      return result.data
    })
    .catch((err) => {
      return err
    })
}

export const PatientsService = {
  getAll,
}

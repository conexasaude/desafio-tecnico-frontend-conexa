import { api } from '../axios-config'

export const getAll = async () => {
  return await api
    .get('/consultations?_expand=patient', {
      params: {
        _sort: 'date',
        _order: 'cresc',
      },
    })
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

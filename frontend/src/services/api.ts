/* eslint-disable camelcase */
import axios from 'axios'

import { getLocalStorage,setLocalStorage } from './localStorage'
const api = axios.create({
  baseURL: 'http://localhost:3333/'
})


api.interceptors.request.use((config) => {
  const {token} = getLocalStorage('user')
  config.headers  = {
    Authorization : `Bearer ${token}`
  }
  return config;
},  (error) =>{
  return Promise.reject(error);
});

export default api
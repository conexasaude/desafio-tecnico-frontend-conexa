import { User } from '../types/User';
import api from './api';

const useApi = () => ({
  login: async (email: string, password: string): Promise<User> => {
    let data: User;
    await api.post('/login', { email, password }).then(response => {
      data = response.data;
    });
    return data;
  },
  setAuthorizationHeader: (token: string): void => {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  },
});

export default useApi;

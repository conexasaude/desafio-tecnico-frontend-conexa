/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { User } from '../types/User';
import useApi from '../hooks/auth';

function AuthProvider({ children }: { children: JSX.Element }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  const login = async (email: string, password: string): Promise<boolean> => {
    const data = await api.login(email, password);
    if (data.name && data.token) {
      setUser(data);
      setIsAuthenticated(true);
      api.setAuthorizationHeader(data.token);
      localStorage.setItem('user', JSON.stringify(data));
    }
    return isAuthenticated;
  };

  const logout = (): void => {
    setUser(null);
    setIsAuthenticated(false);
    api.setAuthorizationHeader('');
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const localStorageUser: User = JSON.parse(localStorage.getItem('user'));
    if (localStorageUser) {
      setIsAuthenticated(true);
      setUser(localStorageUser);
      api.setAuthorizationHeader(localStorageUser.token);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

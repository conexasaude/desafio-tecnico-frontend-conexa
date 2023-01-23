import { createContext } from 'react';
import { User } from '../types/User';

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthContext = createContext<AuthContextType>(null!);

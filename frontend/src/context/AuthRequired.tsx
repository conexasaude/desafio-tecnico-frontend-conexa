import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function AuthRequired({ children }: { children: JSX.Element }) {
  const auth = useContext(AuthContext);

  return auth.isAuthenticated ? children : <Navigate to="/login" />;
}

export default AuthRequired;

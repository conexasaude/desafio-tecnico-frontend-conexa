import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


const PrivateRoute: React.FC<PropsWithChildren> = ({ children}) => {
  const { getLogged } = useAuth();
  const isLogged = getLogged()
  
  if(!isLogged || !isLogged.token){
    return <Navigate to='/login'/>
  }

  return <>{children}</>

}

export default PrivateRoute;
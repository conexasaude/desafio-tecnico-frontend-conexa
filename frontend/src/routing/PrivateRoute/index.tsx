import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../store';
import { DoctorState } from '../../store/doctor';

export interface PrivateRouteProps {
  pathToRedirect?: string;
  children: React.ReactElement;
}

const PrivateRoute = ({
  children,
  pathToRedirect = '/',
}: PrivateRouteProps) => {
  const storeDoctor = useSelector<RootState, DoctorState>(
    (store) => store.doctor
  );

  if (!!storeDoctor.token) {
    return children;
  }
  return (
    <Navigate
      to={{
        pathname: pathToRedirect,
      }}
    />
  );
};

export default PrivateRoute;

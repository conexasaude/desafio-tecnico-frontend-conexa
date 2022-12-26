/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { pagesPathsEnum } from 'utils/constants';
import Layout from '../containers/GenericLayout';
import NewMedicalConsultation from '../containers/NewMedicalConsultation';
import DoctorRoom from '../pages/DoctorRoom';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';

export default () => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path={pagesPathsEnum.login} element={<Login />} />
          <Route
            path={pagesPathsEnum.doctorRoom}
            element={
              <PrivateRoute>
                <DoctorRoom />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route
            path={pagesPathsEnum.newConsultation}
            element={
              <PrivateRoute>
                <NewMedicalConsultation />
              </PrivateRoute>
            }
          />
        </Routes>
      )}
    </>
  );
};

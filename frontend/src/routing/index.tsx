/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="doctor-room"
          element={
            <PrivateRoute>
              <DoctorRoom />
            </PrivateRoute>
          }
        />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="new-medical-consultation"
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

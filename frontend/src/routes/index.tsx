import { Route, Routes } from 'react-router-dom';

import AuthRequired from '../context/AuthRequired';
import Login from '../pages/Login';
import Home from '../pages/Home';

function index() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <AuthRequired>
            <Home />
          </AuthRequired>
        }
      />
    </Routes>
  );
}

export default index;

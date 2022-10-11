import React from 'react';
import { Route,Routes } from "react-router-dom";
import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const routes: React.FC = () => {
    
    return (
        <Routes>
            <Route path='/login'  element={<Login />} />
            <Route path='/' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
    );
}

export default routes;
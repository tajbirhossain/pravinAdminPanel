import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, isLoggedIn, ...rest }) => {
    if (isLoggedIn) {
        return <Route {...rest} element={<Element />} />;
    } else {
        return <Navigate to="/login" />;
    }
};

export default PrivateRoute;

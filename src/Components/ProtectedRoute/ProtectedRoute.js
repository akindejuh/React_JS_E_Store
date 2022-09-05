import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
// import { useSelector } from 'react-redux';

const ProtectedRoute = ({ outlet, navigate }) => {
    // const auth_state = useSelector(state => state.Auth);
    // return auth_state !== null || undefined ? <Outlet to={outlet} /> : <Navigate to={navigate} />
    return true ? <Outlet to={outlet} /> : <Navigate to={navigate} />
}

export default ProtectedRoute;

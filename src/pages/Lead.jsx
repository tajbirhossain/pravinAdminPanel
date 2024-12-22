import React from 'react'
import Singlelead from '../components/Singlelead'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const Lead = () => {
    const { isAuthenticated, toggleAuthentication } = useAuth();



    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return (
        <div className='lead-gen'>
            <div className="add-new vfreewd">
                <h2>Leads Generation</h2>
            </div>
            <Singlelead />
        </div>
    )
}

export default Lead
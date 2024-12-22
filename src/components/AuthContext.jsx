import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    useEffect(() => {
        sessionStorage.getItem("user") ? setIsAuthenticated(true) : setIsAuthenticated(false)
    }, [sessionStorage.getItem("user")])
    const toggleAuthentication = (value) => {
        setIsAuthenticated(value);
    };


    return (
        <AuthContext.Provider value={{ isAuthenticated, toggleAuthentication }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
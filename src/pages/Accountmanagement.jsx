import React from "react";
import '../components/styles/customers.css'
import Customerlist from "../components/Customerlist";
import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { Navigate } from "react-router-dom";


const Accountmanagement = () => {

    const { isAuthenticated, toggleAuthentication } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return (
        <div className="customers">
            <div className="add-new">
                <h2>Account Management</h2>
                <button><Link to={"/"}>Add New Account</Link></button>
            </div>
            <Customerlist />
        </div>
    )
}

export default Accountmanagement
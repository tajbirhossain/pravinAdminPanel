import React from "react";
import '../components/styles/invoices.css'
import { Link } from "react-router-dom";
import Singleinvoice from "../components/Singleinvoice";
import TwoSwitch from "../components/TwoSwitch";
import { useAuth } from "../components/AuthContext";
import { Navigate } from "react-router-dom";

const Invoices = () => {

    const { isAuthenticated, toggleAuthentication } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return (
        <div className="invoices">
            <div className="topSwitch">
                <TwoSwitch />
            </div>

        </div>
    )
}

export default Invoices
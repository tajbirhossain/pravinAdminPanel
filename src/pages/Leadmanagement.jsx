import React, { useState } from "react";
import '../components/styles/leadmanagement.css'
import Singlelead from "../components/Singlelead";
import TwoSwitch from "../components/TwoSwitch";
import Singleinvoice from "../components/Singleinvoice";
import "../components/styles/leadmanagement.css"
import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { Navigate } from "react-router-dom";

const Leadmanagement = () => {

    const { isAuthenticated, toggleAuthentication } = useAuth();



    const [btnToggle, setBtnToggle] = useState(true)

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return (
        <div className="lead-management">
            <div className="topSwitch">
                <TwoSwitch setBtnToggle={setBtnToggle} btnToggle={btnToggle} />
            </div>
            {
                btnToggle ? <>
                    
                </> :
                    <>
                        
                    </>
            }
        </div>
    )
}

export default Leadmanagement
import React from "react";
import '../components/styles/dashboard.css'
import Overview from "../components/Overview";
import Visitors from "../components/Visitors";
import Newsletter from "../components/Newsletter";
import Card from "../components/Card";
import Setting from "../components/Setting";
import Profiledetail from "../components/Profiledetail";
import Inventory from "../components/Inventory";
import Profiles from "../components/Profile";
import { useAuth } from "../components/AuthContext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {

    const { isAuthenticated, toggleAuthentication } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return (
        <div className="dashboard">
            <div className="dashboard-wrap">
                <div className="dashboard-top">
                    <Overview />
                    <Visitors />
                </div>
                <div className="dashboard-bottom">
                    <div className="dashboard-left">
                        <Card />
                        <Profiles />
                    </div>
                    <div className="dashboard-right">
                        <Newsletter />
                        <div className="wraper-dw">
                        </div>
                        <Setting />
                        <Profiledetail />
                        <Inventory />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dashboard
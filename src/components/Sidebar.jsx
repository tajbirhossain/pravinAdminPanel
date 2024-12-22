import React, { useEffect, useState } from 'react'
import '../components/styles/sidebar.css'
import setting from '../images/setting.png'
import email from '../images/gmail-logo.png'
import logout from '../images/turn-off.png'
import { NavLink } from 'react-router-dom'
import f from '../images/checklists.png'
import axios from 'axios'



const Sidebar = ({ children, toggleValue, isLog }) => {

    const [menu,setMenu] = useState([])
    useEffect(()=> {
        axios.get("https://wadeprav-001-site1.ctempurl.com/api/MenuMaster/GetAllMenu").then(res => {
            console.log(res.data);
            setMenu(res.data)
        })
    },[])



    const item = [
        {
            path: "/",
            name: "Dashboard",
            img: f
        },
        {
            path: "/ordermanagement",
            name: "Order Management",
            img: f
        },
        {
            path: "/categorymanagement",
            name: "Category Management",
            img: f
        },
        {
            path: "/reportmanagement",
            name: "Report Management",
            img: f
        },
        {
            path: "/usermanagement",
            name: "User Management",
            img: f
        },
        // {
        //     path: "/leadgenerationmanagement",
        //     name: "Sales",
        //     img: f
        // },
        // {
        //     path: "/invoices",
        //     name: "Invoices",
        //     img: f
        // },
        {
            path: "/accountmanagement",
            name: "Account Management",
            img: f
        },
        {
            path: "/lead",
            name: "Lead Generation",
            img: f
        },
        {
            path: "/invoice",
            name: "Invoices",
            img: f
        },
    ]

    const sidebarStyles = {
        width: window.innerWidth > 500 ? (window.innerWidth > 850 ? (toggleValue ? "75px" : "260px") : toggleValue ? "260px" : "75px") : "260px",
        left: window.innerWidth > 500 ? "0" : (toggleValue ? "0" : "-300px"),
        display: !isLog ? "block" : "none"
    }




    return (
        <div className="main-wrap">
            <div className={"sidebar"} style={sidebarStyles}>


                <div className="link-wrap">
                    {
                        menu && menu.map((val, ind) => {
                            return (
                                <NavLink to={val.route} key={ind} className="link" activeclassame="link active">
                                    <div className="top-img">
                                        <img src={f} alt="" />
                                    </div>
                                    <div className="name" style={{ display: window.innerWidth > 500 ? (window.innerWidth > 850 ? (toggleValue ? "none" : "block") : toggleValue ? "block" : "none") : "block" }}>{val.menuName}</div>
                                </NavLink>
                            )
                        })
                    }
                </div>
                <div className="logout-bar" style={{ display: window.innerWidth > 500 ? (window.innerWidth > 850 ? (toggleValue ? "none" : "flex") : toggleValue ? "flex" : "none") : "flex", left: window.innerWidth > 500 ? "0px" : toggleValue ? "0px" : "-300px" }}>
                    <div className="single-bar">
                        <div className="sample">
                            Settings
                        </div>
                        <img className="colorshem" src={setting} alt="" />
                    </div>
                    <div className="single-bar">
                        <div className="sample">
                            Email
                        </div>
                        <img className="colorshem" src={email} alt="" />
                    </div>
                    <div className="single-bar">
                        <div className="sample">
                            Logout
                        </div>
                        <img className="colorshem" src={logout} alt="" />
                    </div>
                </div>
            </div>
            <main style={{ width: !isLog ? (toggleValue ? "100%" : window.innerWidth > 850 ? "calc(100% - 260px)" : "100%") : "100%", marginLeft: !isLog ? (window.innerWidth > 500 ? (toggleValue ? "75px" : window.innerWidth > 850 ? "260px" : "75px") : "0") : "0", transition: ".3s", paddingTop: !isLog?"70px": "10px" }}>{children}</main>
        </div>
    )
}

export default Sidebar
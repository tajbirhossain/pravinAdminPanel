import React, { useState } from 'react'
import '../components/styles/header.css'
import a from '../images/menu.png'
import b from '../images/search.png'
import c from '../images/grid.png'
import d from '../images/comment.png'
import e from '../images/email.png'
import f from '../images/1.jpg'
import g from '../images/united-states.png'
import h from '../images/logo-light-icon.png'
import i from '../images/logo-light-text.png'
import x from '../images/close.png'
import more from '../images/more.png'

const Header = ({ toggleValue, setToggleValue, isLog }) => {

    const [hide, setHide] = useState(true)
    const [smToggle, setSmToggle] = useState(false)

    const show = () => {
        setHide(prev => !prev)
    }
    const smRun = () => {
        setSmToggle(prev => !prev)
    }




    return (
        <header style={{ display: !isLog ? "flex" : "none" }}>
            <form className="main-form" style={{ width: !isLog ? (hide ? "0px" : "100%") : "0px", height: !isLog ? (hide ? "0px" : "98%") : "0px" }}>
                <input type="text" placeholder="Search & enter" />
                <img src={x} alt="" onClick={show} style={{ display: hide ? "none" : "block" }} />
            </form>
            <div className="header-leftside">
                <img className="icons" src={h} alt="" />
                {/* <img className="texts" src={i} alt="" style={{ display: !isLog ? (toggleValue ? "none" : window.innerWidth > 850 ? "block" : "none") : "none" }} /> */}
                <h2 className="texts" style={{ display: !isLog ? (toggleValue ? "none" : window.innerWidth > 850 ? "block" : "none") : "none" }}>Admin Panel</h2>
                <div className="single-image" onClick={setToggleValue} style={{ display: !isLog ? "flex" : "none" }}>
                    <img className="menu" src={a} alt="" />
                </div>
                <div className="single-image" onClick={show}>
                    <img className="same" src={b} alt="" />
                </div>
            </div>
            <div className="header-righttside">
                <div className="single-image">
                    <img className="sames" src={d} alt="" />
                </div>
                <div className="single-image">
                    <img className="samer" src={e} alt="" />
                </div>
                <div className="single-image">
                    <img className="prfile" src={f} alt="" />
                </div>
                <div className="single-image">
                    <img className="flag" src={g} alt="" />
                </div>
            </div>
            <img src={more} alt="" className='showMore' onClick={smRun} />
            <div className={smToggle ? "active showSm" : "showSm"}>
                <div className="single-image">
                    <img className="grid" src={c} alt="" />
                </div>
                <div className="sm-wrap">
                    <div className="single-image">
                        <img className="sames" src={d} alt="" />
                    </div>
                    <div className="single-image">
                        <img className="samer" src={e} alt="" />
                    </div>
                    <div className="single-image">
                        <img className="prfile" src={f} alt="" />
                    </div>
                    <div className="single-image">
                        <img className="flag" src={g} alt="" />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header
import React, { useState } from 'react'
import './styles/twoSwitch.css'
import { NavLink } from 'react-router-dom'

const TwoSwitch = ({setBtnToggle,btnToggle}) => {
    const setOne = () => {
        setBtnToggle(true)
    }
    const setTwo = () => {
        setBtnToggle(false)
    }
    return (
        <div className='switchWrap'>
            <div className={btnToggle ? "active singleBtn" : "singleBtn"} onClick={setOne}>Lead Generation</div>
            <div className={btnToggle ? "singleBtn" : "active singleBtn"} onClick={setTwo}>Invoices</div>
            <div className={btnToggle ? "bgBlue" : "bgBlue active"}></div>
        </div>
    )
}

export default TwoSwitch
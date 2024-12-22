import React from "react";
import '../components/styles/dashboard.css'
import { Link } from "react-router-dom";

import a from '../images/img1.jpg'
import b from '../images/heart.png'
import c from '../images/share.png'

const Card = () => {
    return (
        <div className="card">
            <img className="cover" src={a} alt="" />
            <h2>Business development new rules for 2020</h2>
            <h4>Technology</h4>
            <p>Lorem ipsum dolor sit amet, this is a consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
            <div className="liker">
                <span><Link>Read More</Link></span>
                <div className="shares">
                    <Link><img src={b} alt="" /></Link>
                    <Link><img src={c} alt="" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Card
import React from "react";
import '../components/styles/dashboard.css'

import a from '../images/4.jpg'

const Profiles = () => {
    return (
        <div className="profile">
            <div className="profile-top">
                <img src={a} alt="" />
            </div>
            <div className="profile-text">
                <h3>Angela Dominic</h3>
                <p>Web Designer & Developer</p>
                <button>Follow</button>
                <div className="follow-wrap">
                    <div className="single-follow">
                        <h2>1099</h2>
                        <span>Articles</span>
                    </div>
                    <div className="single-follow">
                        <h2>23,469</h2>
                        <span>Followers</span>
                    </div>
                    <div className="single-follow">
                        <h2>6035</h2>
                        <span>Following</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profiles
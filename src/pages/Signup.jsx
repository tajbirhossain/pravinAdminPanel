import React, { useState } from 'react'
import '../components/styles/signup.css'

import a from '../images/3644996 1.svg'

import e from '../images/em.png'
import p from '../images/un.png'
import x from '../images/user.png'

import h from '../images/view.png'
import s from '../images/invisible.png'

import { Link } from 'react-router-dom'


const Singup = () => {

    const [show, setShow] = useState(false)
    const [hide, setHide] = useState(false)

    const toggole = () => {
        setShow(prev => !prev)
    }
    const toggoles = () => {
        setHide(prev => !prev)
    }

    return (
        <div className="logout-container">
            <div className="logout-wrap">
                <div className="logout-image">
                    <img src={a} alt="" />
                </div>
                <form className="logout-form">
                    <div className="informative">
                        <h1>Sign up</h1>
                        <p>If you already have an account register You can <Link><span>Login here !</span></Link></p>
                    </div>
                    <div className="mails">
                        <div className="em">
                            <img src={x} alt="" />
                        </div>
                        <h3>Name</h3>
                        <input type="text" placeholder='Enter your name' className="paas" />
                    </div>
                    <div className="mails">
                        <div className="em">
                            <img src={e} alt="" />
                        </div>
                        <h3>Email</h3>
                        <input type="text" placeholder='Enter your email address' className="paas" />
                    </div>
                    <div className="mails">
                        <div className="hide-show" onClick={toggole}>
                            {
                                show ? <img className="hiders" src={h} alt="" /> : <img className="showwr" src={s} alt="" />
                            }
                        </div>
                        <div className="em">
                            <img src={p} alt="" />
                        </div>
                        <h3>Password</h3>
                        <input type={show ? "text" : "password"} placeholder='Enter your Password' className="paas" />
                    </div>
                    <div className="mails">
                        <div className="hide-show" onClick={toggoles}>
                            {
                                hide ? <img className="hiders" src={h} alt="" /> : <img className="showwr" src={s} alt="" />
                            }
                        </div>
                        <div className="em">
                            <img src={p} alt="" />
                        </div>
                        <h3>Confrim Password</h3>
                        <input type={hide ? "text" : "password"} placeholder='Confrim your Password' className="paas" />
                    </div>
                    <button>Register</button>
                </form>
            </div>

        </div>
    )
}

export default Singup
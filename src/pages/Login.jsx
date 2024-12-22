import React, { useEffect, useState } from 'react'
import '../components/styles/login.css'
import a from '../images/3644996 1.svg'

import e from '../images/em.png'
import p from '../images/un.png'

import h from '../images/view.png'
import s from '../images/invisible.png'

import b from '../images/facebook.png'
import c from '../images/apple.png'
import d from '../images/google.png'
import load from '../images/load.png'

import { useAuth } from "../components/AuthContext";

import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = ({ setIsLog }) => {
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        setIsLog(true)
    }, [])

    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { isAuthenticated, toggleAuthentication } = useAuth();

    const formsubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        axios.post("https://wadeprav-001-site1.ctempurl.com/api/Auth/login", { username: email, password: password }).then(res => {
            console.log(res.data);
            toggleAuthentication(true)
            sessionStorage.setItem('user', res.data);
            setIsLog(false)
            setLoading(false)
            navigate("/home")

        })
    }





    const toggole = () => {
        setShow(prev => !prev)
    }

    return (
        <div className="logout-container">
            <div className="logout-wrap">
                <div className="logout-image">
                    <img src={a} alt="" />
                </div>
                <form className="logout-form" onSubmit={formsubmit}>
                    <div className="informative">
                        <h1>Sign in</h1>
                        <p>If you don’t have an account register You can <Link><span>Register here !</span></Link></p>
                    </div>
                    <div className="mails">
                        <div className="em">
                            <img src={e} alt="" />
                        </div>
                        <h3>Email</h3>
                        <input type="text" placeholder='Enter your email address' className="paas" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mails">
                        <div className="em">
                            <img src={p} alt="" />
                        </div>
                        <div className="hide-show" onClick={toggole}>
                            {
                                show ? <img className="hiders" src={h} alt="" /> : <img className="showwr" src={s} alt="" />
                            }
                        </div>
                        <h3>Password</h3>
                        <input type={show ? "text" : "password"} placeholder='Enter your Password' className="paas" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="check-mark">
                        <div className="checker">
                            <input className="checkers" type="checkbox" />
                            <span>Rememebr me</span>
                        </div>
                        <p>Forgot Password ?</p>
                    </div>
                    <button>Login</button>
                    <p className="para">or continue with</p>
                    <div className="social-media">
                        <Link>
                            <img src={b} alt="" />
                        </Link>
                        <Link>
                            <img src={c} alt="" />
                        </Link>
                        <Link>
                            <img src={d} alt="" />
                        </Link>
                    </div>
                </form>
            </div>
            {loading && <div className="loading">
                <img src={load} alt="" />
            </div>}

        </div>
    )
}

export default Login
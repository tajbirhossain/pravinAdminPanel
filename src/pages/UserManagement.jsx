import React, { useState } from "react";
import '../components/styles/usermanagement.css'
import Datachart from "../components/Datachart";
import { useAuth } from "../components/AuthContext";
import { Navigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import load from '../images/load.png'
import tick from '../images/checkmark.png'

const UserManagement = () => {
    const [loading2, setLoading2] = useState(false)
    const [tst1, setTst1] = useState(false)

    const { isAuthenticated, toggleAuthentication } = useAuth();



    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);




    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [phone, setPhone] = useState("")
    const [userroll, setUserroll] = useState("Super Admin")


    const submitForm = (e) => {
        e.preventDefault()
        setLoading2(true)
        username && password && email && firstname && lastname && phone && userroll && axios.post(process.env.REACT_APP_CREATE_USER_API, { username: username, password: password, email: email, firstName: firstname, lastName: lastname, phoneNumber: phone, userRole: userroll }).then(res => {
            console.log(res);
            setLoading2(false)
            setTst1(true)
            setTimeout(() => {
                setTst1(false)
            }, 2500);
        }).catch(err => {
            setLoading2(false)
        })
    }


    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return (
        <div className="user-management">
            <div className="add-new vfreewd">
                <h2>User Management</h2>
                <button style={{ color: "#fff" }} onClick={handleShow3}>Add New User</button>
            </div>
            <Datachart />
            {loading2 && <div className="loading">
                <img src={load} alt="" />
            </div>}
            <div className="tst" style={{ opacity: tst1 ? "1" : "0", pointerEvents: tst1 ? "all" : "none" }}>
                <div className="tstMsg"><img src={tick} alt="" />
                    <span>Your inquery submitted Successfully.</span>
                    <div className={tst1 ? "loadBtm active" : "loadBtm"}></div>
                </div>
            </div>

            <Modal show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="modal-form" onSubmit={e => submitForm(e)}>
                        <input type="text" placeholder="User Name" value={username} onChange={e => setUsername(e.target.value)} />
                        <input type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="text" placeholder="First Name" value={firstname} onChange={e => setFirstname(e.target.value)} />
                        <input type="text" placeholder="Last Name" value={lastname} onChange={e => setLastname(e.target.value)} />
                        <input type="text" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
                        <div className="form-group">
                            <p>User Role</p>
                            <select name="country" id="country" value={userroll} onChange={e => setUserroll(e.target.value)}>
                                <option value="Super Admin">Super Admin</option>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                            </select>
                        </div>
                        <button>Save</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose3}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default UserManagement
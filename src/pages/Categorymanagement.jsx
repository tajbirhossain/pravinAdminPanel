import React, { useState } from "react";
import '../components/styles/categorymanagement.css'
import Singlecategorymanagement from "../components/Singlecategorymanagement";

import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { useAuth } from "../components/AuthContext";
import { Navigate } from "react-router-dom";
import load from '../images/load.png'
import tick from '../images/checkmark.png'


const Categorymanagement = () => {
    const [loading2, setLoading2] = useState(false)
    const [tst1, setTst1] = useState(false)

    const { isAuthenticated, toggleAuthentication } = useAuth();



    const [show3, setShow3] = useState(false);
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [display, setDisplay] = useState("Yes")

    const handleClose3 = () => setShow3(false);

    const handleShow3 = () => setShow3(true);


    const subForm = (e) => {
        e.preventDefault()
        setLoading2(true)
        name && desc && imgUrl && display && axios.post(process.env.REACT_APP_CREATE_CATEGORY_API, { categoryName: name, description: desc, isDisplayOnHomePage: display, categoryImageUrl: imgUrl }).then(res => {
            console.log(res);
            setLoading2(false)
            setShow3(false)
            setTst1(true)
            setTimeout(() => {
                setTst1(false)
            }, 2500)
        }).catch(err => {
            setLoading2(false)
        })
    }


    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return (
        <div className="categort-management">
            <div className="add-new nnkjkp">
                <h2>Category Management</h2>
                <button style={{ color: "#fff" }} onClick={handleShow3}>Add New Category</button>
            </div>
            <Singlecategorymanagement />
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
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="modal-form mcvncv" onSubmit={e => subForm(e)}>
                        <input type="text" placeholder="Category Name" value={name} onChange={e => setName(e.target.value)} />
                        <textarea placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)}></textarea>
                        <input type="text" placeholder="Image Url" value={imgUrl} onChange={e => setImgUrl(e.target.value)} />
                        <div className="form-group">
                            <p>DisplayOnHomePage</p>
                            <select name="DisplayOnHomePage" id="DisplayOnHomePage" value={display} onChange={e => setDisplay(e.target.value)}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
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

export default Categorymanagement
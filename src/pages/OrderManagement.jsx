import React, { useState } from "react";
import '../components/styles/ordermanagement.css'
import Orderlist from "../components/Orderlist";
import { useAuth } from "../components/AuthContext";
import { Navigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import load from '../images/load.png'
import tick from '../images/checkmark.png'

const OrderManagement = () => {
    const [loading2, setLoading2] = useState(false)
    const [tst1, setTst1] = useState(false)



    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);



    const [orderId, setOrderId] = useState("")
    const [orderDate, setOrderDate] = useState("")
    const [cusName, setCusName] = useState("")
    const [cusAddress, setCusAddress] = useState("")
    const [cusDob, setCusDob] = useState("")
    const [cusEmail, setCusEmail] = useState("")
    const [cusContactNum, setCusContactNum] = useState("")
    const [cusAnni, setCusAnni] = useState("")
    const [sp1, setSp1] = useState("")
    const [sp2, setSp2] = useState("")
    const [cylinder1, setCylinder1] = useState("")
    const [cylinder2, setCylinder2] = useState("")
    const [axis1, setAxis1] = useState("")
    const [axis2, setAxis2] = useState("")
    const [va1, setVa1] = useState("")
    const [va2, setVa2] = useState("")
    const [add1, setAdd1] = useState("")
    const [add2, setAdd2] = useState("")
    const [frameName, setFrameName] = useState("")
    const [framePrice, setFramePrice] = useState("")
    const [lensName, setLensName] = useState("")
    const [lensPrice, setLensPrice] = useState("")
    const [totalAmount, setTotalAmount] = useState("")
    const [advanceAmount, setAdvanceAmount] = useState("")
    const [balAmount, setBalAmount] = useState("")
    const [expectDate, setExpectDate] = useState("")
    const [status, setStatus] = useState("")

    const submitHandle = (e) => {
        e.preventDefault()
        setLoading2(true)
        axios.post(process.env.REACT_APP_CREATE_ORDER_API, {
            orderId: orderId,
            orderDate: orderDate,
            customerName: cusName,
            customerAddress: cusAddress,
            customerDOB: cusDob,
            customerEmail: cusEmail,
            customerContactNumber: cusContactNum,
            customerAnniversary: cusAnni,
            leftEyePrescription: {
                sphere: sp1,
                cylinder: cylinder1,
                axis: axis1,
                va: va1,
                add: add1
            },
            rightEyePrescription: {
                sphere: sp2,
                cylinder: cylinder2,
                axis: axis2,
                va: va2,
                add: add2
            },
            frameName: frameName,
            framePrice: framePrice,
            lensName: lensName,
            lensPrice: lensPrice,
            totalAmount: totalAmount,
            advanceAmout: advanceAmount,
            balanceAmout: balAmount,
            expectedDeliveryDate: expectDate,
            status: status
        }).then(res => {
            console.log(res);
            setShow3(false)
            setLoading2(false)
            setTst1(true)
            setTimeout(() => {
                setTst1(false)
            }, 2500);
        }).catch(()=>{
            setLoading2(false)
        })
    }



    const { isAuthenticated, toggleAuthentication } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return (
        <div className="order-management">
            <div className="add-new">
                <h2>Order Management</h2>
                <button style={{ color: "#fff" }} onClick={handleShow3}>Add New Order</button>
            </div>
            <Orderlist />
            {loading2 && <div className="loading">
                <img src={load} alt="" />
            </div>}
            <div className="tst" style={{ opacity: tst1 ? "1" : "0", pointerEvents: tst1 ? "all" : "none" }}>
                <div className="tstMsg"><img src={tick} alt="" />
                    <span>Your inquery submitted Successfully.</span>
                    <div className={tst1 ? "loadBtm active" : "loadBtm"}></div>
                </div>
            </div>








            <Modal show={show3} onHide={handleClose3} className="modalSpecial">
                <Modal.Header closeButton>
                    <Modal.Title>Add New Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="modal-form bigform" onSubmit={submitHandle}>
                        <input type="text" placeholder="Order ID" value={orderId} onChange={e => setOrderId(e.target.value)} />
                        <input type="text" placeholder="Customer Name" value={cusName} onChange={e => setCusName(e.target.value)} />
                        <input type="text" placeholder="Customer Address" value={cusAddress} onChange={e => setCusAddress(e.target.value)} />
                        <input type="text" placeholder="Customer Emain" value={cusEmail} onChange={e => setCusEmail(e.target.value)} />
                        <input type="text" placeholder="Contact Number" value={cusContactNum} onChange={e => setCusContactNum(e.target.value)} />
                        <div className="input-box">
                            <p>Order Date</p>
                            <input type="date" placeholder="Order Date" value={orderDate} onChange={e => setOrderDate(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <p>Date Of Birth</p>
                            <input type="date" placeholder="Date Of Birth" value={cusDob} onChange={e => setCusDob(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <p>Anniversary Date</p>
                            <input type="date" placeholder="Anniversary Date" value={cusAnni} onChange={e => setCusAnni(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <p>Expected Delivery Date</p>
                            <input type="date" placeholder="Expected Delivery Date" value={expectDate} onChange={e => setExpectDate(e.target.value)} />
                        </div>
                        <input type="text" placeholder="Frame Name" value={frameName} onChange={e => setFrameName(e.target.value)} />
                        <input type="text" placeholder="Frame Price" value={framePrice} onChange={e => setFramePrice(e.target.value)} />
                        <div className="left-right">
                            <div className="or-left">
                                <span>Left</span>
                                <div className="left-rightWrap">
                                    <div className="single-left">
                                        <label htmlFor="sphere">Sphere</label>
                                        <input type="text" value={sp1} onChange={e => setSp1(e.target.value)} />
                                    </div>
                                    <div className="single-left">
                                        <label htmlFor="cylinder">Cylinder</label>
                                        <input type="text" value={cylinder1} onChange={e => setCylinder1(e.target.value)} />
                                    </div>
                                    <div className="single-left">
                                        <label htmlFor="axis">Axis</label>
                                        <input type="text" value={axis1} onChange={e => setAxis1(e.target.value)} />
                                    </div>
                                    <div className="single-left">
                                        <label htmlFor="va">Va</label>
                                        <input type="text" value={va1} onChange={e => setVa1(e.target.value)} />
                                    </div>
                                    <div className="single-left">
                                        <label htmlFor="add">Add</label>
                                        <input type="text" value={add1} onChange={e => setAdd1(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="or-left">
                                <span>Right</span>
                                <div className="left-rightWrap">
                                    <div className="single-left">
                                        <input type="text" value={sp2} onChange={e => setSp2(e.target.value)} />
                                    </div>
                                    <div className="single-left">
                                        <input type="text" value={cylinder2} onChange={e => setCylinder2(e.target.value)} />
                                    </div>
                                    <div className="single-left">
                                        <input type="text" value={axis2} onChange={e => setAxis2(e.target.value)} />
                                    </div>
                                    <div className="single-left">
                                        <input type="text" value={va2} onChange={e => setVa2(e.target.value)} />
                                    </div>
                                    <div className="single-left">
                                        <input type="text" value={add2} onChange={e => setAdd2(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="text" placeholder="Lense Name" value={lensName} onChange={e => setLensName(e.target.value)} />
                        <input type="text" placeholder="Lense Price" value={lensPrice} onChange={e => setLensPrice(e.target.value)} />
                        <input type="text" placeholder="Total Amount" value={totalAmount} onChange={e => setTotalAmount(e.target.value)} />
                        <input type="text" placeholder="Advance Amount" value={advanceAmount} onChange={e => setAdvanceAmount(e.target.value)} />
                        <input type="text" placeholder="Balance Amount" value={balAmount} onChange={e => setBalAmount(e.target.value)} />
                        <input type="text" placeholder="Status" value={status} onChange={e => setStatus(e.target.value)} />
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


export default OrderManagement
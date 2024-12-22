import React, { useEffect, useState } from "react";
import '../components/styles/ordermanagement.css'
import d from '../images/edit.png'
import e from '../images/delete.png'
import load from '../images/load.png'
import tick from '../images/checkmark.png'

import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import leftArrow from '../images/left-arrow.png'
import rightArrow from '../images/right-arrow.png'

const Orderlist = () => {
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(false)
    const [tst1, setTst1] = useState(false)
    const [tst2, setTst2] = useState(false)
    const [tst3, setTst3] = useState(false)

    const [show3, setShow3] = useState(false);
    const [show2, setShow2] = useState(false);

    const [file, setFile] = useState()
    const [singleId, setSingleId] = useState("")
    const handleClose2 = () => setShow2(false);
    const handleClose3 = () => setShow3(false);




    const [storeId, setStoreId] = useState("")

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

    const [content, setContent] = useState([])
    const [contentHold, setContentHold] = useState([])
    const [pageCount, setPageCount] = useState(1)


    const handleShow3 = (id) => {
        setSingleId(id)
        setShow3(true)
        setLoading2(true)
        axios.get(`${process.env.REACT_APP_GET_ORDER_BYID_API}/${id}`).then(res => {
            console.log(res.data);
            setOrderId(res.data.orderId)
            setOrderDate(res.data.orderDate)
            setCusName(res.data.customerName)
            setCusAddress(res.data.customerAddress)
            setCusDob(res.data.customerDOB)
            setCusEmail(res.data.customerEmail)
            setCusContactNum(res.data.customerContactNumber)
            setCusAnni(res.data.customerAnniversary)
            setSp1(res.data.leftEyePrescription.sphere)
            setCylinder1(res.data.leftEyePrescription.cylinder)
            setAxis1(res.data.leftEyePrescription.axis)
            setVa1(res.data.leftEyePrescription.va)
            setAdd1(res.data.leftEyePrescription.add)
            setSp2(res.data.rightEyePrescription.sphere)
            setCylinder2(res.data.rightEyePrescription.cylinder)
            setAxis2(res.data.rightEyePrescription.axis)
            setVa2(res.data.rightEyePrescription.va)
            setAdd2(res.data.rightEyePrescription.add)
            setFrameName(res.data.frameName)
            setFramePrice(res.data.framePrice)
            setLensName(res.data.lensName)
            setLensPrice(res.data.lensPrice)
            setTotalAmount(res.data.totalAmount)
            setAdvanceAmount(res.data.advanceAmount)
            setBalAmount(res.data.balanceAmout)
            setExpectDate(res.data.expectedDeliveryDate)
            setStatus(res.data.status)

            setLoading2(false)
        }).catch(() => {
            setLoading2(false)
        })

    }


    const submitHandle = (e) => {
        e.preventDefault()
        setLoading2(true)
        axios.put(`${process.env.REACT_APP_UPDATE_ORDER_API}/${singleId}`, {
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
        }).then(() => {
            axios.get(process.env.REACT_APP_GET_ALL_REPORTS_API).then(res => {
                console.log(res.data);
                setContent(res.data)
                setContentHold(res.data)
                setShow3(false)
                setLoading2(false)
                setTst1(true)
                setTimeout(() => {
                    setTst1(false)
                }, 2500);
            }).catch(err => {
                console.log(err);
                setLoading2(false)
            })
        }).catch(() => {
            setLoading2(false)
        })
    }

    const handleDel = (id) => {
        setStoreId(id)
        setShow2(true)
    }

    const delOrder = () => {
        setLoading2(true)
        axios.delete(`${process.env.REACT_APP_DELETE_ORDER_API}/${storeId}`).then(res => {
            axios.get(process.env.REACT_APP_GET_ALL_ORDERS_API).then(res => {
                console.log(res.data);
                setContent(res.data)
                setContentHold(res.data)
                setShow2(false)
                setLoading2(false)
                setTst2(true)
                setTimeout(() => {
                    setTst2(false)
                }, 2500);
            }).catch(err => {
                console.log(err);
                setLoading2(false)
            })
        })
    }


    function handleCsvImp() {
        setLoading2(true)
        const formData = new FormData()
        formData.append('file', file)
        axios.post(process.env.REACT_APP_CREATE_ORDER_CSV_API, formData).then(res => {
            axios.get(process.env.REACT_APP_GET_ALL_ORDERS_API).then(res => {
                console.log(res.data);
                setContent(res.data)
                setContentHold(res.data)
                setLoading2(false)
                setTst3(true)
                setTimeout(() => {
                    setTst3(false)
                }, 2500);
            }).catch(err => {
                setLoading2(false)
                console.log(err);
            })
        })
    }



    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = contentHold.slice(firstIndex, lastIndex);
    const npage = Math.ceil(content.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)



    function perPage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changeCPage(id) {
        setCurrentPage(id)
    }

    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }






    useEffect(() => {

        axios.get(process.env.REACT_APP_GET_ALL_ORDERS_API).then(res => {
            console.log(res.data);
            setContent(res.data)
            setContentHold(res.data)
            setLoading(false)
        }).catch(err => {
            console.log(err);
            setLoading(false)
        })

    }, [])





    const handleSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();

        const filtered = content.filter(item => {
            const lowerCasecustomerName = item.customerName.toLowerCase();
            const lowerCasecustomerAddress = item.customerAddress.toLowerCase();
            const lowerCaseframeName = item.frameName.toLowerCase();

            // Perform search only if the query is non-empty,
            // otherwise, show all items
            if (lowerCaseQuery.trim() === '') {
                return true; // Display all items
            }

            return (
                lowerCasecustomerName.includes(lowerCaseQuery) ||
                lowerCasecustomerAddress.includes(lowerCaseQuery) ||
                lowerCaseframeName.includes(lowerCaseQuery)
            );
        });

        setContentHold(filtered);
    };
    console.log(content);

    const pageIncrement = () => {
        console.log(pageCount);
        setPageCount(prev => prev + 1)
        const pageCountInsider = pageCount + 1
        const countCalcutate = (pageCountInsider - 1) * 10
        const copyOfContent = [...content];
        const cutContent = copyOfContent.splice(countCalcutate, 10)
        setContentHold(cutContent)
    }
    const pageDecrement = () => {
        if (pageCount <= 1) {
            return
        }
        console.log(pageCount);
        setPageCount(prev => prev - 1)
        const pageCountInsider = pageCount - 1
        const countCalcutate = (pageCountInsider - 1) * 10
        const copyOfContent = [...content];
        const cutContent = copyOfContent.splice(countCalcutate, 10)
        setContentHold(cutContent)
    }






    return (
        <div className="main-order">
            <div className="upload-order">
                <h2>Orders</h2>
                <div className="csvUp">
                    <input type="file" accept=".csv" onChange={e => setFile(e.target.files[0])} />
                    <Button onClick={handleCsvImp}>Import File</Button>
                </div>
            </div>
            <div className="contact-form">
                <form>
                    <input type="text" placeholder="Search Orders..." onChange={e => handleSearch(e.target.value)} />
                </form>
            </div>
            <div className="contact-data">
                <table cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Order Date</th>
                            <th>Customer Name</th>
                            <th>Location</th>
                            <th>Total Amount</th>
                            <th>Status Order</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            records && records.map((val, i) => {
                                return (
                                    <tr key={i}>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.orderId}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.orderDate}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.customerName}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.customerAddress}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.totalAmount}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.status}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>
                                            <div className="deleters dfhdfjn">
                                                <button><img className="blue" src={d} alt="" onClick={() => handleShow3(val.orderId)} /></button>
                                                <button><img className="blur" src={e} alt="" onClick={() => handleDel(val.orderId)} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    {loading && <img src={load} alt="" className="spin" />}
                </table>
                {loading2 && <div className="loading">
                    <img src={load} alt="" />
                </div>}
                <div className="tst" style={{ opacity: tst1 ? "1" : "0", pointerEvents: tst1 ? "all" : "none" }}>
                    <div className="tstMsg"><img src={tick} alt="" />
                        <span>Your inquery submitted Successfully.</span>
                        <div className={tst1 ? "loadBtm active" : "loadBtm"}></div>
                    </div>
                </div>
                <div className="tst" style={{ opacity: tst2 ? "1" : "0", pointerEvents: tst2 ? "all" : "none" }}>
                    <div className="tstMsg"><img src={tick} alt="" />
                        <span>Your inquery submitted Successfully.</span>
                        <div className={tst2 ? "loadBtm active" : "loadBtm"}></div>
                    </div>
                </div>
                <div className="tst" style={{ opacity: tst3 ? "1" : "0", pointerEvents: tst3 ? "all" : "none" }}>
                    <div className="tstMsg"><img src={tick} alt="" />
                        <span>Your inquery submitted Successfully.</span>
                        <div className={tst3 ? "loadBtm active" : "loadBtm"}></div>
                    </div>
                </div>

                {/* <nav>
                    <ul className="pagination">
                        <li className="page-item">
                            <Link className="page-link" to={"#"} onClick={perPage}>Prev</Link>
                        </li>

                        {
                            numbers && numbers.map((n, i) => {
                                return <li className={`page-item ${currentPage === n ? "active" : ""}`} key={i}>
                                    <Link className="page-link" href="#" onClick={() => changeCPage(n)}>{n}</Link>
                                </li>
                            })
                        }

                        <li className="page-item">
                            <Link className="page-link" href="#" onClick={nextPage}>Next</Link>
                        </li>
                    </ul>
                </nav> */}
                {
                    contentHold.length > 0 &&
                    <div className="pageWrap">
                        <span onClick={pageDecrement}><img src={leftArrow} alt="" /></span>
                        <span>{pageCount}</span>
                        <span onClick={pageIncrement}><img src={rightArrow} alt="" /></span>
                    </div>
                }
            </div>



            <Modal show={show3} onHide={handleClose3} className="modalSpecial">
                <Modal.Header closeButton>
                    <Modal.Title>Update Order</Modal.Title>
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
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="delete-wraop">
                        <button className="delete-operation" onClick={delOrder}>Delete</button>
                        <button className="delete-operation" onClick={() => setShow2(false)}>Cancel</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )


}


export default Orderlist
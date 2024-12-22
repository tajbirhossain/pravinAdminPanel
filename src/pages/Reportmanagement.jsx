import React, { useState } from "react";
import '../components/styles/reportmanagement.css'
import Singlereportmanagement from "../components/Singlereportmanage";
import { Button, Modal } from "react-bootstrap";
import { useAuth } from "../components/AuthContext";
import { Navigate } from "react-router-dom";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import load from '../images/load.png'
import tick from '../images/checkmark.png'

const Reportmanagement = () => {
    const [loading2, setLoading2] = useState(false)
    const [tst1, setTst1] = useState(false)

    const { isAuthenticated, toggleAuthentication } = useAuth();


    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);


    const [textboxone, setTextboxone] = useState('')
    const [textboxtwo, setTextboxtwo] = useState('')
    const [repId, setRepId] = useState("")
    const [repTitle, setRepTitle] = useState("")
    const [repPage, setRepPage] = useState("")
    const [priceSingle, setPriceSingle] = useState("")
    const [priceMulti, setPriceMulti] = useState("")
    const [corporate, setCorporate] = useState("")
    const [enterprice, setEnterprice] = useState("")
    const [repDate, setRepDate] = useState("")
    const [publisedBy, setPublisedBy] = useState("")
    const [continents, setContinents] = useState("")
    const [region, setRegion] = useState("")
    const [repSubCat, setRepSubCat] = useState("")
    const [sequence, setSequence] = useState(0)
    const [rating, setRating] = useState("")
    const [startdate, setStartdate] = useState("")
    const [lastdate, setLastdate] = useState("")
    const [category, setCategory] = useState("All Category")
    const [country, setCountry] = useState("India")
    const [modifiedDate, setModifiedDate] = useState("")


    const subForm = (e) => {
        e.preventDefault()
        setLoading2(true)

        // Get the current date
        const currentDate = new Date();

        // Format the date components
        const year = currentDate.getUTCFullYear();
        const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getUTCDate()).padStart(2, '0');
        const hours = String(currentDate.getUTCHours()).padStart(2, '0');
        const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');
        const milliseconds = String(currentDate.getUTCMilliseconds()).padStart(3, '0');

        // Construct the formatted date string
        const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
        function dateFormat(date) {
            const originalDateStr = date;
            const iso8601Date = new Date(originalDateStr + "T00:00:00.000Z");
            const iso8601String = iso8601Date.toISOString();
            return iso8601String
        }
        let dateRep = repDate && dateFormat(repDate)
        let dateStart = startdate && dateFormat(startdate)
        let dateLast = lastdate && dateFormat(lastdate)


        axios.post(process.env.REACT_APP_CREATE_REPORTS_API, { reportId: repId, reportTitle: repTitle, reportCategory: category, reportPages: repPage, priceForSingleUser: priceSingle, priceForMultiUser: priceMulti, publishedOn: dateRep, reportDescription: textboxone, reportTableOfContent: textboxtwo, publishedBy: publisedBy, country: country, continents: continents, region: region, reportSubCategory: repSubCat, sequence: Number(sequence), priceForCorporateUser: corporate, editorRating: rating, startDate: dateStart, endDate: dateLast, priceForEnterpriseUser: enterprice, modifiedDate: String(formattedDate), isActive: true }).then(res => {
            setShow3(false)
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
        <div className="report-management">
            <div className="add-new fhdfdkjfhj">
                <h2>Report Management</h2>
                <button style={{ color: "#fff" }} onClick={handleShow3}>Add New Report</button>
            </div>
            <Singlereportmanagement />
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
                    <Modal.Title>Add New Report</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="modal-form bigform" onSubmit={e => subForm(e)}>
                        <input type="text" placeholder="Report ID" value={repId} onChange={e => setRepId(e.target.value)} />
                        <input type="text" placeholder="Report Title" value={repTitle} onChange={e => setRepTitle(e.target.value)} />
                        <input type="text" placeholder="Report Pages" value={repPage} onChange={e => setRepPage(e.target.value)} />
                        <input type="text" placeholder="Price For Single Users" value={priceSingle} onChange={e => setPriceSingle(e.target.value)} />
                        <input type="text" placeholder="Price For Multi Users" value={priceMulti} onChange={e => setPriceMulti(e.target.value)} />
                        <input type="text" placeholder="Price For Corporate Users" value={corporate} onChange={e => setCorporate(e.target.value)} />
                        <input type="text" placeholder="Price For Enterprice Users" value={enterprice} onChange={e => setEnterprice(e.target.value)} />
                        <div className="input-box">
                            <p>Published On</p>
                            <input type="date" placeholder="Published On" value={repDate} onChange={e => setRepDate(e.target.value)} />
                        </div>
                        <input type="text" placeholder="Published By" value={publisedBy} onChange={e => setPublisedBy(e.target.value)} />
                        <input type="text" placeholder="Continents" value={continents} onChange={e => setContinents(e.target.value)} />
                        <input type="text" placeholder="Region" value={region} onChange={e => setRegion(e.target.value)} />
                        <input type="text" placeholder="Report Sub Category" value={repSubCat} onChange={e => setRepSubCat(e.target.value)} />
                        <input type="number" placeholder="Sequence" value={sequence} onChange={e => setSequence(e.target.value)} />
                        <input type="text" placeholder="Editor Ratings" value={rating} onChange={e => setRating(e.target.value)} />
                        <div className="input-box">
                            <p>Start Date</p>
                            <input type="date" placeholder="Start Date" value={startdate} onChange={e => setStartdate(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <p>Last Date</p>
                            <input type="date" placeholder="Last Date" value={lastdate} onChange={e => setLastdate(e.target.value)} />
                        </div>
                        <div className="quil-wrap">
                            <p>Report Decsription</p>
                            <ReactQuill className="quil" theme="snow" value={textboxone} onChange={setTextboxone} />
                        </div>
                        <div className="quil-wrap">
                            <p>Table Of Content</p>
                            <ReactQuill className="quil" theme="snow" value={textboxtwo} onChange={setTextboxtwo} />
                        </div>
                        <div className="form-group">
                            <p>Report Category</p>
                            <select name="category" id="category" value={category} onChange={e => setCategory(e.target.value)}>
                                <option value="All Category">All Category</option>
                                <option value="Sub Category">Sub Category</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <p>Country</p>
                            <select name="country" id="country" value={country} onChange={e => setCountry(e.target.value)}>
                                <option value="India">India</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="USA">USA</option>
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

export default Reportmanagement
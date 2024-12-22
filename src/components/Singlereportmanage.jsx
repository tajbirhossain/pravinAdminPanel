import React, { useEffect, useState } from "react";
import '../components/styles/reportmanagement.css'
import d from '../images/edit.png'
import e from '../images/delete.png'
import tick from '../images/checkmark.png'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import load from '../images/load.png'

const Singlereportmanagement = () => {
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(false)
    const [tst1, setTst1] = useState(false)
    const [tst2, setTst2] = useState(false)
    const [tst3, setTst3] = useState(false)

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [singleId, setSingleId] = useState("")
    const [file, setFile] = useState()


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

    const [mainId, setMainId] = useState("")

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = (id, main) => {
        setSingleId(id)
        setMainId(main)
        setShow(true)
        setLoading2(true)
        // console.log(id);
        axios.get(`${process.env.REACT_APP_GET_REPORT_BYID_API}?ReportId=${id}`).then(res => {
            function dateFormat(date) {
                const iso8601DateStr = date;
                const iso8601Date = new Date(iso8601DateStr);
                const year = iso8601Date.getFullYear();
                const month = String(iso8601Date.getMonth() + 1).padStart(2, "0");
                const day = String(iso8601Date.getDate()).padStart(2, "0");
                const formattedDate = `${year}-${month}-${day}`;
                return formattedDate
            }
            console.log(res.data);
            const repChange = dateFormat(res.data.publishedOn)
            const startChange = dateFormat(res.data.startDate)
            const lastChange = dateFormat(res.data.endDate)

            res.data.reportId && setRepId(res.data.reportId)
            res.data.reportTitle && setRepTitle(res.data.reportTitle)
            res.data.reportCategory && setCategory(res.data.reportCategory)
            res.data.reportPages && setRepPage(res.data.reportPages)
            res.data.priceForSingleUser && setPriceSingle(res.data.priceForSingleUser)
            res.data.priceForMultiUser && setPriceMulti(res.data.priceForMultiUser)
            repChange && setRepDate(repChange)
            res.data.reportDescription && setTextboxone(res.data.reportDescription)
            res.data.reportTableOfContent && setTextboxtwo(res.data.reportTableOfContent)
            res.data.publishedBy && setPublisedBy(res.data.publishedBy)
            res.data.country && setCountry(res.data.country)
            res.data.continents && setContinents(res.data.continents)
            res.data.region && setRegion(res.data.region)
            res.data.reportSubCategory && setRepSubCat(res.data.reportSubCategory)
            res.data.sequence && setSequence(res.data.sequence)
            res.data.priceForCorporateUser && setCorporate(res.data.priceForCorporateUser)
            res.data.editorRating && setRating(res.data.editorRating)
            startChange && setStartdate(startChange)
            lastChange && setLastdate(lastChange)
            res.data.priceForEnterpriseUser && setEnterprice(res.data.priceForEnterpriseUser)
            res.data.modifiedDate && setModifiedDate(res.data.modifiedDate)
            console.log(lastChange);

            setLoading2(false)
        }).catch(err => {
            setLoading2(false)
        })
    };
    const handleClose2 = () => setShow2(false);
    const handleShow2 = (id) => {
        setSingleId(id)
        setShow2(true)
    };





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
        // { id: mainId, reportId: repId, reportTitle: repTitle, reportCategory: category, reportPages: repPage,
        //  priceForSingleUser: priceSingle, priceForMultiUser: priceMulti, publishedOn: dateRep, reportDescription: textboxone,
        //  reportTableOfContent: textboxtwo, publishedBy: publisedBy, country: country, continents: continents, region: region,
        //  reportSubCategory: repSubCat, sequence: Number(sequence), priceForCorporateUser: corporate, editorRating: rating,
        //  startDate: dateStart, endDate: dateLast, priceForEnterpriseUser: enterprice, modifiedDate: String(formattedDate) }

        axios.put(process.env.REACT_APP_UPDATE_REPORT_API, {
            reportId: singleId,
            reportTitle: repTitle,
            reportCategory: category,
            reportPages: repPage,
            priceForSingleUser: priceSingle,
            priceForMultiUser: priceMulti,
            publishedOn: dateRep,
            reportDescription: textboxone,
            reportTableOfContent: textboxtwo,
            publishedBy: publisedBy,
            country: country,
            continents: continents,
            region: region,
            reportSubCategory: repSubCat,
            sequence: Number(sequence),
            priceForCorporateUser: corporate,
            modifiedDate: String(formattedDate),
            editorRating: rating,
            priceForEnterpriseUser: enterprice,
            startDate: dateStart,
            endDate: dateLast,
            isActive: true
        }).then(res => {
            console.log(res.data);
            setShow(false)
            setLoading2(false)
            setTst1(true)
            setTimeout(() => {
                setTst1(false)
            }, 2500);
        }).catch(err => {
            setLoading2(false)
        })

        console.log(mainId);

    }


    function handleDelete() {
        setLoading2(true)
        axios.delete(`${process.env.REACT_APP_DELETE_REPORT_API}/${singleId}`).then(res => {
            console.log(res);
            setShow2(false)
            setLoading2(false)
            setTst2(true)
            setTimeout(() => {
                setTst2(false)
            }, 2500);
        }).catch(err => {
            setLoading2(false)
        })
    }

    function handleCsvImp() {
        setLoading2(true)
        const formData = new FormData()
        formData.append('file', file)
        axios.post(process.env.REACT_APP_CREATE_REPORTS_CSV_API, formData).then(() => {
            axios.get(process.env.REACT_APP_GET_LIMITED_REPORTS_API).then(res => {
                setContent(res.data.reports)
                setContentHold(res.data.reports)
                console.log(res.data.reports);
                setLoading2(false)
                setTst3(true)
                setTimeout(() => {
                    setTst3(false)
                }, 2500);
            }).catch(err => {
                console.log(err);
                setLoading2(false)
            })
        }).catch(err => {
            setLoading2(false)
        })
        console.log(file);
    }







    const [content, setContent] = useState([])
    const [contentHold, setContentHold] = useState([])




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

        axios.get(process.env.REACT_APP_GET_LIMITED_REPORTS_API).then(res => {
            setContent(res.data.reports)
            setContentHold(res.data.reports)
            console.log(res.data.reports);
            setLoading(false)
        }).catch(err => {
            console.log(err);
            setLoading(false)
        })

    }, [])



    const handleSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();

        const filtered = content.filter(item => {
            const lowerCaseReportSubCategory = item.reportSubCategory.toLowerCase();
            const lowerCaseReportCategory = item.reportCategory.toLowerCase();
            const lowerCaseTitle = item.reportTitle.toLowerCase();

            // Perform search only if the query is non-empty,
            // otherwise, show all items
            if (lowerCaseQuery.trim() === '') {
                return true; // Display all items
            }

            return (
                lowerCaseReportSubCategory.includes(lowerCaseQuery) ||
                lowerCaseReportCategory.includes(lowerCaseQuery) ||
                lowerCaseTitle.includes(lowerCaseQuery)
            );
        });

        setContentHold(filtered);
    };




    return (
        <div className="report-management">
            <div className="upload-order">
                <h2>Reports</h2>
                <div className="csvUp">
                    <input type="file" accept=".csv" onChange={e => setFile(e.target.files[0])} />
                    <Button onClick={handleCsvImp}>Import File</Button>
                </div>
            </div>
            <div className="contact-form">
                <form>
                    <input type="text" placeholder="Search Reports..." onChange={e => handleSearch(e.target.value)} />
                </form>
            </div>
            <div className="reportmanage-wrap">
                <div className="contact-data">
                    <table cellSpacing="0" cellPadding="0">
                        <thead>
                            <tr>
                                <th>Report ID</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Sub Category</th>
                                <th>Report Pages</th>
                                <th>Price Single User</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                records && records.map((val, i) => {
                                    return (
                                        <tr key={i}>
                                            <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.reportId}</td>
                                            <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.reportTitle}</td>
                                            <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.reportCategory}</td>
                                            <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.reportSubCategory}</td>
                                            <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.reportPages}</td>
                                            <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.priceForSingleUser}</td>
                                            <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>
                                                <div className="deleters dfhdfjn">
                                                    <button onClick={() => handleShow(val.reportId, val.id)}><img className="blue" src={d} alt="" /></button>
                                                    <button onClick={() => handleShow2(val.id)}><img className="blur" src={e} alt="" /></button>
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
                    <nav className="mainNav">
                        <ul className="pagination singlePage">
                            <li className="page-item">
                                <Link className="page-link" to={"#"} onClick={perPage}>Prev</Link>
                            </li>
                            <div className="pagWrap">
                                <ul>

                                    {
                                        numbers && numbers.map((n, i) => {
                                            return <li className={`page-item ${currentPage === n ? "active" : ""}`} key={i}>
                                                <Link className="page-link" href="#" onClick={() => changeCPage(n)}>{n}</Link>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>

                            <li className="page-item">
                                <Link className="page-link" href="#" onClick={nextPage}>Next</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>


            <Modal show={show} onHide={handleClose} className="modalSpecial">
                <Modal.Header closeButton>
                    <Modal.Title>Update Report</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="modal-form bigform" onSubmit={e => subForm(e)}>
                        {/* <input type="text" placeholder="Report ID" value={repId} onChange={e => setRepId(e.target.value)} /> */}
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
                        <button>Update</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Report</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="delete-wraop">
                        <button className="delete-operation" onClick={handleDelete}>Delete</button>
                        <button className="delete-operation" onClick={handleClose2}>Cancel</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Singlereportmanagement
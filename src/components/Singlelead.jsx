import React, { useEffect, useState } from 'react'
import '../components/styles/leadmanagement.css'
import a from '../images/search.png'

import d from '../images/delete.png'
import e from '../images/edit.png'

import { Modal, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Singlelead = () => {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    const [content, setContent] = useState([])



    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = content.slice(firstIndex, lastIndex);
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

        setContent([
            {
                reportId: "3",
                inquiryType: "Request for Sample Enquiry",
                date: "6 March 2023",
                customername: "Emma Adams",
                mobile: "+91 (070) 123-4567",
                email: "adams@mail.com",
                company: "Emma IT",
                destination: "London",
                description: "Test 1",
            },
            {
                reportId: "3",
                inquiryType: "Request for Sample Enquiry",
                date: "6 March 2023",
                customername: "Emma Adams",
                mobile: "+91 (070) 123-4567",
                email: "adams@mail.com",
                company: "Emma IT",
                destination: "London",
                description: "Test 1",
            },
            {
                reportId: "3",
                inquiryType: "Request for Sample Enquiry",
                date: "6 March 2023",
                customername: "Emma Adams",
                mobile: "+91 (070) 123-4567",
                email: "adams@mail.com",
                company: "Emma IT",
                destination: "London",
                description: "Test 1",
            },
            {
                reportId: "3",
                inquiryType: "Request for Sample Enquiry",
                date: "6 March 2023",
                customername: "Emma Adams",
                mobile: "+91 (070) 123-4567",
                email: "adams@mail.com",
                company: "Emma IT",
                destination: "London",
                description: "Test 1",
            },
            {
                reportId: "3",
                inquiryType: "Request for Sample Enquiry",
                date: "6 March 2023",
                customername: "Emma Adams",
                mobile: "+91 (070) 123-4567",
                email: "adams@mail.com",
                company: "Emma IT",
                destination: "London",
                description: "Test 1",
            },
            {
                reportId: "3",
                inquiryType: "Request for Sample Enquiry",
                date: "6 March 2023",
                customername: "Emma Adams",
                mobile: "+91 (070) 123-4567",
                email: "adams@mail.com",
                company: "Emma IT",
                destination: "London",
                description: "Test 1",
            },
            {
                reportId: "3",
                inquiryType: "Request for Sample Enquiry",
                date: "6 March 2023",
                customername: "Emma Adams",
                mobile: "+91 (070) 123-4567",
                email: "adams@mail.com",
                company: "Emma IT",
                destination: "London",
                description: "Test 1",
            },
            {
                reportId: "3",
                inquiryType: "Request for Sample Enquiry",
                date: "6 March 2023",
                customername: "Emma Adams",
                mobile: "+91 (070) 123-4567",
                email: "adams@mail.com",
                company: "Emma IT",
                destination: "London",
                description: "Test 1",
            },
            {
                reportId: "3",
                inquiryType: "Request for Sample Enquiry",
                date: "6 March 2023",
                customername: "Emma Adams",
                mobile: "+91 (070) 123-4567",
                email: "adams@mail.com",
                company: "Emma IT",
                destination: "London",
                description: "Test 1",
            },
            {
                reportId: "3",
                inquiryType: "Request for Sample Enquiry",
                date: "6 March 2023",
                customername: "Emma Adams",
                mobile: "+91 (070) 123-4567",
                email: "adams@mail.com",
                company: "Emma IT",
                destination: "London",
                description: "Test 1",
            },
            {
                reportId: "3",
                inquiryType: "Request for Sample Enquiry",
                date: "6 March 2023",
                customername: "Emma Adams",
                mobile: "+91 (070) 123-4567",
                email: "adams@mail.com",
                company: "Emma IT",
                destination: "London",
                description: "Test 1",
            },
            {
                reportId: "3",
                inquiryType: "Request for Sample Enquiry",
                date: "6 March 2023",
                customername: "Emma Adams",
                mobile: "+91 (070) 123-4567",
                email: "adams@mail.com",
                company: "Emma IT",
                destination: "London",
                description: "Test 1",
            },
            {
                reportId: "3",
                inquiryType: "Request for Sample Enquiry",
                date: "6 March 2023",
                customername: "Emma Adams",
                mobile: "+91 (070) 123-4567",
                email: "adams@mail.com",
                company: "Emma IT",
                destination: "London",
                description: "Test 1",
            },
            {
                date: "6 March 2023",
                customername: "Emma Adams",
                mobile: "+91 (070) 123-4567",
                email: "adams@mail.com",
                company: "Emma IT",
                destination: "London",
                description: "Test 1",
            },
            {
                reportId: "3",
                inquiryType: "Request for Sample Enquiry",
                date: "6 March 2023",
                customername: "Emma Adams",
                mobile: "+91 (070) 123-4567",
                email: "adams@mail.com",
                company: "Emma IT",
                destination: "London",
                description: "Test 1",
            },
        ])
    }, [])


    return (
        <div className="contract-wrap">
            <div className="contact-form">
                <form>
                    <input type="text" placeholder="Search Leads..." />
                </form>
            </div>
            <div className="contact-data">
                <table cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th>Report Id</th>
                            <th>Lead Date</th>
                            <th>Customers</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Company</th>
                            <th>Destination</th>
                            <th>Inquiry Type</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            records && records.map((val, i) => {
                                return (
                                    <tr key={i}>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.reportId}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.date}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.customername}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.mobile}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.email}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.company}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.destination}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.inquiryType}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.description}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>
                                            <div className="deleters">
                                                <button onClick={handleShow}><img className="blue" src={e} alt="" /></button>
                                                <button onClick={handleShow2}><img className="blur" src={d} alt="" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <nav>
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
                </nav>
            </div>





            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="modal-form">
                        <input type="text" placeholder="Lead Date" />
                        <input type="text" placeholder="Customer Name" />
                        <input type="text" placeholder="Email" />
                        <input type="number" placeholder="Mobile" />
                        <input type="text" placeholder="Company Name" />
                        <input type="text" placeholder="Description" />
                        <input type="text" placeholder="Country" />
                        <textarea placeholder="Customers"></textarea>
                        <button>Update</button>
                    </form>
                </Modal.Body>
            </Modal>


            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Hello,you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose2}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Singlelead
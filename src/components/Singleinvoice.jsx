import React, { useEffect, useState } from "react";
import '../components/styles/ordermanagement.css'
import d from '../images/edit.png'
import e from '../images/delete.png'


import a from '../images/search.png'
import { Link } from "react-router-dom";

const Singleinvoice = () => {




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
                invoicenumber: "#45355",
                invoicedate: "6 March 2023",
                customername: "Yren Yeager",
                invoiceamount: "$5000",
                customercontact: "+91 (070) 123-4567",
                Status: "Paid"
            },
            {
                invoicenumber: "#45355",
                invoicedate: "6 March 2023",
                customername: "Yren Yeager",
                invoiceamount: "$5000",
                customercontact: "+91 (070) 123-4567",
                Status: "Paid"
            },
            {
                invoicenumber: "#45355",
                invoicedate: "6 March 2023",
                customername: "Yren Yeager",
                invoiceamount: "$5000",
                customercontact: "+91 (070) 123-4567",
                Status: "Paid"
            },
            {
                invoicenumber: "#45355",
                invoicedate: "6 March 2023",
                customername: "Yren Yeager",
                invoiceamount: "$5000",
                customercontact: "+91 (070) 123-4567",
                Status: "Paid"
            },
            {
                invoicenumber: "#45355",
                invoicedate: "6 March 2023",
                customername: "Yren Yeager",
                invoiceamount: "$5000",
                customercontact: "+91 (070) 123-4567",
                Status: "Paid"
            },
            {
                invoicenumber: "#45355",
                invoicedate: "6 March 2023",
                customername: "Yren Yeager",
                invoiceamount: "$5000",
                customercontact: "+91 (070) 123-4567",
                Status: "Paid"
            },
            {
                invoicenumber: "#45355",
                invoicedate: "6 March 2023",
                customername: "Yren Yeager",
                invoiceamount: "$5000",
                customercontact: "+91 (070) 123-4567",
                Status: "Paid"
            },
            {
                invoicenumber: "#45355",
                invoicedate: "6 March 2023",
                customername: "Yren Yeager",
                invoiceamount: "$5000",
                customercontact: "+91 (070) 123-4567",
                Status: "Paid"
            },
            {
                invoicenumber: "#45355",
                invoicedate: "6 March 2023",
                customername: "Yren Yeager",
                invoiceamount: "$5000",
                customercontact: "+91 (070) 123-4567",
                Status: "Paid"
            },
            {
                invoicenumber: "#45355",
                invoicedate: "6 March 2023",
                customername: "Yren Yeager",
                invoiceamount: "$5000",
                customercontact: "+91 (070) 123-4567",
                Status: "Paid"
            },
            {
                invoicenumber: "#45355",
                invoicedate: "6 March 2023",
                customername: "Yren Yeager",
                invoiceamount: "$5000",
                customercontact: "+91 (070) 123-4567",
                Status: "Paid"
            },
            {
                invoicenumber: "#45355",
                invoicedate: "6 March 2023",
                customername: "Yren Yeager",
                invoiceamount: "$5000",
                customercontact: "+91 (070) 123-4567",
                Status: "Paid"
            },
            {
                invoicenumber: "#45355",
                invoicedate: "6 March 2023",
                customername: "Yren Yeager",
                invoiceamount: "$5000",
                customercontact: "+91 (070) 123-4567",
                Status: "Paid"
            },
            {
                invoicenumber: "#45355",
                invoicedate: "6 March 2023",
                customername: "Yren Yeager",
                invoiceamount: "$5000",
                customercontact: "+91 (070) 123-4567",
                Status: "Paid"
            },
            {
                invoicenumber: "#45355",
                invoicedate: "6 March 2023",
                customername: "Yren Yeager",
                invoiceamount: "$5000",
                customercontact: "+91 (070) 123-4567",
                Status: "Paid"
            },
        ])
    }, [])





    return (
        <div className="main-order">
            <div className="contact-form">
                <form>
                    <input type="text" placeholder="Search Invoices..." />
                </form>
            </div>
            <div className="contact-data">
                <table cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th>Invoice Number</th>
                            <th>Invoice Date</th>
                            <th>Customer Name</th>
                            <th>Invoice Amount</th>
                            <th>Customer Contact</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            records && records.map((val, i) => {
                                return (
                                    <tr key={i}>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.invoicenumber}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.invoicedate}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.customername}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.invoiceamount}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.customercontact}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.Status}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>
                                            <div className="deleters dfhdfjn">
                                                <button><img className="blue" src={d} alt="" /></button>
                                                <button><img className="blur" src={e} alt="" /></button>
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
        </div>
    )
}

export default Singleinvoice
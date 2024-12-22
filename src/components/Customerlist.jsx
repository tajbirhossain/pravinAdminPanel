import React, { useEffect, useState } from "react";
import '../components/styles/customers.css'
import a from '../images/search.png'
import { Link } from "react-router-dom";


const Customerlist = () => {




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
                Customerid: "#555234",
                Date: "6 March 2023, 12:42 AM",
                Name: "Yren Yeager",
                Location: "Corner Street 5th London",
                totalspent: "$134.45",
                lastorder: "$14.45"
            },
            {
                Customerid: "#555234",
                Date: "16 March 2023, 12:42 AM",
                Name: "Alex Borish",
                Location: "Corner Street 5th London",
                totalspent: "$1134.45",
                lastorder: "$214.45"
            },
            {
                Customerid: "#555234",
                Date: "6 March 2023, 12:42 AM",
                Name: "Yren Yeager",
                Location: "Corner Street 5th London",
                totalspent: "$134.45",
                lastorder: "$14.45"
            },
            {
                Customerid: "#555234",
                Date: "16 March 2023, 12:42 AM",
                Name: "Alex Borish",
                Location: "Corner Street 5th London",
                totalspent: "$1134.45",
                lastorder: "$214.45"
            },
            {
                Customerid: "#555234",
                Date: "6 March 2023, 12:42 AM",
                Name: "Yren Yeager",
                Location: "Corner Street 5th London",
                totalspent: "$134.45",
                lastorder: "$14.45"
            },
            {
                Customerid: "#555234",
                Date: "16 March 2023, 12:42 AM",
                Name: "Alex Borish",
                Location: "Corner Street 5th London",
                totalspent: "$1134.45",
                lastorder: "$214.45"
            },
            {
                Customerid: "#555234",
                Date: "6 March 2023, 12:42 AM",
                Name: "Yren Yeager",
                Location: "Corner Street 5th London",
                totalspent: "$134.45",
                lastorder: "$14.45"
            },
            {
                Customerid: "#555234",
                Date: "16 March 2023, 12:42 AM",
                Name: "Alex Borish",
                Location: "Corner Street 5th London",
                totalspent: "$1134.45",
                lastorder: "$214.45"
            },
            {
                Customerid: "#555234",
                Date: "6 March 2023, 12:42 AM",
                Name: "Yren Yeager",
                Location: "Corner Street 5th London",
                totalspent: "$134.45",
                lastorder: "$14.45"
            },
            {
                Customerid: "#555234",
                Date: "16 March 2023, 12:42 AM",
                Name: "Alex Borish",
                Location: "Corner Street 5th London",
                totalspent: "$1134.45",
                lastorder: "$214.45"
            },
            {
                Customerid: "#555234",
                Date: "16 March 2023, 12:42 AM",
                Name: "Alex Borish",
                Location: "Corner Street 5th London",
                totalspent: "$1134.45",
                lastorder: "$214.45"
            },
            {
                Customerid: "#555234",
                Date: "16 March 2023, 12:42 AM",
                Name: "Alex Borish",
                Location: "Corner Street 5th London",
                totalspent: "$1134.45",
                lastorder: "$214.45"
            },
        ])
    }, [])



    return (
        <div className="customer-list">
            <div className="main-order">
                <div className="contact-form">
                    <form>
                        <input type="text" placeholder="Search Accounts..." />
                        <button className="button"><img src={a} alt="" /> Search</button>
                    </form>
                </div>
                <div className="contact-data">
                    <table cellSpacing="0" cellPadding="0">
                        <thead>
                            <tr>
                                <th>Customer ID</th>
                                <th>Join Date</th>
                                <th>Customer Name</th>
                                <th>Location</th>
                                <th>Total Spent</th>
                                <th>Last Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                records && records.map((val, i) => {
                                    return (
                                        <tr key={i}>
                                            <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.Customerid}</td>
                                            <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.Date}</td>
                                            <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.Name}</td>
                                            <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.Location}</td>
                                            <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.totalspent}</td>
                                            <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.lastorder}</td>
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
        </div>
    )
}

export default Customerlist
import React, { useEffect, useState } from 'react'
import '../components/styles/contractform.css'

import d from '../images/delete.png'
import e from '../images/edit.png'
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import load from '../images/load.png'
import tick from '../images/checkmark.png'

const Datachart = () => {
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(false)
    const [tst1, setTst1] = useState(false)
    const [tst2, setTst2] = useState(false)


    const [upName, setUpName] = useState("")
    const [upPass, setUpPass] = useState("")
    const [upFirst, setUpFirst] = useState("")
    const [upLast, setUpLast] = useState("")
    const [upMail, setUpMail] = useState("")
    const [upPhone, setUpPhone] = useState("")
    const [upRole, setUpRole] = useState("")
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [userId, setUserId] = useState("")
    const [singleId, setSingleId] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setLoading2(true)
        setUserId(id)
        setUpName("")
        setUpPass("")
        setUpFirst("")
        setUpLast("")
        setUpMail("")
        setUpPhone("")
        setUpRole("")
        setShow(true)
        axios.get(`${process.env.REACT_APP_GET_USER_BYID_API}/${id}`).then(res => {
            setUpName(res.data.username)
            setUpPass(res.data.password)
            setUpFirst(res.data.firstName)
            setUpLast(res.data.lastName)
            setUpMail(res.data.email)
            setUpPhone(res.data.phoneNumber)
            setUpRole(res.data.userRole)

            setLoading2(false)
        }).catch(err => {
            setLoading2(false)
        })
    };
    const handleUpdate = (e) => {
        e.preventDefault()
        setLoading2(true)
        axios.put(`${process.env.REACT_APP_UPDATE_USER_API}/${userId}`, { id: userId, username: upName, password: upPass, email: upMail, firstName: upFirst, lastname: upLast, phoneNumber: upPhone, userRole: upRole }).then(res => {
            axios.get(process.env.REACT_APP_GET_ALL_USERS_API).then(res => {
                console.log(res.data);
                setContent(res.data)
                setContentHold(res.data)
                setShow(false)
                setLoading2(false)
                setTst1(true)
                setTimeout(() => {
                    setTst1(false)
                }, 2500);
            }).catch(err => {
                console.log(err);
                setLoading2(false)
            })
        }).catch(err => {
            setLoading2(false)
        })
    }
    const handleDelete = () => {
        setLoading2(true)
        axios.delete(`${process.env.REACT_APP_DELETE_USER_API}/${userId}`).then(() => {
            axios.get(process.env.REACT_APP_GET_ALL_USERS_API).then(res => {
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
                setLoading2(false)
            })
        }).catch(err => {
            setLoading2(false)
        })
    }
    const handleClose2 = () => setShow2(false);
    const handleShow2 = (id) => {
        setUserId(id)
        setShow2(true);
    }



    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [phone, setPhone] = useState("")
    const [userroll, setUserroll] = useState("Super Admin")



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

        axios.get(process.env.REACT_APP_GET_ALL_USERS_API).then(res => {
            console.log(res.data);
            setContent(res.data)
            setContentHold(res.data)
            setLoading(false)
        }).catch(err => {
            console.log(err);
            setLoading(false)
        })
    }, [])




    // const submitForm = (e) => {
    //     e.preventDefault()
    //     username && password && email && firstname && lastname && phone && userroll && axios.post("https://wadeprav-001-site1.ctempurl.com/api/User/CreateUser", { username: username, password: password, email: email, firstName: firstname, lastName: lastname, phoneNumber: phone, userRole: userroll }).then(res => {
    //         console.log(res);
    //     })
    // }



    const handleSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();

        const filtered = content.filter(item => {
            const lowerCasefirstName = item.firstName.toLowerCase();
            const lowerCaselastName = item.lastName.toLowerCase();
            const lowerCaseusername = item.username.toLowerCase();

            // Perform search only if the query is non-empty,
            // otherwise, show all items
            if (lowerCaseQuery.trim() === '') {
                return true; // Display all items
            }

            return (
                lowerCasefirstName.includes(lowerCaseQuery) ||
                lowerCaselastName.includes(lowerCaseQuery) ||
                lowerCaseusername.includes(lowerCaseQuery)
            );
        });

        setContentHold(filtered);
    };
    console.log(content);






    return (
        <div className="contract-wrap">
            <div className="contact-form">
                <form>
                    <input type="text" placeholder="Search Users..." onChange={e => handleSearch(e.target.value)} />
                </form>
            </div>
            <div className="contact-data">
                <table cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th>User Role</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            records && records.map((val, i) => {
                                return (
                                    <tr key={i}>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.userRole}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.username}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.email}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.firstName}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.lastName}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.phoneNumber}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>
                                            <div className="deleters">
                                                <button onClick={() => handleShow(val.id)}><img className="blue" src={e} alt="" /></button>
                                                <button onClick={() => handleShow2(val.id)}><img className="blur" src={d} alt="" /></button>
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
                <div className="tst" style={{opacity: tst1 ? "1" : "0", pointerEvents: tst1 ? "all" : "none"}}>
                <div className="tstMsg"><img src={tick} alt="" />
                    <span>Your inquery submitted Successfully.</span>
                    <div className={tst1 ? "loadBtm active" : "loadBtm"}></div>
                </div>
            </div>
            <div className="tst" style={{opacity: tst2 ? "1" : "0", pointerEvents: tst2 ? "all" : "none"}}>
                <div className="tstMsg"><img src={tick} alt="" />
                    <span>Your inquery submitted Successfully.</span>
                    <div className={tst2 ? "loadBtm active" : "loadBtm"}></div>
                </div>
            </div>
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
                    <Modal.Title>Update User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="modal-form" onSubmit={e => handleUpdate(e)}>
                        <input type="text" placeholder="User Name" value={upName} onChange={e => setUpName(e.target.value)} />
                        <input type="text" placeholder="Password" value={upPass} onChange={e => setUpPass(e.target.value)} />
                        <input type="text" placeholder="Email" value={upMail} onChange={e => setUpMail(e.target.value)} />
                        <input type="text" placeholder="First Name" value={upFirst} onChange={e => setUpFirst(e.target.value)} />
                        <input type="text" placeholder="Last Name" value={upLast} onChange={e => setUpLast(e.target.value)} />
                        <input type="text" placeholder="Phone Number" value={upPhone} onChange={e => setUpPhone(e.target.value)} />
                        <div className="form-group">
                            <p>User Role</p>
                            <select name="country" id="country" value={upRole} onChange={e => setUpRole(e.target.value)}>
                                <option value="Super Admin">Super Admin</option>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
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
                    <Modal.Title>Delete Confirm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="delete-wraop">
                        <button className="delete-operation" onClick={handleClose2}>Cancel</button>
                        <button className="delete-operation" onClick={handleDelete}>Delete</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Datachart
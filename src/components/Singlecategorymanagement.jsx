import React, { useEffect, useState } from "react";
import '../components/styles/categorymanagement.css'


import { Modal, Button } from "react-bootstrap";
import axios from "axios";


import d from '../images/edit.png'
import e from '../images/delete.png'
import { Link } from "react-router-dom";
import load from '../images/load.png'

import tick from '../images/checkmark.png'

const Singlecategorymanagement = () => {
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(false)
    const [tst1, setTst1] = useState(false)
    const [tst2, setTst2] = useState(false)

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const [catName, setCatName] = useState("")
    const [catDesc, setCatDesc] = useState("")
    const [catImgUrl, setCatImgUrl] = useState("")
    const [catIsDispHome, setCatIsDispHome] = useState("")
    const [itemId, setItemId] = useState("")

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);

    const handleShow = (id) => {
        setItemId(id)
        setShow(true);
        setLoading2(true)
        axios.get(`${process.env.REACT_APP_GET_CATEGORY_BYID_API}/${id}`).then(res => {
            console.log(res);
            setCatName(res.data.categoryName)
            setCatDesc(res.data.description)
            setCatImgUrl(res.data.categoryImageUrl)
            setCatIsDispHome(res.data.isDisplayOnHomePage)
            setLoading2(false)
        }).catch(err => {
            setLoading2(false)
        })
    }
    const handleShow2 = (id) => {
        setShow2(true)
        setItemId(id)
    }

    const subHandle = (e) => {
        e.preventDefault()
        setLoading2(true)
        axios.put(`${process.env.REACT_APP_UPDATE_CATEGORY_API}/${itemId}`, { categoryName: catName, description: catDesc, categoryImageUrl: catImgUrl, isDisplayOnHomePage: catIsDispHome }).then(res => {
            axios.get(process.env.REACT_APP_GET_ALL_CATEGORIES_API).then(res => {
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
                setLoading2(false)
            })
        }).catch(() => {
            setLoading2(false)
        })
    }


    const handleDelete = () => {
        setLoading2(true)
        axios.delete(`${process.env.REACT_APP_DELETE_CATEGORY_API}/${itemId}`).then(() => {
            axios.get(process.env.REACT_APP_GET_ALL_CATEGORIES_API).then(res => {
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

        axios.get(process.env.REACT_APP_GET_ALL_CATEGORIES_API).then(res => {
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
            const lowerCasecategoryName = item.categoryName.toLowerCase();
            const lowerCasedescription = item.description.toLowerCase();
            const lowerCaseisDisplayOnHomePage = item.isDisplayOnHomePage.toLowerCase();

            // Perform search only if the query is non-empty,
            // otherwise, show all items
            if (lowerCaseQuery.trim() === '') {
                return true; // Display all items
            }

            return (
                lowerCasecategoryName.includes(lowerCaseQuery) ||
                lowerCasedescription.includes(lowerCaseQuery) ||
                lowerCaseisDisplayOnHomePage.includes(lowerCaseQuery)
            );
        });

        setContentHold(filtered);
    };
    console.log(content);







    return (
        <div className="categori-single">
            <div className="contact-form">
                <form>
                    <input type="text" placeholder="Search Category..." onChange={e => handleSearch(e.target.value)} />
                </form>
            </div>
            <div className="contact-data">
                <table cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th>Category Name</th>
                            <th>Description</th>
                            <th>Display HomePage</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            records && records.map((val, i) => {
                                return (
                                    <tr key={i}>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.categoryName}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.description}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.isDisplayOnHomePage}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>
                                            <div className="deleters dfhdfjn">
                                                <button onClick={() => handleShow(val.id)}><img className="blue" src={d} alt="" /></button>
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
                    <Modal.Title>Update Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="modal-form mcvncv" onSubmit={subHandle}>
                        <input type="text" placeholder="Category Name" value={catName} onChange={e => setCatName(e.target.value)} />
                        <textarea placeholder="Description" value={catDesc} onChange={e => setCatDesc(e.target.value)}></textarea>
                        <input type="text" placeholder="Image Url" value={catImgUrl} onChange={e => setCatImgUrl(e.target.value)} />
                        <div className="form-group">
                            <p>DisplayOnHomePage</p>
                            <select name="DisplayOnHomePage" id="DisplayOnHomePage" value={catIsDispHome} onChange={e => setCatIsDispHome(e.target.value)}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
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
                    <Modal.Title>Delete Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="delete-wraop">
                        <button className="delete-operation" onClick={handleDelete}>Delete</button>
                        <button className="delete-operation" onClick={() => setShow2(false)}>Cancel</button>
                    </div>
                </Modal.Body>
            </Modal>


        </div>
    )
}

export default Singlecategorymanagement
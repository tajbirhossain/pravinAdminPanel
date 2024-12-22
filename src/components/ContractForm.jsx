import React, { useEffect, useState } from 'react'
import '../components/styles/contractform.css'
import a from '../images/group.png'
import b from '../images/1.jpg'
import c from '../images/2.jpg'
import d from '../images/delete.png'
import e from '../images/user.png'
import f from '../images/3.jpg'

const ContractForm = () => {


    const [data, setData] = useState()

    useEffect(() => {

        setData([
            {
                name: "Emma Adams",
                email: "adams@mail.com",
                location: "Boston, USA",
                phone: "+91 (070) 123-4567",
                profile: b,
                profession: "Web Developer"
            },
            {
                name: "Olivia Allen",
                email: "allen@mail.com",
                location: "Sydney, Australia",
                phone: "+91 (125) 450-1500",
                profile: c,
                profession: "Web Designerr"
            },
            {
                name: "Isabella Anderson",
                email: "anderson@mail.com",
                location: "Miami, USA",
                phone: "+91 (100) 154-1254",
                profile: f,
                profession: "UX/UI Designer"
            },
            {
                name: "Emma Adams",
                email: "adams@mail.com",
                location: "Boston, USA",
                phone: "+91 (070) 123-4567",
                profile: b,
                profession: "Web Developer"
            },
            {
                name: "Olivia Allen",
                email: "allen@mail.com",
                location: "Sydney, Australia",
                phone: "+91 (125) 450-1500",
                profile: c,
                profession: "Web Designerr"
            },
            {
                name: "Isabella Anderson",
                email: "anderson@mail.com",
                location: "Miami, USA",
                phone: "+91 (100) 154-1254",
                profile: f,
                profession: "UX/UI Designer"
            },
            {
                name: "Emma Adams",
                email: "adams@mail.com",
                location: "Boston, USA",
                phone: "+91 (070) 123-4567",
                profile: b,
                profession: "Web Developer"
            },
            {
                name: "Olivia Allen",
                email: "allen@mail.com",
                location: "Sydney, Australia",
                phone: "+91 (125) 450-1500",
                profile: c,
                profession: "Web Designerr"
            },
            {
                name: "Isabella Anderson",
                email: "anderson@mail.com",
                location: "Miami, USA",
                phone: "+91 (100) 154-1254",
                profile: f,
                profession: "UX/UI Designer"
            },
        ])
    }, [])


    return (
        <div className="contract-wrap">
            <div className="contact-form">
                <form>
                    <input type="text" placeholder="Search Contacts..." />
                    <button className="button"><img src={a} alt="" /> Add Contact</button>
                </form>
            </div>
            <div className="contact-data">
                <table cellSpacing="0" cellpadding="0">
                    <thead>
                        <tr>
                            <th>
                                <div className="flex">
                                    <input className="checked" type="checkbox" /> Name
                                </div>
                            </th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Phone</th>
                            <th><button className="deleter"><img src={d} alt="" /> Delete Row</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((val, i) => {
                                return (
                                    <tr key={i}>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>
                                            <div className="single-box">
                                                <input className="checked" type="checkbox" />
                                                <div className="single-name">
                                                    <img src={val.profile} alt="" />
                                                    <div className="single-profile">
                                                        <p className="name">{val.name}</p>
                                                        <span className="namers">{val.profession}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.email}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.location}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>{val.phone}</td>
                                        <td style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#fff" }}>
                                            <div className="deleters">
                                                <button><img className="blue" src={e} alt="" /></button>
                                                <button><img className="blur" src={d} alt="" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ContractForm
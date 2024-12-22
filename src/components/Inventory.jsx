import React, { useEffect, useState } from "react";
import '../components/styles/dashboard.css'

import u from '../images/loading.png'

const Inventory = () => {

    const [data, setData] = useState()

    useEffect(() => {
        setData([
            {
                status: "Pending",
                stabar: "Orders Pending",
                numb: "100"
            },
            {
                status: "Processing",
                stabar: "Orders Processing",
                numb: "12"
            },
            {
                status: "Completed",
                stabar: "Orders Completed",
                numb: "55"
            },
            {
                status: "Total",
                stabar: "Total Products",
                numb: "99"
            },
            {
                status: "Total",
                stabar: "Total Customers",
                numb: "34"
            },
            {
                status: "Total",
                stabar: "Total Posts",
                numb: "12"
            },
        ])
    }, [])

    return (
        <div className="inventory">

            {
                data && data.map((val, ind) => {
                    return (
                        <div className="single-inventory" key={ind}>
                            <div className="single-wrap">
                                <div className="tnventory-text">
                                    <span>{val.status}</span>
                                    <p>Show All</p>
                                </div>
                                <h3>{val.stabar}</h3>
                            </div>
                            <h2>{val.numb}</h2>
                            <div className="recover">
                                <img src={u} alt="" />
                                <span>Just Upload</span>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Inventory
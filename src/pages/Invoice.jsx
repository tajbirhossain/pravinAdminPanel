import React from 'react'
import { Link } from 'react-router-dom'
import Singleinvoice from '../components/Singleinvoice'

const Invoice = () => {
    return (
        <div className='invoice'>
            <div className="add-new">
                <h2>Invoices</h2>
                <div className="rightInv" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <button><Link to={"/"}>Add New Invoices</Link></button>
                    <button className="button" style={{ marginLeft: "15px" }}>Export</button>
                </div>
            </div>
            <Singleinvoice />
        </div>
    )
}

export default Invoice
import React from "react";
import '../components/styles/dashboard.css'

const Setting = () => {
    return (
        <div className="setting">
            <span>Settings</span>
            <form>
                <div className="form-group">
                    <p>Full Name</p>
                    <input type="text" placeholder="Johnathan Doe" />
                </div>
                <div className="form-group">
                    <p>Email</p>
                    <input type="text" placeholder="johnathan@admin.com" />
                </div>
                <div className="form-group">
                    <p>Password</p>
                    <input type="password" />
                </div>
                <div className="form-group">
                    <p>Phone No</p>
                    <input type="text" placeholder="123 456 7890" />
                </div>
                <div className="form-group">
                    <p>Message</p>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <p>Select Country</p>
                    <select name="country" id="country">
                        <option value="India">India</option>
                        <option value="Usa">Usa</option>
                        <option value="Canada">Canada</option>
                        <option value="Thailand">Thailand</option>
                    </select>
                </div>
                <button>Update Profile</button>
            </form>
        </div>
    )
}

export default Setting
import React from "react";
import '../components/styles/products.css'
import Singleproducts from "./Singleproduxts";
import a from '../images/search.png'


const Productlist = () => {
    return (
        <div className="product-list">
            <div className="contact-form">
                <form>
                    <input type="text" placeholder="Search Products..." />
                    <button className="button"><img src={a} alt="" /> Search</button>
                </form>
            </div>
            <div className="products-container">
                <Singleproducts />
                <Singleproducts />
                <Singleproducts />
                <Singleproducts />
                <Singleproducts />
                <Singleproducts />
                <Singleproducts />
            </div>
        </div>
    )
}

export default Productlist
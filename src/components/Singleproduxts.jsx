import React from "react";
import '../components/styles/products.css'

import a from '../images/pic2.jpg'
import b from '../images/blacklike.png'
import c from '../images/bar-chart.png'
import i from '../images/interest-rate.png'

import s from '../images/star.png'

const Singleproducts = () => {
    return (
        <div className="single-productss">
            <div className="product-info">
                <img src={a} alt="" />
                <div className="product-text">
                    <h4>Spicy Pizza with Kemangi Leaf</h4>
                    <div className="review">
                        <div className="review-count">
                            <img src={s} alt="" />
                            <img src={s} alt="" />
                            <img src={s} alt="" />
                            <img src={s} alt="" />
                            <img src={s} alt="" />
                        </div>
                        <p>(454 revies)</p>
                    </div>
                    <div className="product-likes">
                        <img src={b} alt="" />
                        <p><span>256</span> like it</p>
                    </div>
                </div>
            </div>
            <div className="product-interest">
                <img src={i} alt="" />
                <div className="total-interest">
                    <h2>45%</h2>
                    <span>Interest</span>
                </div>
            </div>
            <div className="product-sales">
                <div className="main-sels">
                    <img src={c} alt="" />
                    <h3>6732</h3>
                </div>
                <span>Total Sales</span>
            </div>
        </div>
    )
}

export default Singleproducts
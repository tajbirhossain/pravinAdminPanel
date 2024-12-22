import React from "react";
import '../components/styles/pagenition.css'

import a from '../images/down-arrow.png'

const Pagenition = () => {





    return (
        <div className="pagenition">
            <div className="pagenition-wrap">
                <button><img className="lefts" src={a} alt="" /></button>
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button><img className="rights" src={a} alt="" /></button>
            </div>
        </div>
    )
}

export default Pagenition
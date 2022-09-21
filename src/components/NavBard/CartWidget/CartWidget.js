import React from "react";
import Carrito from "../../../assests/img/carrito.png"
import styles from "./style.css"
import {Link} from "react-router-dom";

const CartWidget  = () => {
return(
    
    <div className="div-carrito">
        <Link to="/Carrito">
            <img src={Carrito} className="img-carrito"/>
        </Link>
    </div>
    )
}

export default CartWidget 
import React from "react";
import Carrito from "./carrito.png";
import styles from "./style.css"


const CartWindget = () => {
return(
    <div className="div-carrito">
        <img src={Carrito} className="img-carrito"/>
    </div>
    )
}

export default CartWindget
import React from "react";
import Carrito from "../../assests/img/carrito.png"
import styles from "./style.css"


const CartWindget = () => {
return(
    <div className="div-carrito">
        <img src={Carrito} className="img-carrito"/>
    </div>
    )
}

export default CartWindget
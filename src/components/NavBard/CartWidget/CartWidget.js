import {useContext} from "react";
import Carrito from "../../../assests/img/carrito.png"
import styles from "./style.css"
import {Link} from "react-router-dom";
import {CartContext} from "../../Context/CartContext";

const CartWidget  = () => {
    const {quantityItems} = useContext(CartContext)
    let quantity = quantityItems()

    if (quantity>0){
        return(
            <div className="div-carrito">
                <Link to="/Carrito">
                    <img src={Carrito} className="img-carrito"/>
                </Link>
                <h1 className="inline">{quantity}</h1>
            </div>
        )
    }
    
}

export default CartWidget 
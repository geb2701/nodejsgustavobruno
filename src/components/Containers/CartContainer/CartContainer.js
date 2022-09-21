import styles from "../Container.css"
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"
import CartItem from "./CartItem/CartItem"
import {Link} from "react-router-dom";

const CartContainer  = () => {
  const {productCartList, removeAllItems} = useContext(CartContext);

  return (
    <div className="page-container">
        <h1>Carrito</h1>
        <div>
          {productCartList.map(item=>(
            <CartItem item={item} key={item.id}/>
          ))}
          <div>
            <button onClick={()=>removeAllItems()}>Eliminar Todo</button>
          </div>
          
        </div>
    </div>
  )
}

export default CartContainer
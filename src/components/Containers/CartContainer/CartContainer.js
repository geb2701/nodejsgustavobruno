import styles from "../Container.css"
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"
import CartItem from "./CartItem/CartItem"
import {Link} from "react-router-dom";

const CartContainer  = () => {
  const {productCartList, removeAllItems} = useContext(CartContext);

  const anyItems = ()=>{
    console.log(productCartList.length)
    if (productCartList.length!= 0){
      return(
        <div>
          <button onClick={()=>removeAllItems()}>Eliminar Todo</button>
        </div>
      )
    }
    else{
      return(
        <div>
          <h3>No hay Elementos en el Carrito</h3>
          <Link to="/Productos">
            <button className="button-add">Ir a Tienda</button>
          </Link>
        </div>
      )
    }
    
  }
  return (
    <div className="page-container">
        <h1>Carrito</h1>
        <div>
          {productCartList.map(item=>(
            <CartItem item={item} key={item.id}/>
          ))}
          {anyItems()}
          
          
        </div>
    </div>
  )
}

export default CartContainer
import styles from "../Container.css"
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"

const CartContainer  = () => {
  const {productCartList, removeItem} = useContext(CartContext);
  const {removeAllItems} = useContext(CartContext);

  return (
    <div className="page-container">
        <h1>Cart</h1>
        <div>
          {productCartList.map(item=>(
            <>
            <p>{item.id}){item.name}-{item.quantity}</p>
            <button onClick={()=>removeItem(item.id)}>Eliminar </button>
            </>
          ))}
          <div>
            <button onClick={()=>removeAllItems()}>Eliminar Todo</button>
          </div>
          
        </div>
    </div>
  )
}

export default CartContainer


  

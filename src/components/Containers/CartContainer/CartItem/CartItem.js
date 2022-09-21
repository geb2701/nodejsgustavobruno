import { CartContext } from "../../../Context/CartContext"
import { useContext } from "react"

const CartItem  = ({item}) => {
    const {removeItem} = useContext(CartContext);

    return (
        <div>
            <p>{item.id}){item.name}-{item.quantity}</p>
            <button onClick={()=>removeItem(item.id)}>Eliminar </button>
        </div>
    );  
  }
  
  export default CartItem
  
  
  
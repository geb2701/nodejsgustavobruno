import styles from "../Container.css"
import { CartContext } from "../../Context/CartContext"
import { useContext, useState } from "react"
import CartItem from "./CartItem/CartItem"
import {Link} from "react-router-dom";
import {db} from "../../../utils/firebase"
import { addDoc, collection, getDoc} from "firebase/firestore"

const CartContainer  = () => {
  const {productCartList, removeAllItems, totalPrice} = useContext(CartContext);
  const [idOrden, setIdOrden] = useState()
  let total = totalPrice()

  const anyItems = ()=>{
    if (productCartList.length!= 0){
      return(
        <div>
          <h3>Total: {total}</h3>
          <button onClick={()=>removeAllItems()}>Eliminar Todo</button>
          {form()}
          {idOrden && <p>Su Orden es {idOrden}</p>}
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

  const form = () =>{
    return(
      <form onSubmit={sendOrder}>
        <label>Nombre:</label>
        <input type="text"/>
        <label>Telefono:</label>
        <input type="text"/>
        <label>Correo:</label>
        <input type="email"/>
        <button >Enviar Orden</button>
      </form>
      
    )
  }

  const sendOrder = async(event)=>{
    event.preventDefault();
    const order = {
      buyer:{
        name:event.target[0].value,
        phone:event.target[1].value,
        email:event.target[2].value
      },
      items: productCartList,
      total: total,
      date: new Date()
    }
    const queryRef = collection(db, "orders")
    addDoc(queryRef, order).then(response=>{
      setIdOrden(response.id)
    })
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
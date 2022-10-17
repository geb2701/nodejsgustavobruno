import styles from "../Container.css"
import { CartContext } from "../../Context/CartContext"
import { useContext, useState } from "react"
import CartItem from "./CartItem/CartItem"
import {Link} from "react-router-dom";
import {db} from "../../../utils/firebase"
import {addDoc, collection} from "firebase/firestore"
import {doc, getDoc} from "firebase/firestore"
import  {Navigate} from 'react-router-dom'
import Loader from "../../Loader/Loader";
import Swal from 'sweetalert2'

const CartContainer  = () => {
  const {productCartList, removeAllItems, totalPrice} = useContext(CartContext);
  const [idOrden, setIdOrden] = useState()
  const [user, setUser] = useState();
  let total = totalPrice()
  let usuario = localStorage.getItem("id")

  const anyItems = ()=>{
    if (usuario===null){
      return(
          <Navigate to='/Usuario/CrearCuenta'/>
      )
    }
    if (productCartList.length!= 0){
      return(
        <div>
          <h3>Total: {total}</h3>
          <button onClick={()=>removeAllItems()}>Eliminar Todo</button>
          {form()}
          
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
    const getUser = async () =>{
      const queryRef = doc(db, "user", usuario);
      const response = await getDoc(queryRef)
      const User = {
      id: response.id,
      ...response.data(),
      }
      setUser(User)
  }

  getUser()

  return(
    <form onSubmit={sendOrder}>
      {user ? (
        <div>
            <h1>Datos de compra</h1>
            <table className='datos'>
                <tbody>
                  <tr>
                      <td className='datos-rigth'>
                        <label>Nombre:</label>
                      </td>
                      <td className='datos-left'>
                        <label>{user.name}</label>
                      </td>
                  </tr>
                  <tr>
                      <td className='datos-rigth'>
                        <label>Correo:</label>
                      </td>
                      <td className='datos-left'>
                        <label>{user.email}</label>
                      </td>
                  </tr>
                  <tr>
                      <td className='datos-rigth'>
                        <label>Telefono:</label>
                      </td>
                      <td className='datos-left'>
                        <label>{user.phone}</label>
                      </td>
                  </tr>
                  <tr>
                      <td className='datos-rigth'>
                        <label>Contraseña:</label>
                      </td>
                      <td className='datos-left'>
                        <input type="password" required/>
                      </td>
                  </tr>
                </tbody>
            </table>
            <button >Enviar Orden</button>
          </div>
        ) : (
        <Loader/>
    )}
    </form>
      
    )
  }

  const sendOrder = async(event)=>{
    event.preventDefault();
    const result = {
      Password:event.target[0].value,
    }
    if (result.Password!=user.Password) {
      Swal.fire({
        icon: 'error',
        title: 'Contraseña Incorrecta'
      })
    }
    else{
      const order = {
        buyerid: usuario,
        items: productCartList,
        total: total,
        date: new Date()
      }
      const queryRef = collection(db, "orders")
      addDoc(queryRef, order).then(response=>{
        setIdOrden(response.id)
      })
      Swal.fire({
        icon: 'success',
        title: 'CompraGenerada'
      })
      removeAllItems()
    }
  }

  

  return (
    <div  className="page-container">
        <h1>Carrito</h1>
        <div className="product-container">
          {productCartList.map(item=>(
            <CartItem item={item} key={item.id}/>
          ))}
        </div>
        {anyItems()}
        
        {idOrden && <p>Su Orden es {idOrden}</p>}
    </div>
  )
}

export default CartContainer
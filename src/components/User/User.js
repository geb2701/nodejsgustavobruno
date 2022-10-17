import './user.css';
import {collection, getDocs, query, where, doc, getDoc} from "firebase/firestore"
import {db} from "../../utils/firebase";
import { useState } from "react";
import { useEffect } from "react";
import React from 'react';
import  { Navigate} from 'react-router-dom'
import Loader from "../Loader/Loader";
import OrderList from "./OrderList/OrderList";

const User = () => {
    const [user, setUser] = useState();
    let usuario = localStorage.getItem("id")

    useEffect(() => {
        const getUser = async () =>{
            const queryRef = doc(db, "user", usuario);
            const respuesta = await getDoc(queryRef)
            const User = {
                id: respuesta.id,
                ...respuesta.data(),
            }
            setUser(User)
        }
        
        getUser()
    }, []);

    if (usuario===null){
        return(
            <Navigate to='/Usuario/CrearCuenta'/>
        )
    }
 /*
    function Prueba(){
        let i
        for(i=0;i<orders.length;i++){
            console.log(i)
            return(
                <div className='product-content'>
                    <h4>Orden:{orders[i].id}</h4>
                    <h5>Total:{orders[i].total}</h5>
                    {items(orders[i].items)}
                </div>
            )
            
        }
    }
    function items(orden){
        let e 
        for(e=0;e<orden.length;e++){ 
            let newPrice = orden[e].price.slice(1)
            let subTotal= newPrice* orden[e].quantity
            return(
                <div>
                    <h5>Item:{orden[e].name}</h5>
                    <h6>Precio:{orden[e].price}</h6>
                    <h6>Cantidad:{orden[e].quantity}</h6>
                    <h6>SubTotal:{subTotal}</h6>
                </div>
            )
        }
    }
*/
    return (
        <>
        <div className="page-container">
            {user ? (
                <div>
                    <h1>Usuario</h1>
                    <h2>{user.name}</h2>
                    <table className='datos'>
                        <tbody>
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
                        </tbody>
                    </table>
                    <h2>Ordenes de compra</h2>
                    <OrderList/>
                </div>
                ) : (
                <Loader/>
            )}
            
        </div>
        </>
    )
}
  
export default User
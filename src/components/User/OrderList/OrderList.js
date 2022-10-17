import React from "react";
import Order from "../Order/Order";
import { useState } from "react";
import { useEffect } from "react";
import {collection, getDocs, query, where, doc, getDoc} from "firebase/firestore"
import {db} from "../../../utils/firebase";

const OrderList  = () => {
    let usuario = localStorage.getItem("id")
    const [orders, setOrders] = useState();
    useEffect(() => {
        const getOrders = async () =>{
            const queryRef = query(collection(db, "orders"), where("buyerid","==",usuario))
            getDocs(queryRef).then(response=>{
                const result = response.docs.map(doc=>{
                  const newOrder = {
                    ...doc.data(),
                    id: doc.id
                  }
                  return newOrder
                  
                })
                setOrders(result);
              })
        }
        console.log(orders)
    }, []);

    function Prueba(){
        console.log(orders)
        {orders.map((order) => {
            return (
                <Order 
                    key={order.id}
                    id={order.id}
                    date={order.date}
                    items={order.items}
                    price={order.total}
                />
            )
        })}
    }

    return(
    <>
    {orders ? (
        Prueba()
        ) : (
            <div></div>
        )}
        
    </>
    )
}


export default OrderList 
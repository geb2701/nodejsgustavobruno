import React from "react";
import { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({children}) =>{
    const [productCartList, setProductCartList] = useState([]);

    const addItem = (item, quantity) =>{
        const newProduct ={
            ...item,
            quantity: quantity
        }
        const newArreglo =[...productCartList]
        newArreglo.push(newProduct)
        setProductCartList(newArreglo)
    }

    const removeItem = (itemId) =>{
        const newArreglo = productCartList.filter(product=>product.id !== itemId);
        setProductCartList(newArreglo)
    }

    const removeAllItems = () =>{
        const newArreglo = []
        setProductCartList(newArreglo)
    }

    const isInCart = (id) =>{
        const consulta = productCartList.find(item => item.id == id)
        if (consulta !=null){
            return(true)
        }
        else{
            return(false)
        }
        
    }

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, removeAllItems, isInCart}}>
            {children}
        </CartContext.Provider>
    )
    
}

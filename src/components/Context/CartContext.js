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

        if(isInCart(item.id)){
            const productPos = productCartList.findIndex(product=>product.id === item.id);
            let newQuantity = productPos.quantity + quantity
            if (newQuantity > productPos.stock){
                newQuantity = productPos.stock
            }
            const newArreglo = [...productCartList];
            newArreglo[productPos].quantity = newQuantity;
            setProductCartList(newArreglo);
        } else{
            const newArreglo = [...productCartList];
            newArreglo.push(newProduct);
            setProductCartList(newArreglo);
        }
    }

    const removeItem = (itemId) =>{
        const newArreglo = productCartList.filter(product=>product.id !== itemId);
        setProductCartList(newArreglo)
    }

    const removeAllItems = () =>{
        const newArreglo = []
        setProductCartList(newArreglo)
    }

    const isInCart = (productId)=>{
        const productExist = productCartList.find(item=>item.id === productId);
        return productExist;
    }

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, removeAllItems, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

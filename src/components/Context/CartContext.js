import React from "react";
import { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({children}) =>{
    const [productCartList, setProductCartList] = useState([]);

    const addItem = (item, quantity) =>{
        if (quantity>0){
            if(isInCart(item.id)){
                const productPos = productCartList.findIndex(product=>product.id === item.id);
                const product = productCartList.find(product=>product.id === item.id);
                let newQuantity = product.quantity + quantity
                if (newQuantity > product.stock){
                    newQuantity = product.stock
                }
                const newArreglo = [...productCartList];
                newArreglo[productPos].quantity = newQuantity;
                setProductCartList(newArreglo);
            } else{
                const newProduct ={
                    ...item,
                    quantity: quantity
                }
                const newArreglo = [...productCartList];
                newArreglo.push(newProduct);
                setProductCartList(newArreglo);
            }
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

    const quantityItems = ()=>{
        let quantity = 0
        productCartList.forEach(element => {
            quantity+=element.quantity
        });
        return quantity;
    }

    const deleteItem = (item, quantity) =>{
        if(isInCart(item.id) && (quantity>0)){
            const productPos = productCartList.findIndex(product=>product.id === item.id);
            const product = productCartList.find(product=>product.id === item.id);
            let newQuantity = product.quantity - quantity
            if (newQuantity <= 0){
                newQuantity = 1
            }
            const newArreglo = [...productCartList];
            newArreglo[productPos].quantity = newQuantity;
            setProductCartList(newArreglo);
        }
    }

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, removeAllItems, isInCart, quantityItems, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}

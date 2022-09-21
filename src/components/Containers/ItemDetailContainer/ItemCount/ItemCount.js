import { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";

const ItemCount = ({id, stock, onAdd }) => {
    const [count, setCount] = useState(1)
    const {isInCart} = useContext(CartContext)
    const [availableBuy, setAvailableBuy] = useState(true);

    let productInCart = isInCart(id)
    if (productInCart != null){
        stock= stock - productInCart.quantity
    }


    const suma = () =>{
        if (count < stock){
            setCount(count+1);
        }
    }
    
    const resta = () =>{
        if (count > 1){
            setCount(count-1);
        }
    }

    function btn() {
        if (stock<=0){
            return (
                <div className="item-count">
                    <button className="button-add">No hay mas Stock</button>
                </div>
            )
        }
        else{
            return (
                <div className="item-count">
                    <button onClick={()=>onAdd(count)} className="button-add">Añadir al Carro</button>
                </div>
            )
        }
        
    }

    function cantidadCarro(){
        if (productInCart!=null){
            return(
                <p className="item-count-count">Ya tienes {productInCart.quantity} en tu carrito</p>
            )
        }
    }

    function habilitarCompra(){
        if (stock <= 0) {
            setAvailableBuy()
        }
    }

    return (
        <div className="item-count">
            <div>
                {cantidadCarro()}
                <p className="item-count-count">Stock Disponible: {stock}</p>
            </div>
            {availableBuy ? (
            <div className="item-count">
            
                <button onClick={resta} className="btn btn-secondary">-</button>
                <p className="item-count-contador">{count}</p>
                <button onClick={suma} className="btn btn-secondary">+</button>
            </div>
            ):(
                <div></div>
            )}
            {btn()}
        </div>
        
    );
      
};

export default ItemCount
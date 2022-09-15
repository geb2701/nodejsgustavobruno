import { useState } from "react";

const ItemCount = ({numeroInicial, stock, onAdd }) => {
    const [count, setCount] = useState(numeroInicial)

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

    return (
        
        <div className="item-count">
            <div>
                <p className="item-count-count">Stock Disponible: {stock}</p>
            </div>
            <div className="item-count">
                <button onClick={resta} className="btn btn-secondary">-</button>
                <p className="item-count-contador">{count}</p>
                <button onClick={suma} className="btn btn-secondary">+</button>
            </div>
            
            <div className="item-count">
                <button onClick={()=>onAdd(count)} className="button-add">Añadir al Carro</button>
            </div>
        </div>
    );
      
};

export default ItemCount
import { useState } from "react";

const ItemCount = ({numeroInicial, stock, OnAdd }) => {
    const [contador, setContador] = useState(numeroInicial)
    const suma = () =>{
        if (contador < stock){
            setContador(contador+1);
        }
    }
    
    const resta = () =>{
        if (contador > 1){
            setContador(contador-1);
        }
    }

    const AñadirAlCarro = () =>{
        if (contador > stock){
            alert("No hay Stock Suficiente \n OnAdd=" + OnAdd )
        }
        else{
            alert("Añadido Al Carro Correctamente\n Cantidad =" + contador +" \n OnAdd=" + OnAdd)
        }
    }
    return (
        <div className="item-count">
            <div className="item-count">
                <button onClick={resta} className="btn btn-secondary">-</button>
                <p className="item-count-contador">{contador}</p>
                <button onClick={suma} className="btn btn-secondary">+</button>
            </div>
            
            <div className="item-count">
                <button onClick={AñadirAlCarro} className="button-add">Añadir al Carro</button>
            </div>
        </div>
    );
      
};

export default ItemCount
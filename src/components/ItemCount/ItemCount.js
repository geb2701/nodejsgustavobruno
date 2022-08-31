import { useState } from "react";

const ItemCount = ({numeroInicial, stock, OnAdd }) => {
    const [contador, setContador] = useState(numeroInicial)
    const suma = () =>{
        setContador(contador+1);
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
        <div>
            <div>
            <button onClick={resta} className="btn btn-secondary">-</button>
            <text>{contador}</text>
            <button onClick={suma} className="btn btn-secondary">+</button>
            </div>
            
            <div>
                <button onClick={AñadirAlCarro} className="btn btn-secondary">Añadir al Carro</button>
            </div>
        </div>
    );
      
};

export default ItemCount
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from "react-router-dom";

const ItemDetail  = ({item}) => {
  const [contador, setContador] = useState();
  const [comprar, setComprar] = useState();

  const onAdd = (count) =>{
    setContador(count)
    setComprar(true);
  }
  const{name, description, price, image, stock} = item
    return (
      <div>
          <h1>{name}</h1>
          <img src={image} alt={name} className={"product-img"}/>
          <h3>{description}</h3>
          <h2>{price}</h2>
          
          {comprar ? (
          <div className="product-container">
            <p>Cantidad: {contador}</p>
            <Link to="/Carrito">
              <button className="button-add">Pagar</button>
            </Link>
          </div>
          ) : (
            <>
              <ItemCount numeroInicial={1} stock={stock} onAdd={onAdd}/> 
            </>
          )}

          
      </div>
    )
}
  
export default ItemDetail 
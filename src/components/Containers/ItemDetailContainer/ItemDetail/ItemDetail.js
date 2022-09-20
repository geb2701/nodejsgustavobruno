import {useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";

const ItemDetail  = ({item}) => {
  const{id, name, description, price, image, stock} = item

  const [contador, setContador] = useState();
  const [comprar, setComprar] = useState();
  const [pagar, setPagar] = useState();
  const {addItem, isInCart} = useContext(CartContext)
  let error

  const onAdd = (count) =>{
    setContador(count)
    let consulta = isInCart(id)
    setComprar(true);
    if (consulta == false){
      setPagar(true)
      addItem(item, count)
    }
    else {
      setPagar(false)
    }
    
    
  }
  
    return (
      <div>
          <h1>{name}</h1>
          <img src={image} alt={name} className={"product-img"}/>
          <h3>{description}</h3>
          <h2>{price}</h2>
          
          {comprar ? (
          <div className="product-container">
            {pagar ? (
              <>
              <h2>Se ha Añadido el producto "{name}" a su carrito</h2>
              <div>
                <p>Cantidad: {contador}</p>
                <Link to="/Carrito">
                  <button className="button-add">Pagar</button>
                </Link>
              </div>
              
              </>
            ) : (
              <>
              <h2>Su producto {name} ya esta en el carrito</h2>
              <Link to="/Carrito">
                <button className="button-add">Pagar</button>
              </Link>
              </>
            )}
            
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
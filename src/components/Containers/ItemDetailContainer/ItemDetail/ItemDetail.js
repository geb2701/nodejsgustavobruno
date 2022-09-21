import {useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";

const ItemDetail  = ({item}) => {
  const{id, name, description, price, image, stock} = item

  const [contador, setContador] = useState();
  const [comprar, setComprar] = useState();
  const {addItem} = useContext(CartContext)

  const onAdd = (count) =>{
    setContador(count)
    setComprar(true);
    addItem(item, count)
  }
  
  return (
    <div>
        <h1>{name}</h1>
        <img src={image} alt={name} className={"product-img"}/>
        <h3>{description}</h3>
        <h2>{price}</h2>
        
        {comprar ? (
        <div className="product-container">
          <h2>Se ha Añadido el producto "{name}" a su carrito</h2>
            <div>
              <p>Cantidad: {contador}</p>
              <Link to="/Carrito">
                <button className="button-add">Pagar</button>
              </Link>
            </div>
        </div>
        ) : (
          <>
            <ItemCount id={id} stock={stock} onAdd={onAdd}/> 
          </>
        )}

        
    </div>
  )
}
  
export default ItemDetail 
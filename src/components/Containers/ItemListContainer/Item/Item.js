import { Link } from "react-router-dom"

const Item = ({id, name, price, image}) => {
    return (
      <div className='product-content'>
          <h1>{name}</h1>
          <img src={image} alt={name} className="product-img"/>
          <h3>{price}</h3>
          <Link to={`/Producto/${id}`}>
            <button className="button-add">Ver Detalle</button>
          </Link>
          
      </div>
    )
}
  
export default Item
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({id, name, description, price, image, stock}) => {
    return (
      <div>
          <h2>{name}</h2>
          <h3>{description}</h3>
          <h2>{price}</h2>
          <img src={image} alt={name}/>
          <ItemCount numeroInicial={1} stock={stock} OnAdd={3}/> 
      </div>
    )
}
  
export default ItemListContainer
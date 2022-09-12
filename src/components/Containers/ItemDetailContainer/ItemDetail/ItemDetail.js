import ItemCount from '../ItemCount/ItemCount';

const ItemDetail  = ({item}) => {
  const{name, description, price, image, stock} = item
    return (
      <div>
          <h1>{name}</h1>
          <img src={image} alt={name}/>
          <h3>{description}</h3>
          <h2>{price}</h2>
          
          <ItemCount numeroInicial={1} stock={stock} OnAdd={3}/> 
      </div>
    )
}
  
export default ItemDetail 
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail  = ({item}) => {
    return (
      <div>
          <h2>{item.name}</h2>
          <h3>{item.description}</h3>
          <h2>{item.price}</h2>
          <img src={item.image} alt={item.name}/>
          <ItemCount numeroInicial={1} stock={item.stock} OnAdd={3}/> 
      </div>
    )
}
  
export default ItemDetail 
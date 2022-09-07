import React from "react";
import Item from "../Item/Item";


const ItemList  = ({itemsList}) => {
return(
    <>
        {itemsList.map((producto) => {
            return (
                <Item 
                    key={producto.id}
                    name={producto.name}
                    description={producto.description}
                    price={producto.price}
                    image={producto.image}
                    stock={producto.stock}
                />
            )
        })}
    </>
    )
}



export default ItemList 
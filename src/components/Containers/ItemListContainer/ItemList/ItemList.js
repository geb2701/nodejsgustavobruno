import React from "react";
import Item from "../Item/Item";

const ItemList  = ({itemsList}) => {
return(
    <>
        {itemsList.map((producto) => {
            return (
                <Item 
                    key={producto.id}
                    id={producto.id}
                    name={producto.name}
                    price={producto.price}
                    image={producto.image}
                />
            )
        })}
    </>
    )
}



export default ItemList 
import React from "react";
import Item from "../Item/Item";

const ItemList  = ({itemsList}) => {
    if (itemsList.length!=0){
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
    else{
        return(
            <h2>No hay ningun Item con esta Categoria</h2>
        )
    }
}


export default ItemList 
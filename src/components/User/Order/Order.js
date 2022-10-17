import React from "react";

const Order = ({id, date, items, price}) => {
    return (
      <div className='product-content'>
          <h1>{id}</h1>
          <h3>Precio:{price}</h3>
      </div>
    )
}
  
export default Order
import React from "react";
import Category from "../Category/Category"

const CategoriesList  = ({categoriesList}) => { 

return(
    <>
        {categoriesList.map((category) => {
            return (
                <Category 
                    key={category.id}
                    id={category.id}
                    name={category.name}
                />
            )
        })}
    </>
    )
}



export default CategoriesList
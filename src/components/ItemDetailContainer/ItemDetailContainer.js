import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import data from "./mock-data"


const ItemDetailContainer  = ({Titulo, id}) => {
  const [item, setItem] = useState([]);

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve (data.find(item => item.id == id));
    }, 2000);
  });

  useEffect(() => {
    getItem.then((result) => {
      setItem(result);
      console.log(item)
    });
  }, []);

  return (
    <div className="div-titulo">
        <h1>{Titulo}</h1>
        <>
          <ItemDetail item={item}/>
        </> 
        
    </div>
  )
}

export default ItemDetailContainer
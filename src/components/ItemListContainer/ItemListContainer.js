import styles from "./style.css"
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import data from "./mock-data"


const ItemListContainer = ({greeting}) => {
  const [items, setItems] = useState([]);

  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  useEffect(() => {
    getData.then((result) => {
      setItems(result);
      console.log(items)
    });
  }, []);

  return (
    <div className="div-titulo">
        <h1>{greeting}</h1>
        <>
          <ItemList itemsList={items}/>
        </>
        
    </div>
  )
}

export default ItemListContainer
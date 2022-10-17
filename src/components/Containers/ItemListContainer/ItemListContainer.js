import styles from "../Container.css"
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import ProductsCategories from "../../ProductsCategories/ProductsCategories";
import {db} from "../../../utils/firebase";
import {collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = () => {
  const [items, setItems] = useState();
  const {categoriaId} = useParams();
  var titulo

  useEffect(() => {
    setItems(null)
    if (categoriaId==null){
      const queryRef = collection(db, "items")
      getDocs(queryRef).then(response=>{
        const result = response.docs.map(doc=>{
          const newItem = {
            ...doc.data(),
            id: doc.id
          }
          return newItem
          
        })
        setItems(result);
      })
    }
    else{
      const queryRef = query(collection(db, "items"), where("categoriaId","==",categoriaId))
      getDocs(queryRef).then(response=>{
        const result = response.docs.map(doc=>{
          const newItem = {
            ...doc.data(),
            id: doc.id
          }
          return newItem
          
        })
        setItems(result);
      })
    }
  }, [categoriaId]);

  if(categoriaId!=null){
    titulo = categoriaId
  }
  else{
    titulo = "Lista de Productos"
  }
  
  return (
    <> 
      <div className="page-container">
          <ProductsCategories/>
          <h1>{titulo}</h1>
          {items ? (
          <div className="product-container">
            <>
              <ItemList itemsList={items}/>
            </>
          </div>
          ) : (
            <Loader/>
          )}
      </div>
    </>
  )
}

export default ItemListContainer
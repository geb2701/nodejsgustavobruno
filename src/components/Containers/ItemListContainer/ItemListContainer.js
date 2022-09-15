import styles from "../Container.css"
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import productList from "../../Mock/mock-Products"
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import ProductsCategories from "../../ProductsCategories/ProductsCategories";

const ItemListContainer = () => {
  const [items, setItems] = useState();
  const {categoriaId} = useParams();
  var titulo

  const getProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });

  useEffect(() => {
    setItems(null)
    getProduct.then((result) => {
      if (categoriaId!=null){
        const listaProductos = result.filter(item=>item.categoriaId === categoriaId)
        setItems(listaProductos);
      }
      else {
        setItems(result)
      }
      
    });
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
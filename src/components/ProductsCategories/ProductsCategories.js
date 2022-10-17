import styles from "./ProductsCategories.css"
import { useState } from "react";
import { useEffect } from "react";
import CategoriesList from "./CategoriesList/CategoriesList"
import React from "react";
import {db} from "../../utils/firebase";
import {collection, getDocs} from "firebase/firestore"
import Loader from "../Loader/Loader";

const ProductsCategories = () => {
  const [category, setCategories] = useState();

  useEffect(() => {
    const queryRef = collection(db, "categories")
    getDocs(queryRef).then(response=>{
      const result = response.docs.map(doc=>{
        const newCategory = {
          id: doc.id,
          ...doc.data(),
        }
        return newCategory
        
      })
      setCategories(result);
    })
  },);

  return (
    <>
      {category ? (
        <>
          <CategoriesList categoriesList={category}/>
        </>
        ) : (
          <Loader/>
        )}
        
    </>
  )
}

export default ProductsCategories
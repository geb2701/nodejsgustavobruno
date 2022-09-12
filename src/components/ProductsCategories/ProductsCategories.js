import styles from "./ProductsCategories.css"
import { useState } from "react";
import { useEffect } from "react";
import CategoryList from "../Mock/mock-Categories"
import CategoriesList from "./CategoriesList/CategoriesList"
import React from "react";

const ProductsCategories = () => {
    const [category, setCategories] = useState();

    const getCategories = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(CategoryList);
      }, 2000);
    });
      useEffect(() => {
        getCategories.then((result) => {
            setCategories(result);
        });
      },);

    if (category!=null){
    return (
        <CategoriesList categoriesList={category}/>
    )
    }
}

export default ProductsCategories
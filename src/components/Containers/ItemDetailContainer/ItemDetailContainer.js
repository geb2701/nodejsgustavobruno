import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../../ItemDetail/ItemDetail";
import productList from "../../Mock/mock-Products"
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";

const ItemDetailContainer  = () => {
  const [item, setItem] = useState();
  const {itemId} = useParams();

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve (productList.find(item => item.id == itemId));
    }, 2000);
  });

  useEffect(() => {
    getItem.then((result) => {
      setItem(result);
    });
  }, []);

  return (
    <div className="page-container">
      <div className="product-container">
        {item ? (
          <ItemDetail item={item}/>
          ):(
          <Loader/>
        )} 
      </div>
    </div>
  )
}

export default ItemDetailContainer
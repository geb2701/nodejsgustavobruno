import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import productList from "../../Mock/mock-Products"
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import {doc, getDoc} from "firebase/firestore"
import {db} from "../../../utils/firebase";

const ItemDetailContainer  = () => {
  const [item, setItem] = useState();
  const {itemId} = useParams();

  useEffect(() => {
      const getItem = async () =>{
        const queryRef = doc(db, "items", itemId);
        const response = await getDoc(queryRef)
        const newItem = {
          id: response.id,
          ...response.data(),
        }
        setItem(newItem)
      }
      
      getItem()
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
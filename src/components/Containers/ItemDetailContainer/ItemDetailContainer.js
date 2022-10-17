import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import productList from "../../Mock/mock-Products"
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import {doc, getDoc} from "firebase/firestore"
import {db} from "../../../utils/firebase";
import {Link} from "react-router-dom";

const ItemDetailContainer  = () => {
  const [item, setItem] = useState();
  const {itemId} = useParams();
  const [itemData, thereData] = useState();

  useEffect(() => {
      const getItem = async () =>{
        const queryRef = doc(db, "items", itemId);
        const response = await getDoc(queryRef)
        const newItem = {
          id: response.id,
          ...response.data(),
        }
        setItem(newItem)
        //compruebo el precio para saber si el objeto trajo la informacion correcta o no
        if(newItem.price!=null || newItem.price!=undefined){
          thereData(true)
        }
        else{
          thereData(false)
        }

      }
      
      getItem()
  }, []);

  function verificarItem(){
    if (itemData==true){
      return(
        <ItemDetail item={item}/>
      )
    }
    else{
      return(
        <>
          <h2>El Producto no ha sido Encontrado</h2>
          <Link to="/">
            <button className="button-add">Regresar al Home</button>
          </Link>
        </>
      )
    }
  }
  
  return (
    <div className="page-container">
      <div>
        {item ? (
          verificarItem()
          ):(
          <Loader/>
        )} 
      </div>
    </div>
  )
}

export default ItemDetailContainer
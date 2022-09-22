import { CartContext } from "../../../Context/CartContext"
import { useContext } from "react"

const CartItem  = ({item}) => {
    const {removeItem, addItem, deleteItem} = useContext(CartContext);
    let precioTotal = 0
    let newPrice = item.price.slice(1)
    precio()


    const suma = () =>{
        addItem(item, 1)
    }
    
    const resta = () =>{
        deleteItem(item, 1)
    }

    function precio(){
        precioTotal= item.quantity * newPrice
    }

    function btnMas(){
        if (item.quantity<item.stock){
            return(
                <button onClick={suma} className="btn btn-secondary button-add">+</button>
            )
        }
    }

    function btnMemos(){
        if (item.quantity>1){
            return(
                <button onClick={resta} className="btn btn-secondary button-add">-</button>
            )
        }
    }

    return (
        <div>
            <div>
                <h1>{item.id}){item.name}</h1>
                <div>
                    <div className="item-count">
                        {btnMemos()}
                        <h2 className="item-count-contador ">Cantidad:{item.quantity} ({item.price})</h2>
                        {btnMas()}
                    </div>
                    <h2>Total: {precioTotal}</h2>
                    <button onClick={()=>removeItem(item.id)} className={"btn btn-secondary button-add"}>Eliminar </button>
                </div>
            </div>
            
        </div>
    );  
  }
  
  export default CartItem
  
  
  
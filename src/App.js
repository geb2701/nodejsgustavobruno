import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBard/NavBard';
import ItemListContainer from './components/Containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Containers/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/Containers/CartContainer/CartContainer'
import User from './components/User/User'
import {CartProvider} from './components/Context/CartContext'
import SingIn from './components/User/SingIn/SingIn'
import LogIn from './components/User/LogIn/LogIn'
import {Navigate} from 'react-router-dom'


function App() {

  return (
      <CartProvider>
        <BrowserRouter>
          <div className='App'>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/Productos" element={<ItemListContainer/>} />
              <Route path="/Productos/:categoriaId" element={<ItemListContainer/>} />
              <Route path="/Producto/:itemId" element={<ItemDetailContainer/>} />
              <Route path="/Carrito" element={<CartContainer/>} />
              <Route path="/Usuario" element={<User/>} />
              <Route path="/Usuario/CrearCuenta" element={<SingIn/>} />
              <Route path="/Usuario/IniciarSesion" element={<LogIn/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
      
  )
}


export default App;

import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBard/NavBard';
import ItemListContainer from './components/Containers/ItemListContainer/ItemListContainer';
import Contacto from './components/Contacto/Contacto';
import ItemDetailContainer from './components/Containers/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/Containers/CartContainer/CartContainer'
import {CartProvider} from './components/Context/CartContext'

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
              <Route path="/Contacto" element={<Contacto/>} />
              <Route path="/Carrito" element={<CartContainer/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
      
  );
}



export default App;

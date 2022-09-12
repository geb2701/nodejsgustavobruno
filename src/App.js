import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBard/NavBard';
import ItemListContainer from './components/Containers/ItemListContainer/ItemListContainer';
import Contacto from './components/Contacto/Contacto';
import ItemDetailContainer from './components/Containers/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    
      <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/Productos" element={<ItemListContainer/>} />
          <Route path="/Productos/:categoriaId" element={<ItemListContainer/>} />
          <Route path="/Producto/:itemId" element={<ItemDetailContainer/>} />
          <Route path="/Contacto" element={<Contacto/>} />
        </Routes>
      </div>
      </BrowserRouter>
  );
}



export default App;

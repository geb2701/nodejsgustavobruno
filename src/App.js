import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBard';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div >
      <header>
        <Router>
          <Navbar />
        </Router>
      </header>
      <ItemListContainer greeting={'Todos los Elementos'}/>
      <ItemDetailContainer Titulo={'Un Solo Elemento'} id={2}/>
    </div>
  );
}



export default App;

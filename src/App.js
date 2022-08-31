import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBard';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div >
      <header>
        <Router>
          <Navbar />
        </Router>
      </header>
      <ItemListContainer greeting={'Bienvenido'}/>
      <ItemCount numeroInicial={1} stock={5} OnAdd={3}/> 
    </div>
  );
}



export default App;

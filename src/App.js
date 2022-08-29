import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBard';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';

function App() {
  return (
    <div >
      <header>
        <Router>
          <Navbar />
        </Router>
      </header>
      <ItemListContainer greeting={'Bienvenido'}/>
    </div>
  );
}



export default App;


import './App.css';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo="Hola Buenas tardes" titulo2="Adios"/>
      <header className="App-header">
        <div className='cuadrado'></div>
        <div style={{ width: '150px', height: '150px', backgroundColor:'blue'}}></div>
      </header>
    </div>
  );
};

export default App;

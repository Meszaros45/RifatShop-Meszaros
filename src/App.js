
import './App.css';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Holaaa"/>
      <header className="App-header">
        <div className='cuadrado'></div>
        <div style={{ width: '150px', height: '150px', backgroundColor:'blue'}}></div>
      </header>
    </div>
  );
};

export default App;

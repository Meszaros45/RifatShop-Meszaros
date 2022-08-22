
import './App.css';
import Miprimercomponente from './components/Miprimercomponente';
import NavBar from './components/NavBar/NavBar'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
       <Miprimercomponente />
        <div className='cuadrado'></div>
        <div style={{ width: '150px', height: '150px', backgroundColor:'blue'}}></div>
      </header>
    </div>
  );
}

export default App;

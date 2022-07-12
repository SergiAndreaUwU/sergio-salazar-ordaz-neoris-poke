import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PokemonSearcher from './components/PokemonSearcher';

import react from "react"

function App() {

  const [isLoaded,setIsLoaded]=react.useState(false)

  setTimeout(()=>{
    setIsLoaded(true)
  },1000)
  react.useEffect(()=>{
 
  },[])

  return (
    <div className="App">
      <Navbar/>
      <PokemonSearcher/>
      {isLoaded && <><div className='card'>#</div><div className='card'>#</div><div className='card'>#</div><div className='card'>#</div><div className='bigCard'>#</div></>}
      <h2>Listado de Pokemon</h2>
      <button className='primary'>Siguiente</button>
      <button className='primary'>Atras</button>
    </div>
  );
}

export default App;

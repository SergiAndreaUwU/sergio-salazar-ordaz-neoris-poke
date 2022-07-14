import "./App.css";
import Navbar from "./components/Navbar";
import PokemonSearcher from "./components/PokemonSearcher";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-container">
        <PokemonSearcher />
      </div>
    </div>
  );
}

export default App;

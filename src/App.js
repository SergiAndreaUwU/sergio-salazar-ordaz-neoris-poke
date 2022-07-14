import "./App.css";
import Navbar from "./components/Navbar";
import PokemonSearcher from "./components/PokemonSearcher";

import react from "react";

function App() {
  const [isLoaded, setIsLoaded] = react.useState(false);

  setTimeout(() => {
    setIsLoaded(true);
  }, 1000);
  react.useEffect(() => {}, []);

  return (
    <div className="App">
      <Navbar />
      <div className="App-container">


        <PokemonSearcher />

        {/* {isLoaded && (
          <div>
            <div className="card">#</div>
            <div className="card">#</div>
            <div className="card">#</div>
            <div className="card">#</div>
            <div className="bigCard">#</div>
          </div>
        )} */}

      </div>
    </div>
  );
}

export default App;

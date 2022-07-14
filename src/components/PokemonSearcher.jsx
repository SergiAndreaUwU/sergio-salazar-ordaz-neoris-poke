import CardList from "./CardList";
import SearchBar from "./SearchBar";
import SelectedCard from "./SelectedCard";
import styles from "./PokemonSearcher.module.css";
import { useEffect, useState } from "react";
import getPokemonByName from "../apiCalls/getPokemonByName";
import getPokemonListWithOffset from "../apiCalls/getPokemonListWithOffset";
import capitalizeFirstLetter from "../globalFunctions/capitalizeFirstLetter";
import getAllPokemon from "../apiCalls/getAllPokemon";

const PokemonSearcher = () => {
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [page, setPage] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonFullList, setPokemonFullList] = useState([]);
  const [pokemonCount,setPokemonCount]=useState(0)
  const [loaded,setLoaded]=useState(false)

  const loadPokemonList = async (offset=0) => {
    setLoaded(false)
    const res = await getPokemonListWithOffset(offset);
    if (res.status === 200) {
      const pokemonNames = res.data.results;
      const pokemonInfoList = [];
      for(let pokemon of pokemonNames){
        const res = await getPokemonByName(pokemon.name);
        if (res.status === 200) {
          const pokemon = res.data;
          const moveNames = pokemon.moves.map((el) => el.move.name);
          const typeNames = pokemon.types.map((el) => el.type.name);
          const spritekeys = Object.keys(pokemon.sprites);
          const sprites = [];

          for (let key of spritekeys) {
            if (typeof pokemon.sprites[key] === "string") {
              sprites.push(pokemon.sprites[key]);
            }
          }
          pokemonInfoList.push({
            id: pokemon.id,
            name: capitalizeFirstLetter(pokemon.name),
            sprites,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
            moves: `${moveNames.reduce(
              (prevName, currentName) => prevName + ", " + currentName
            )}`,
            types: `${typeNames.reduce(
              (prevName, currentName) => prevName + ", " + currentName
            )}`,
            weight: pokemon.weight/10+"kg",
          });
        }
      }
      setPokemonList(pokemonInfoList);
    } else {
      alert("SOMETHING WENT WRONG LOADING POKEMON");
      console.error("pokemon load failed:"+res)
    }
    setLoaded(true)
  };

  const loadAllPokemon=async()=>{
    const res= await getAllPokemon()
    if(res.status===200){
      setPokemonFullList(res.data.results)
      setPokemonCount(res.data.count)
    }
  }

  const changePageForwards=()=>{
    if(page>=pokemonCount/4) return
    setPage(page+1)
  }

  const changePageBackwards=()=>{
    if(page<=0) return
    setPage(page-1)
  }

  useEffect(() => {
    loadAllPokemon();
  }, []);

  useEffect(()=>{
    loadPokemonList(page)

  },[page])

 const callbackSetSelectedPokemon=(selected)=>{
    setSelectedPokemon(selected)
 }

  return (
    <div>
      {/* {JSON.stringify(pokemonList)} */}
      <div style={{ textAlign: "center",height:"90px" }}>
        <h1 style={{margin:"0"}}>Listado de Pokemon</h1>
      </div>
      <div className={styles.pokemonSearcherContainer}>
        <div className={styles.searchBarContainer}>
          <SearchBar />
        </div>
        <div className={styles.cardListContainer}>
          <CardList callbackSetSelectedPokemon={(selected)=>{callbackSetSelectedPokemon(selected)}} list={pokemonList}/>
        </div>
        <div className={styles.selectedCardContainer}>
          <SelectedCard selectedPokemon={selectedPokemon}/>
        </div>
        <div className={styles.backwardsButtonContainer}>
          <button className="primary" onClick={()=>{changePageBackwards()}} disabled={page<=0 || !loaded}>&lt; Atras</button>
        </div>
        <div className={styles.forwardsButtonContainer}>
          <button className="primary" onClick={()=>{changePageForwards()}} disabled={page>=pokemonCount/4 || !loaded}>Siguiente &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default PokemonSearcher;

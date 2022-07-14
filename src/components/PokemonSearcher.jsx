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

  const [query, setQuery] = useState("");

  const [pokemonFilteredList, setPokemonFilteredList] = useState([]);
  const [filteredPokemonNames,setFilteredPokemonNames]=useState([])
  const [filteredPage, setFilteredPage] = useState(0);
  const [filteredPokemonCount,setFilteredPokemonCount]=useState(0)

 
  const loadPokemon=(pokemonNames)=>{
    return new Promise(async(resolve,reject)=>{
      const pokemonInfoList = [];
      debugger
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
              (prevName, currentName) => prevName + ", " + currentName,""
            )}`,
            types: `${typeNames.reduce(
              (prevName, currentName) => (prevName + ", " + currentName),""
            )}`,
            weight: pokemon.weight/10+"kg",
          });
        }else{
          reject(pokemonInfoList)
        }
      }
      resolve(pokemonInfoList)
    })
    
  }

  useEffect(() => {
    const timeOutId = setTimeout(async() => {
      //TODO
      setLoaded(false)
      const pokemonNameToSearch=query.toLowerCase();
      const res=pokemonFullList.filter(pokemon=>pokemon.name.toLowerCase().includes(pokemonNameToSearch))
      setFilteredPokemonCount(res.length)
      console.log(res)
      setFilteredPokemonNames(res)
      setFilteredPage(0)
      loadFilteredPokemonList(res)
      setLoaded(true)
      debugger
      debugger
    }, 500);
    return () => clearTimeout(timeOutId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const loadFilteredPokemonList = async (pokemonNames,filteredPage=0) => {
    const pokemonToShow=pokemonNames.slice(filteredPage*4,(filteredPage*4)+4)
    const pokemonInfoList = await loadPokemon(pokemonToShow)
    debugger
    setPokemonFilteredList(pokemonInfoList)
    debugger

  }

  const loadPokemonList = async (offset=0) => {
    setLoaded(false)
    const res = await getPokemonListWithOffset(offset);
    if (res.status === 200) {
      const pokemonNames = res.data.results;
      const pokemonInfoList = await loadPokemon(pokemonNames)
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
    if(!query){
      if(page>=pokemonCount/4) return
      setPage(page+1)
    }else{
      if(filteredPage>=filteredPokemonCount/4) return
      setFilteredPage(filteredPage+1)
    }
  }

  const changePageBackwards=()=>{
    if(!query){
      if(page<=0) return
      setPage(page-1)
    }else{
      if(filteredPage<=0) return

      setFilteredPage(filteredPage-1)

    }

  }

  useEffect(() => {
    loadAllPokemon();
  }, []);

  useEffect(()=>{
    loadPokemonList(page)

  },[page])

  useEffect(()=>{
    debugger
    loadFilteredPokemonList(filteredPokemonNames,filteredPage)

  },[filteredPage])

 const callbackSetSelectedPokemon=(selected)=>{
    setSelectedPokemon(selected)
 }

 const disableForwardButton=()=>{
  if(!query) return page>=(pokemonCount/4)-1 || !loaded
  return filteredPage>=(filteredPokemonCount/4)-1 || !loaded
 }

 const disableBackwardsButton=()=>{
  if(!query) return page<=0 || !loaded
  return filteredPage<=0 || !loaded

}

  return (
    <div>
      {/* {JSON.stringify(pokemonList)} */}
      <div style={{ textAlign: "center",height:"90px" }}>
        <h1 style={{margin:"0"}}>Listado de Pokemon</h1>
      </div>
      <div className={styles.pokemonSearcherContainer}>
        <div className={styles.searchBarContainer}>
          <SearchBar value={query} setQuery={setQuery} />
        </div>
        <div className={styles.cardListContainer}>
          <CardList callbackSetSelectedPokemon={(selected)=>{callbackSetSelectedPokemon(selected)}} list={query? pokemonFilteredList : pokemonList} selectedPokemon={selectedPokemon}/>
        </div>
        <div className={styles.selectedCardContainer}>
          <SelectedCard selectedPokemon={selectedPokemon}/>
        </div>
        <div className={styles.backwardsButtonContainer}>
          <button className="primary" onClick={()=>{changePageBackwards()}} disabled={disableBackwardsButton()}>&lt; Atras</button>
        </div>
        <div className={styles.forwardsButtonContainer}>
          <button className="primary" onClick={()=>{changePageForwards()}} disabled={disableForwardButton()}>Siguiente &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default PokemonSearcher;

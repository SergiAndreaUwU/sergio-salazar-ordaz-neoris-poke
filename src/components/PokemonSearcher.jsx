import CardList from "./CardList";
import SearchBar from "./SearchBar";
import SelectedCard from "./SelectedCard";
import styles from "./PokemonSearcher.module.css";

const PokemonSearcher = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Listado de Pokemon</h1>
      </div>
      <div className={styles.pokemonSearcherContainer}>
        <div className={styles.searchBarContainer}>
          <SearchBar />
        </div>
        <div className={styles.cardListContainer}>
          <CardList />
        </div>
        <div className={styles.selectedCardContainer}>
          <SelectedCard />
        </div>
        <div className={styles.backwardsButtonContainer}>
          <button className="primary">&lt; Atras</button>
        </div>
        <div className={styles.forwardsButtonContainer}>
          <button className="primary">Siguiente &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default PokemonSearcher;

import styles from "./CardList.module.css";
import Card from "./Card";

const CardList = ({ list, callbackSetSelectedPokemon, selectedPokemon }) => {
  return (
    <div className={styles.cardList}>
      {list.map((element) => (
        <Card
          key={element.name}
          callbackSetSelectedPokemon={callbackSetSelectedPokemon}
          element={element}
          selectedPokemon={selectedPokemon}
        />
      ))}
    </div>
  );
};

export default CardList;

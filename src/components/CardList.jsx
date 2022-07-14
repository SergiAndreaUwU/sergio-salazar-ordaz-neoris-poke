import styles from "./CardList.module.css";
import Card from "./Card";

const CardList = ({ list, callbackSetSelectedPokemon }) => {
  return (
    <div className={styles.cardList}>
      {list.map((element) => (
        <Card
          callbackSetSelectedPokemon={callbackSetSelectedPokemon}
          element={element}
        />
      ))}
    </div>
  );
};

export default CardList;

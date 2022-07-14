import styles from "./SelectedCard.module.css";
import PokemonImage from "../icons/PokemonImage";

import Sprite from "../icons/Sprite";

const SelectedCard = ({selectedPokemon}) => {

  return (
    <div className={styles.selectedCard}>
      <div className={styles.selectedCardContainer}>
        <div style={{ flexBasis: "35%", padding: "20px" }}>
          <div
            style={{
              border: "1px solid red",
              height: "100%",
              width: "100%",
              display: "flex",
              backgroundColor: "#FFFFFF",
            }}
          >
            {/* <NotFoundIcon /> */}
            <PokemonImage width="14vh" height="15vh" src={selectedPokemon.image}/>
          </div>
        </div>
        <div style={{ flexBasis: "13%", textAlign: "center",fontSize:"2rem",fontWeight:"bolder" }}>
        # {selectedPokemon.id}
          <br />
          {selectedPokemon.name}
        </div>
        <div style={{ flexBasis: "13%" }}>
          <h5 style={{ margin: "0" }}>Tipos</h5>
          {selectedPokemon.types}
        </div>
        <div style={{ flexBasis: "13%" }}>
          <h5 style={{ margin: "0" }}>Peso</h5>
          {selectedPokemon.weight}
        </div>
        <div style={{ flexBasis: "13%" }}>
          <h5 style={{ margin: "0" }}>Sprites</h5>
          <div
            style={{
              display: "flex",
              flexFlow: "row nowrap",
              marginTop: "5px",
            }}
          >
            {selectedPokemon?.sprites?.map((el, index) => {
              if (index <10) return <Sprite src={el}/>;
              return ""
            })}
          </div>
        </div>
        <div style={{ flexBasis: "13%" }}>
          <h5 style={{ margin: "0" }}>Movimientos</h5>
          <div style={{overflowX:"scroll",width:"25vw",height:"40px",whiteSpace: "nowrap"}}>
            {selectedPokemon.moves}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;

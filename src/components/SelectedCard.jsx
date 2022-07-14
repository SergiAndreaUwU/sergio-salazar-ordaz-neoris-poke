import styles from "./SelectedCard.module.css";
import PokemonImage from "../icons/PokemonImage";

import Sprite from "../icons/Sprite";

const SelectedCard = () => {
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
            <PokemonImage width="14vh" height="15vh" />
          </div>
        </div>
        <div style={{ flexBasis: "13%", textAlign: "center" }}>
          ID
          <br />
          NOMBRE
        </div>
        <div style={{ flexBasis: "13%" }}>
          <h5 style={{ margin: "0" }}>Tipos</h5>
          asd
        </div>
        <div style={{ flexBasis: "13%" }}>
          <h5 style={{ margin: "0" }}>Peso</h5>
          asd
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
            {[1, 2, 3,4,5,6,7,8,9,10,11,12,13,14].map((el, index) => {
              if (index <10) return <Sprite />;

              return ""
            })}
          </div>
        </div>
        <div style={{ flexBasis: "13%" }}>
          <h5 style={{ margin: "0" }}>Movimientos</h5>
          <div style={{overflowX:"auto",width:"25vw"}}>
            asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;

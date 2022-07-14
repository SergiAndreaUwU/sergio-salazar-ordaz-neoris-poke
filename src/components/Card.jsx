import styles from "./Card.module.css";
import NotFoundIcon from "../icons/NotFoundIcon";
import PokemonImage from "../icons/PokemonImage"

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div
        style={{
          width: "80%",
          margin: "auto",
          height: "90%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          textAlign: "center",
        }}
      >
        <div
          style={{ flexBasis: "70%", border: "1px solid red", display: "flex",backgroundColor:"#FFFFFF" }}
        >
          <PokemonImage/>
        </div>
        <div style={{ flexBasis: "15%" }}>id</div>
        <div style={{ flexBasis: "15%" }}>name</div>
      </div>
    </div>
  );
};

export default Card;

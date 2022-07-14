import PokemonImage from "../icons/PokemonImage";
import randomRgbaColorFactory from "../globalFunctions/randomRgbaColor";
import { useState } from "react";

const Card = ({ element, callbackSetSelectedPokemon, selectedPokemon }) => {
  const [color] = useState(() => {
    const color = randomRgbaColorFactory();

    return {
      colorBackground: color("0.5"),
      colorBorder: color("1"),
    };
  });

  return (
    <div
      className="card"
      style={{
        backgroundColor:
          selectedPokemon.id === element.id ? "gray" : color.colorBackground,
        border: `2px solid ${color.colorBorder}`,
      }}
      onClick={() => {
        callbackSetSelectedPokemon(element);
      }}
    >
      <div
        style={{
          width: "80%",
          margin: "auto",
          height: "90%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        <div
          style={{
            flexBasis: "70%",
            display: "flex",
            backgroundColor: "#FFFFFF",
          }}
        >
          <PokemonImage src={element.image} />
        </div>
        <div style={{ flexBasis: "15%" }}># {element.id}</div>
        <div style={{ flexBasis: "15%" }}>{element.name}</div>
      </div>
    </div>
  );
};

export default Card;

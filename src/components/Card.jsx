import PokemonImage from "../icons/PokemonImage"

const Card = ({element,callbackSetSelectedPokemon,selectedPokemon}) => {

  return (
    <div className="card" style={{backgroundColor:selectedPokemon.id===element.id && "gray"}} onClick={()=>{callbackSetSelectedPokemon(element)}} >
      <div
        style={{
          width: "80%",
          margin: "auto",
          height: "90%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          textAlign: "center",
          fontSize:"2rem"
        }}
      >
        <div
          style={{ flexBasis: "70%", border: "1px solid red", display: "flex",backgroundColor:"#FFFFFF" }}
        >
          <PokemonImage src={element.image}/>
        </div>
        <div style={{ flexBasis: "15%" }}># {element.id}</div>
        <div style={{ flexBasis: "15%" }}>{element.name}</div>
      </div>
    </div>
  );
};

export default Card;

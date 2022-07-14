import axios from "axios";

function getPokemonByName(pokemonName) {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
      validateStatus: function (status) {
        return status < 500;
      },
    })
    .then((data) => data)
    .catch((e) => {
      console.error("error ocurred at getPokemonByName:" + e);
    });
}

export default getPokemonByName;

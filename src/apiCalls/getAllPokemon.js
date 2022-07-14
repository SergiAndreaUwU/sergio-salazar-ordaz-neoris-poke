import axios from "axios";

function getAllPokemon() {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon/", {
      validateStatus: function (status) {
        return status < 500;
      },
    })
    .then((data) => data)
    .catch((e) => {
      console.error("error ocurred at getAllPokemon:" + e);
    });
}

export default getAllPokemon;

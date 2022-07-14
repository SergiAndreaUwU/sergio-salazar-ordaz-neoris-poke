import axios from "axios";

function getPokemonListWithOffset(page = 0) {
  const limit = 4;
  const offset = page * limit;
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`, {
      validateStatus: function (status) {
        return status < 500;
      },
    })
    .then((data) => data)
    .catch((e) => {
      console.error("error ocurred at getPokemonListWithOffset:" + e);
    });
}

export default getPokemonListWithOffset;

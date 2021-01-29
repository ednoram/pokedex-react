import axios from "axios";

export const setPokemons = (pokemons) => ({
  type: "SET_POKEMONS",
  pokemons: pokemons,
});

export const fetchPokemonsData = () => (dispatch) => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=898")
    .then((response) => {
      dispatch(setPokemons(response.data.results));
    });
};

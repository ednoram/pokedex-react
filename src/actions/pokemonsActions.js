import axios from "axios";

const fetchStart = () => ({
  type: "FETCH_START",
});

const fetchFail = () => ({
  type: "FETCH_FAIL",
});

const fetchSucceed = (pokemons) => ({
  type: "FETCH_SUCCEED",
  pokemons: pokemons,
});

export const fetchPokemonsData = () => (dispatch) => {
  dispatch(fetchStart());

  axios
    .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=898")
    .then((response) => {
      dispatch(fetchSucceed(response.data.results));
    })
    .catch((error) => dispatch(fetchFail(error)));
};

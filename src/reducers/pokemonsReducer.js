const pokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SUCCEED":
      return action.pokemons;
    case "FETCH_FAIL":
      throw new Error("Couldn't fetch pokemons data.");
    default:
      return state;
  }
};

export default pokemonsReducer;

const pokemonsReducer = (state = [], { type, pokemons, error }) => {
  switch (type) {
    case "FETCH_SUCCEED":
      return pokemons;
    case "FETCH_FAIL":
      throw new Error(error);
    default:
      return state;
  }
};

export default pokemonsReducer;

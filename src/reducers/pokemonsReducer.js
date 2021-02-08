const pokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SUCCEED":
      return action.pokemons;
    case "FETCH_FAIL":
      throw new Error(action.error);
    default:
      return state;
  }
};

export default pokemonsReducer;

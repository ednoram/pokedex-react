const pokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return action.pokemons;
    default:
      return state;
  }
};

export default pokemonsReducer;

import { createSelector } from "reselect";

const getPokemonsState = (state) => state.pokemons;

export const selectAllPokemons = createSelector(
  getPokemonsState,
  (pokemons) => pokemons
);

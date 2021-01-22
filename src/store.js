import { combineReducers, createStore } from "@reduxjs/toolkit";

import { pokemonsReducer, paginationReducer } from "./reducers";

const reducers = combineReducers({
  pokemons: pokemonsReducer,
  pagination: paginationReducer,
});

const store = createStore(reducers);

export default store;

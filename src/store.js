import { combineReducers, createStore } from "@reduxjs/toolkit";

import { searchReducer, pokemonsReducer, paginationReducer } from "./reducers";

const reducers = combineReducers({
  search: searchReducer,
  pokemons: pokemonsReducer,
  pagination: paginationReducer,
});

const store = createStore(reducers);

export default store;

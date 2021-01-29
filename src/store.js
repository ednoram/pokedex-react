import {
  createStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { searchReducer, pokemonsReducer, paginationReducer } from "./reducers";

const reducers = combineReducers({
  search: searchReducer,
  pokemons: pokemonsReducer,
  pagination: paginationReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

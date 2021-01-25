import {
  createStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { searchReducer, pokemonsReducer, paginationReducer } from "./reducers";

const reducers = combineReducers({
  search: searchReducer,
  pokemons: pokemonsReducer,
  pagination: paginationReducer,
});

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, middleware);

export default store;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import "./styles/app.scss";
import {
  Searchbox,
  Pagination,
  PokemonsList,
  ItemsPerPage,
} from "./components";
import { setPokemons } from "./actions/pokemonsActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=898")
      .then((response) => dispatch(setPokemons(response.data.results)));
  }, [dispatch]);

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Pokedex</h1>
        <div className="flexSpaceBetween">
          <Searchbox />
          <ItemsPerPage />
        </div>
        <PokemonsList />
        <Pagination />
      </div>
    </div>
  );
}

export default App;

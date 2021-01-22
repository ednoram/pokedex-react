import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import "./styles/app.scss";
import { PokemonsList, Pagination } from "./components";
import { setPokemons } from "./actions/pokemonsActions";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const pagination = useSelector((state) => state.pagination);
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
        <PokemonsList
          pokemons={pokemons.slice(
            pagination.start,
            pagination.start + pagination.step
          )}
        />
        <Pagination />
      </div>
    </div>
  );
}

export default App;

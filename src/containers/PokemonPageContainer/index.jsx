import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import "./pokemon_page_container.scss";

import { PageNotFoundContainer } from "..";

const PokemonPageContainer = () => {
  const pathname = useLocation().pathname;
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonId, setPokemonId] = useState();

  const pokemons = useSelector((state) => state.pokemons);

  const pokemon = pokemons.find(
    (pokemon) => pokemon.name === pathname.slice(1)
  );

  useEffect(() => {
    if (!pokemon) return;

    axios.get(pokemon.url).then((response) => {
      setPokemonData(response.data);
      setPokemonId(`00${response.data.id}`.slice(-3));
    });

    return () => setPokemonData(null);
  }, [pokemon]);

  return pokemon ? (
    <div className="pokemon_page_container">
      <div className="container">
        <div>
          <h2 className="pokemon_name">{pokemon.name}</h2>
          <p className="pokemon_id">#{pokemonId}</p>
        </div>
        <div className="pokemon_info">
          {pokemonId && (
            <img
              alt="pokemon avatar"
              className="pokemon_avatar"
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png`}
            />
          )}
        </div>
      </div>
    </div>
  ) : (
    <PageNotFoundContainer />
  );
};

export default PokemonPageContainer;

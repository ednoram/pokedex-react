import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import "./pokemon_page_container.scss";
import PokemonStats from "../../components/PokemonStats";
import PokemonInfo from "../../components/PokemonInfo";

import { PageNotFoundContainer } from "..";

const PokemonPageContainer = () => {
  const pathname = useLocation().pathname;
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonId, setPokemonId] = useState();

  const pokemons = useSelector((state) => state.pokemons);

  const pokemon = pokemons.find(
    (pokemon) => pokemon.name === pathname.slice(1)
  );

  const pageTitle =
    pokemon?.name.charAt(0).toUpperCase() +
    pokemon?.name.slice(1) +
    " | Pokédex";

  useEffect(() => {
    if (!pokemon) return;

    axios.get(pokemon.url).then((response) => {
      setPokemonData(response.data);
      setPokemonId(`00${response.data.id}`.slice(-3));
    });

    return () => setPokemonData(null);
  }, [pokemon]);

  return pokemon && pokemonData ? (
    <>
      <Helmet>
        <meta name="description" content={`${pageTitle}`} />
        <title>{pageTitle}</title>
      </Helmet>
      <div className="pokemon_page_container">
        <div className="container">
          <div>
            <h2 className="pokemon_name">{pokemon.name}</h2>
            <p className="pokemon_id">#{pokemonId}</p>
          </div>
          <div className="content">
            <div>
              {pokemonId && (
                <img
                  alt="pokemon avatar"
                  className="pokemon_img"
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png`}
                />
              )}
            </div>
            <PokemonInfo pokemonData={pokemonData} />
            <PokemonStats pokemonData={pokemonData} />
          </div>
        </div>
      </div>
    </>
  ) : (
    <PageNotFoundContainer />
  );
};

export default PokemonPageContainer;

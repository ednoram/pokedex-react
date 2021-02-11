import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import "./pokemon_page_container.scss";

import { PageNotFoundContainer } from "..";

import HelmetLayout from "../../layouts/HelmetLayout";
import { PokemonTable, PokemonEvolutions } from "../../components";
import { ReactComponent as RightArrow } from "../../assets/right_arrow.svg";

const PokemonPageContainer = () => {
  const pathname = useLocation().pathname;
  const [pokemonId, setPokemonId] = useState();
  const [pokemonData, setPokemonData] = useState({});
  const [fetchFinished, setFetchFinished] = useState(false);

  const pokemons = useSelector((state) => state.pokemons);

  const pokemon = pokemons.find(
    (pokemon) => pokemon.name === pathname.slice(1)
  );

  const pageTitle =
    pokemon?.name.charAt(0).toUpperCase() +
    pokemon?.name.slice(1) +
    " | Pokédex";

  const PrevBtn = () => {
    const prevPokemonName = pokemons[pokemonData?.id - 2]?.name;

    return pokemonData.id !== 1 ? (
      <Link to={"/" + prevPokemonName}>
        <div className="prev_next_btn flex_center" role="button">
          <RightArrow className="flip" />
        </div>
      </Link>
    ) : (
      <div
        className="prev_next_btn"
        style={{ backgroundColor: "transparent" }}
      ></div>
    );
  };

  const NextBtn = () => {
    const nextPokemonName = pokemons[pokemonData?.id]?.name;

    return pokemonData.id !== pokemons.length ? (
      <Link to={"/" + nextPokemonName}>
        <div className="prev_next_btn flex_center" role="button">
          <RightArrow />
        </div>
      </Link>
    ) : (
      <div
        className="prev_next_btn"
        style={{ backgroundColor: "transparent" }}
      ></div>
    );
  };

  useEffect(() => {
    setFetchFinished(false);
    if (!pokemon) return;

    axios.get(pokemon.url).then((response) => {
      setPokemonData(response.data);
      setPokemonId(`00${response.data.id}`.slice(-3));
      setFetchFinished(true);
    });
  }, [pokemon]);

  return pokemon && pokemonData ? (
    <HelmetLayout title={pageTitle} metaDescription={pageTitle}>
      <div className="pokemon_page_container">
        <div className="container">
          <div className="top_btns">
            <PrevBtn />
            <Link to="/">
              <div className="home_btn" role="button">
                <RightArrow className="flip" />
                <p>Home</p>
              </div>
            </Link>
            <NextBtn />
          </div>
          <div className="pokemon_page_header">
            <div className="title_and_btns flex_center">
              <PrevBtn />
              <h2 className="pokemon_name">{pokemon.name}</h2>
              <NextBtn />
            </div>
            <p className="pokemon_id">#{pokemonId}</p>
          </div>
          {fetchFinished ? (
            <div className="content">
              <div className="pokemon_img_container">
                {pokemonId && (
                  <img
                    alt="pokemon avatar"
                    className="pokemon_img"
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png`}
                  />
                )}
              </div>
              <div className="pokemon_info_tables">
                <PokemonTable pokemonData={pokemonData} type="info" />
                <PokemonTable pokemonData={pokemonData} type="stats" />
              </div>
              <PokemonEvolutions pokemonData={pokemonData} />
            </div>
          ) : (
            <p className="loading_p">Loading...</p>
          )}
        </div>
      </div>
    </HelmetLayout>
  ) : (
    <PageNotFoundContainer />
  );
};

export default PokemonPageContainer;

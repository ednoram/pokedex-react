import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import styles from "./pokemon_evolutions.module.scss";

import { PokemonCard } from "..";

import { selectAllPokemons } from "../../selectors";
import { ReactComponent as RightArrow } from "../../assets/right_arrow.svg";

const PokemonEvolution = ({ pokemonData }) => {
  const [evolutionPokemons, setEvolutionPokemons] = useState([]);

  const pokemons = useSelector(selectAllPokemons);

  const evolutions = evolutionPokemons.map((pokemon, index) => [
    <li className="flex_center" key={nanoid()}>
      <PokemonCard pokemon={pokemon} className={styles.pokemon_card} />
    </li>,
    <li className="flex_center" key={nanoid()}>
      {index !== evolutionPokemons.length - 1 && (
        <RightArrow className={styles.arrow} />
      )}
    </li>,
  ]);

  useEffect(() => {
    if (!pokemonData.species) return;

    axios.get(pokemonData.species.url).then((response) => {
      axios.get(response.data.evolution_chain.url).then((response) => {
        const chain = response.data.chain;

        const names = [
          chain?.species.name,
          chain.evolves_to[0]?.species.name,
          chain.evolves_to[0]?.evolves_to[0]?.species.name,
        ];

        names.forEach((name) => {
          const pokemon = pokemons.find((pokemon) =>
            pokemon.name.includes(name)
          );

          if (!pokemon?.url) return;

          setEvolutionPokemons((pokemons) =>
            [...pokemons, pokemon].filter(() => !pokemons.includes(pokemon))
          );
        });
      });
    });

    return () => setEvolutionPokemons([]);
  }, [pokemonData, pokemons]);

  return (
    <div className={styles.pokemon_evolutions}>
      <h3>Evolutions</h3>
      {evolutionPokemons[0] ? (
        <ul className={styles.evolutions_list}>{evolutions}</ul>
      ) : (
        <p className={styles.loading_p + " loading_p"}>Loading...</p>
      )}
    </div>
  );
};

PokemonEvolution.propTypes = {
  pokemonData: PropTypes.object,
};

PokemonEvolution.defaultProps = {
  pokemonData: {},
};

export default PokemonEvolution;

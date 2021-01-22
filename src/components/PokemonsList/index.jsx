import React from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import "./pokemons_list.scss";
import PokemonItem from "./PokemonItem";

const PokemonsList = ({ pokemons }) => {
  return (
    <div className="pokemons_list">
      {pokemons.map((pokemon) => (
        <PokemonItem pokemon={pokemon} key={nanoid()} />
      ))}
    </div>
  );
};

PokemonsList.propTypes = {
  pokemons: PropTypes.array,
};

PokemonsList.defaultProps = {
  pokemons: [],
};

export default PokemonsList;

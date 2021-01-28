import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import "./pokemon_info.scss";

const PokemonInfo = ({ pokemonData }) => {
  const cmToFeetInches = (n) => {
    const realFeet = (n * 0.3937) / 12;
    const feet = Math.floor(realFeet);
    const inches = Math.round((realFeet - feet) * 12);
    return feet + "'" + inches + '"';
  };

  const pokemonWeight =
    pokemonData.weight / 10 +
    "kg (" +
    Math.round(pokemonData.weight * 0.220462262185 * 10) / 10 +
    "lbs)";

  const pokemonHeight =
    pokemonData.height / 10 +
    "m (" +
    cmToFeetInches(pokemonData.height * 10) +
    ")";

  const pokemonTypes =
    pokemonData.types &&
    pokemonData.types.map((type) => <p key={nanoid()}>{type.type.name}</p>);

  const pokemonAbilities =
    pokemonData.abilities &&
    pokemonData.abilities.map((ability) => (
      <p key={nanoid()}>
        {ability.ability.name}
        {ability.is_hidden && " (hidden)"}
      </p>
    ));

  return (
    <div className="pokemon_info">
      <h3>Basic Info</h3>
      <div className="pokemon_info_grid">
        <div>Type:</div>
        <div className="top_right">{pokemonTypes}</div>
        <div>Height:</div>
        <div>{pokemonHeight}</div>
        <div>Weight:</div>
        <div>{pokemonWeight}</div>
        <div className="bottom_left">Abilities:</div>
        <div>{pokemonAbilities}</div>
      </div>
    </div>
  );
};

PokemonInfo.propTypes = {
  pokemonData: PropTypes.object,
};

PokemonInfo.defaultProps = {
  pokemonData: {},
};

export default PokemonInfo;

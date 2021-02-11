import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import styles from "./pokemon_info_grid.module.scss";

const PokemonInfoGrid = ({ pokemonData, className }) => {
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
    <div className={[className, styles.pokemon_info_grid].join(" ")}>
      <div>Type:</div>
      <div className={styles.top_right}>{pokemonTypes}</div>
      <div>Height:</div>
      <div>{pokemonHeight}</div>
      <div>Weight:</div>
      <div>{pokemonWeight}</div>
      <div className={styles.bottom_left}>Abilities:</div>
      <div>{pokemonAbilities}</div>
    </div>
  );
};

PokemonInfoGrid.propTypes = {
  className: PropTypes.string,
  pokemonData: PropTypes.object,
};

PokemonInfoGrid.defaultProps = {
  className: "",
  pokemonData: {},
};

export default PokemonInfoGrid;

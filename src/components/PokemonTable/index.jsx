import React from "react";
import PropTypes from "prop-types";

import PokemonInfoGrid from "./PokemonInfoGrid";
import PokemonStatsGrid from "./PokemonStatsGrid";

import "./pokemon_table.scss";

const PokemonTable = ({ type, pokemonData }) => {
  const Grid = () => {
    switch (type) {
      case "info":
        return <PokemonInfoGrid pokemonData={pokemonData} />;
      case "stats":
        return <PokemonStatsGrid pokemonData={pokemonData} />;
      default:
        return <></>;
    }
  };

  return (
    <div className="pokemon_table">
      <div className="pokemon_table_content">
        <h3>{type[0].toUpperCase() + type.slice(1)}</h3>
        <Grid />
      </div>
    </div>
  );
};

PokemonTable.propTypes = {
  type: PropTypes.string.isRequired,
  pokemonData: PropTypes.object,
};

PokemonTable.defaultProps = {
  type: "",
  pokemonData: {},
};

export default PokemonTable;

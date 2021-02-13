import React from "react";
import PropTypes from "prop-types";

import PokemonInfoGrid from "./PokemonInfoGrid";
import styles from "./pokemon_table.module.scss";
import PokemonStatsGrid from "./PokemonStatsGrid";

const PokemonTable = ({ type, pokemonData }) => {
  const Grid = () => {
    switch (type) {
      case "info":
        return (
          <PokemonInfoGrid
            pokemonData={pokemonData}
            className={styles.pokemon_table_grid}
          />
        );
      case "stats":
        return (
          <PokemonStatsGrid
            pokemonData={pokemonData}
            className={styles.pokemon_table_grid}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <div className={styles.pokemon_table}>
      <div className={styles.pokemon_table_content}>
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

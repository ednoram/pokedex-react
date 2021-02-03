import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import "./pokemon_stats_grid.scss";
import StatBlocks from "./StatBlocks";

const PokemonStatsGrid = ({ pokemonData }) => {
  const maxStatValues = {
    hp: 255,
    speed: 200,
    attack: 200,
    defense: 230,
    "special-attack": 200,
    "special-defense": 230,
  };

  return pokemonData.stats ? (
    <div className="pokemon_table_grid pokemon_stats_grid">
      {pokemonData.stats.map((stat, index) => [
        <div
          key={nanoid()}
          className={
            "grid_item " +
            (index === pokemonData.stats.length - 1
              ? "border_bottom_left_radius-16"
              : "")
          }
        >
          {stat.stat.name + ": "}
        </div>,
        <div
          key={nanoid()}
          className={
            "flex_space_between grid_item " +
            (index === 0 ? "border_top_right_radius-16" : "")
          }
        >
          <StatBlocks
            percentage={(stat.base_stat / maxStatValues[stat.stat.name]) * 100}
          />
        </div>,
      ])}
    </div>
  ) : null;
};

PokemonStatsGrid.propTypes = {
  pokemonData: PropTypes.object,
};

PokemonStatsGrid.defaultProps = {
  pokemonData: {},
};

export default PokemonStatsGrid;

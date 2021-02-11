import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import StatBlocks from "./StatBlocks";
import styles from "./pokemon_stats_grid.module.scss";

const PokemonStatsGrid = ({ pokemonData, className }) => {
  const maxStatValues = {
    hp: 255,
    speed: 200,
    attack: 200,
    defense: 230,
    "special-attack": 200,
    "special-defense": 230,
  };

  return pokemonData.stats ? (
    <div className={[className, styles.pokemon_stats_grid].join(" ")}>
      {pokemonData.stats.map((stat, index) => [
        <div
          key={nanoid()}
          className={
            styles.grid_item +
            (index === pokemonData.stats.length - 1
              ? " border_bottom_left_radius-16"
              : "")
          }
        >
          {stat.stat.name + ": "}
        </div>,
        <div
          key={nanoid()}
          className={
            "flex_space_between " +
            styles.grid_item +
            (index === 0 ? " border_top_right_radius-16" : "")
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
  className: PropTypes.string,
  pokemonData: PropTypes.object,
};

PokemonStatsGrid.defaultProps = {
  className: "",
  pokemonData: {},
};

export default PokemonStatsGrid;

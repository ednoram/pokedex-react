import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import "./pokemon_stats.scss";
import StatBlocks from "./StatBlocks";

const PokemonStats = ({ pokemonData }) => {
  const maxStatValues = {
    hp: 255,
    speed: 200,
    attack: 200,
    defense: 230,
    "special-attack": 200,
    "special-defense": 230,
  };

  return pokemonData.stats ? (
    <div className="pokemon_stats">
      <h3>Stats</h3>
      <div className="pokemon_stats_grid">
        {pokemonData.stats.map((stat, index) => {
          const percentage =
            (stat.base_stat / maxStatValues[stat.stat.name]) * 100;

          return [
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
              <StatBlocks percentage={percentage} />
            </div>,
          ];
        })}
      </div>
    </div>
  ) : null;
};

PokemonStats.propTypes = {
  pokemonData: PropTypes.object,
};

PokemonStats.defaultProps = {
  pokemonData: {},
};

export default PokemonStats;

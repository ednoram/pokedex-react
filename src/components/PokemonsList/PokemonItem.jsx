import React, { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const PokemonItem = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    axios.get(pokemon.url).then((response) => setPokemonData(response.data));
  }, [pokemon]);

  return (
    <div className="pokemon_item">
      <img
        alt="pokemon avatar"
        className="pokemon_avatar"
        src={pokemonData.sprites?.front_default}
      />
      <div className="pokemon_info">
        <p className="pokemon_id">{"#" + `00${pokemonData.id}`.slice(-3)}</p>
        <h3 className="pokemon_name">{pokemonData.name}</h3>
        <div className="pokemon_types">
          {pokemonData.types &&
            pokemonData.types.map((type) => (
              <div key={nanoid()}>{type.type.name}</div>
            ))}
        </div>
      </div>
    </div>
  );
};

PokemonItem.propTypes = {
  pokemon: PropTypes.object,
};

PokemonItem.defaultProps = {
  pokemon: {},
};

export default PokemonItem;

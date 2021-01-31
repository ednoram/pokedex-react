import React, { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./pokemon_item.scss";

const PokemonItem = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonId, setPokemonId] = useState();

  useEffect(() => {
    axios.get(pokemon.url).then((response) => {
      setPokemonData(response.data);
      setPokemonId(`00${response.data.id}`.slice(-3));
    });

    return () => setPokemonData(null);
  }, [pokemon]);

  return (
    <div className="pokemon_item">
      <p className="pokemon_id">{"#" + `00${pokemonData?.id}`.slice(-3)}</p>

      <Link className="pokemon_link" to={`/${pokemon.name.toLowerCase()}`}>
        {pokemonId && (
          <div
            className="pokemon_avatar_div"
            style={{
              backgroundImage: `URL(https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png)`,
            }}
          />
        )}
      </Link>
      <div className="pokemon_item_info">
        <h3 className="pokemon_name">{pokemon.name}</h3>
        <div className="pokemon_types">
          {pokemonData?.types &&
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

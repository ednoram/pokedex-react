import React, { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./pokemon_card.scss";

const PokemonCard = ({ pokemon }) => {
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
    <div className="pokemon_card">
      <p className="pokemon_id">{"#" + `00${pokemonData?.id}`.slice(-3)}</p>

      <Link className="pokemon_link" to={`/${pokemon.name.toLowerCase()}`}>
        {pokemonId && (
          <div
            className="pokemon_avatar_div"
            onClick={() => window.scroll(0, 0)}
            style={{
              backgroundImage: `URL(https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png)`,
            }}
          />
        )}
      </Link>
      <div className="pokemon_card_info">
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

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
};

PokemonCard.defaultProps = {
  pokemon: {},
};

export default PokemonCard;

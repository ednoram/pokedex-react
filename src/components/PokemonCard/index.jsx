import React, { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./pokemon_card.module.scss";

const PokemonCard = ({ pokemon, className }) => {
  const [pokemonData, setPokemonData] = useState({});

  const pokemonId = `00${pokemonData?.id}`.slice(-3);

  useEffect(() => {
    axios.get(pokemon.url).then((response) => {
      setPokemonData(response.data);
    });

    return () => setPokemonData(null);
  }, [pokemon]);

  return Number(pokemonId) && pokemonData ? (
    <div className={[styles.pokemon_card, className].join(" ")}>
      <p className={styles.pokemon_id}>{"#" + pokemonId.slice(-3)}</p>

      <Link
        className={styles.pokemon_link}
        to={`/${pokemon.name.toLowerCase()}`}
      >
        <div
          onClick={() => window.scroll(0, 0)}
          className={styles.pokemon_avatar_div}
          style={{
            backgroundImage: `URL(https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png)`,
          }}
        />
      </Link>
      <div className={styles.pokemon_card_info}>
        <h3 className={styles.pokemon_name}>{pokemon.name}</h3>
        <div className={styles.pokemon_types}>
          {pokemonData.types.map((type) => (
            <div key={nanoid()}>{type.type.name}</div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className={[styles.pokemon_card, className, " flex_center"].join(" ")}>
      <p className="loading_p">Loading...</p>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
  className: PropTypes.string,
};

PokemonCard.defaultProps = {
  pokemon: {},
  className: "",
};

export default PokemonCard;

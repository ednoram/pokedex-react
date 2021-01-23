import React from "react";
import { nanoid } from "nanoid";
import { useSelector, shallowEqual } from "react-redux";

import "./pokemons_list.scss";
import PokemonItem from "./PokemonItem";

const PokemonsList = () => {
  const { pokemons, pagination, searchValue } = useSelector(
    (state) => ({
      pokemons: state.pokemons,
      pagination: state.pagination,
      searchValue: state.search.value,
    }),
    shallowEqual
  );

  const filteredPokemons = searchValue
    ? pokemons.filter((pokemon) => pokemon.name.startsWith(searchValue))
    : pokemons.slice(pagination.start, pagination.start + pagination.step);

  return (
    <div className="pokemons_list">
      {filteredPokemons.length < 1 ? (
        <p>Nothing was found.</p>
      ) : (
        filteredPokemons.map((pokemon) => (
          <PokemonItem pokemon={pokemon} key={nanoid()} />
        ))
      )}
    </div>
  );
};

export default PokemonsList;

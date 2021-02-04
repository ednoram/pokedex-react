import React from "react";
import { nanoid } from "nanoid";
import { useSelector, shallowEqual } from "react-redux";

import "./pokemons_list.scss";
import { PokemonCard } from "..";

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
    ? pokemons.filter((pokemon) =>
        pokemon.name.startsWith(searchValue.toLowerCase())
      )
    : pokemons.slice(pagination.start, pagination.start + pagination.step);

  return filteredPokemons.length < 1 ? (
    <p className="nothing_was_found">Nothing was found.</p>
  ) : (
    <div className="pokemons_list">
      {filteredPokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={nanoid()} />
      ))}
    </div>
  );
};

export default PokemonsList;

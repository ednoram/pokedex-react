import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import "./autocomplete.scss";

import {
  changeSearchValue,
  setShowAutoComplete,
} from "../../../actions/searchActions";

const AutoComplete = ({ inputRef }) => {
  const { pokemons, searchValue, showAutoComplete } = useSelector(
    (state) => ({
      pokemons: state.pokemons,
      searchValue: state.search.value,
      showAutoComplete: state.search.showAutoComplete,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const suggestions = pokemons
    .filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(searchValue.trim().toLowerCase())
    )
    .slice(0, 5)
    .map(
      (pokemon) =>
        pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)
    );

  const handleClick = (pokemonName) => {
    inputRef.current.focus();
    dispatch(changeSearchValue(pokemonName));
    setTimeout(() => dispatch(setShowAutoComplete(false)));
  };

  return (
    showAutoComplete && (
      <div className="autocomplete">
        <ul>
          {suggestions.map((name) => (
            <li
              role="button"
              key={nanoid()}
              className="list_item"
              onClick={() => handleClick(name)}
            >
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

AutoComplete.propTypes = {
  inputRef: PropTypes.object,
};

AutoComplete.defaultProps = {
  inputRef: {},
};

export default AutoComplete;

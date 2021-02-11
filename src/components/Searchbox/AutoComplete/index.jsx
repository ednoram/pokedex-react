import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import styles from "./autocomplete.module.scss";

import {
  setSearchValue,
  setShowAutoComplete,
} from "../../../actions/searchActions";

const AutoComplete = ({ inputRef }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const { pokemons, searchValue } = useSelector(
    (state) => ({
      pokemons: state.pokemons,
      searchValue: state.search.value,
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
    dispatch(setSearchValue(pokemonName));
    setTimeout(() => dispatch(setShowAutoComplete(false)));
  };

  useEffect(() => {
    const keydownHandler = (e) => {
      switch (e.keyCode) {
        case 13:
          const newValue = suggestions[activeIndex];
          if (newValue) {
            dispatch(setSearchValue(newValue));
          } else {
            dispatch(setShowAutoComplete(false));
          }
          break;
        case 38:
          e.preventDefault();
          setActiveIndex((index) =>
            index === 0 || index === -1 ? suggestions.length - 1 : index - 1
          );
          break;
        case 40:
          e.preventDefault();
          setActiveIndex((index) =>
            index === suggestions.length - 1 ? 0 : index + 1
          );
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", keydownHandler);

    return () => window.removeEventListener("keydown", keydownHandler);
  });

  return (
    <div className={styles.autocomplete}>
      <ul>
        {suggestions.map((name, index) => (
          <li
            role="button"
            key={nanoid()}
            onClick={() => handleClick(name)}
            className={[
              styles.list_item,
              index === activeIndex ? styles.list_item_active : "",
            ].join(" ")}
          >
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

AutoComplete.propTypes = {
  inputRef: PropTypes.object,
};

AutoComplete.defaultProps = {
  inputRef: {},
};

export default AutoComplete;

import React from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

import styles from "./pagination.module.scss";

import {
  selectAllPokemons,
  selectSearchValue,
  selectPaginationStep,
  selectPaginationStart,
} from "../../selectors";
import { nextPage, prevPage, setPage } from "../../actions";
import { ReactComponent as RightArrow } from "../../assets/right_arrow.svg";

const Pagination = () => {
  const pokemons = useSelector(selectAllPokemons);
  const searchValue = useSelector(selectSearchValue);
  const paginationStep = useSelector(selectPaginationStep);
  const paginationStart = useSelector(selectPaginationStart);

  const dispatch = useDispatch();

  const currentPage = Math.floor(paginationStart / paginationStep) + 1;

  const allButtonNames = pokemons
    .slice(0, Math.ceil(pokemons.length / paginationStep))
    .map((pokemon, index) => index + 1);

  const buttonNames = allButtonNames.slice(-5).includes(currentPage)
    ? allButtonNames.slice(-9)
    : allButtonNames.slice(
        Math.max(0, currentPage - 5),
        Math.max(currentPage + 4, 9)
      );

  const nextPageHandler = () => {
    dispatch(nextPage(pokemons.length));
    window.scroll(0, 0);
  };

  const prevPageHandler = () => {
    dispatch(prevPage());
    window.scroll(0, 0);
  };

  const changePageHandler = (page) => {
    dispatch(setPage(page));
    window.scroll(0, 0);
  };

  return !searchValue || pokemons.length <= paginationStep ? (
    <div className={styles.pagination}>
      <button
        onClick={prevPageHandler}
        disabled={currentPage === 1}
        className={styles.pagination_prev_next + " flex_space_between"}
      >
        <RightArrow className="flip" />
        Prev.
      </button>
      {buttonNames.map((name) => (
        <button
          key={nanoid()}
          onClick={() => changePageHandler(name)}
          className={[
            styles.pagination_button,
            currentPage === name ? styles.current_page_btn : "",
          ].join(" ")}
        >
          {name}
        </button>
      ))}
      <button
        onClick={nextPageHandler}
        className={styles.pagination_prev_next + " flex_space_between"}
        disabled={currentPage === allButtonNames[allButtonNames.length - 1]}
      >
        Next
        <RightArrow />
      </button>
    </div>
  ) : null;
};

export default Pagination;

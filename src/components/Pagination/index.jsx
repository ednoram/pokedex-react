import React from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import styles from "./pagination.module.scss";

import { ReactComponent as RightArrow } from "../../assets/right_arrow.svg";
import { nextPage, prevPage, setPage } from "../../actions/paginationActions";

const Pagination = () => {
  const { pokemons, pagination, searchValue } = useSelector(
    (state) => ({
      pokemons: state.pokemons,
      pagination: state.pagination,
      searchValue: state.search.value,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const currentPage = Math.floor(pagination.start / pagination.step) + 1;

  const allButtonNames = pokemons
    .slice(0, Math.ceil(pokemons.length / pagination.step))
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

  return !searchValue || pokemons.length <= pagination.step ? (
    <div className={styles.pagination}>
      <button
        onClick={prevPageHandler}
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
      >
        Next
        <RightArrow />
      </button>
    </div>
  ) : null;
};

export default Pagination;

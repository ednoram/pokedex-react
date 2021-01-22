import React from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

import "./pagination.scss";
import { nextPage, prevPage, setPage } from "../../actions/paginationActions";

const Pagination = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const pagination = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  const currentPage = Math.floor(pagination.start / pagination.step) + 1;

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

  return (
    <div className="pagination">
      <button onClick={prevPageHandler}>Previous</button>
      {pokemons.map(
        (pokemon, index) =>
          index < Math.ceil(pokemons.length / pagination.step) && (
            <button
              key={nanoid()}
              onClick={() => changePageHandler(index + 1)}
              className={currentPage === index + 1 ? "current_page_btn" : ""}
            >
              {index + 1}
            </button>
          )
      )}
      <button onClick={nextPageHandler}>Next</button>
    </div>
  );
};

export default Pagination;

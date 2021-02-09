import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import "./show_more.scss";

import { setStep } from "../../actions/paginationActions";

const ShowMore = () => {
  const { pokemons, paginationStep, searchValue } = useSelector(
    (state) => ({
      pokemons: state.pokemons,
      searchValue: state.search.value,
      paginationStep: state.pagination.step,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    const scrollPosition = window.scrollY;
    dispatch(setStep(paginationStep + 20));
    setTimeout((scrollY = scrollPosition) => window.scroll(0, scrollY), 300);
  };

  return paginationStep < pokemons.length && !searchValue ? (
    <div className="show_more">
      <button className="show_more_btn" onClick={() => handleClick()}>
        Show More
      </button>
    </div>
  ) : null;
};

export default ShowMore;

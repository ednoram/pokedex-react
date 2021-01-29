import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import "./show_more.scss";

import { setStep } from "../../actions/paginationActions";

const ShowMore = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const { pokemons, paginationStep, searchValue } = useSelector(
    (state) => ({
      pokemons: state.pokemons,
      searchValue: state.search.value,
      paginationStep: state.pagination.step,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, scrollPosition);
  }, [scrollPosition, paginationStep, pokemons]);

  const handleClick = () => {
    setScrollPosition(window.scrollY);
    dispatch(setStep(paginationStep + 20));
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

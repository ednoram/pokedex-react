import React from "react";
import { useDispatch } from "react-redux";

import "./searchbox.scss";

import { changeSearchValue } from "../../actions/searchActions";

const Searchbox = () => {
  const dispatch = useDispatch();

  const debounce = (func, wait) => {
    let timeout;

    return (...args) => {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const handleInputChange = debounce(
    (e) => dispatch(changeSearchValue(e.target.value)),
    800
  );

  return (
    <form className="searchbox">
      <input
        type="text"
        className="search_input"
        onChange={handleInputChange}
        placeholder="Search By Name"
      />
    </form>
  );
};

export default Searchbox;

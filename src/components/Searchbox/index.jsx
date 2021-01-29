import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./searchbox.scss";

import { changeSearchValue } from "../../actions/searchActions";
import { ReactComponent as SearchIcon } from "../../assets/search_icon.svg";

const Searchbox = () => {
  const searchValue = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  const searchInputRef = useRef();

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
    500
  );

  useEffect(() => {
    searchInputRef.current.value = searchValue;
  }, [searchValue]);

  return (
    <form className="searchbox" onSubmit={(e) => e.preventDefault()}>
      <SearchIcon className="search_icon" />
      <input
        type="text"
        ref={searchInputRef}
        className="search_input"
        onChange={handleInputChange}
        placeholder="Search By Name"
      />
    </form>
  );
};

export default Searchbox;

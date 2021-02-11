import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import AutoComplete from "./AutoComplete";
import styles from "./searchbox.module.scss";

import {
  setSearchValue,
  setShowAutoComplete,
} from "../../actions/searchActions";
import { useOutsideClick } from "../../hooks";
import { ReactComponent as XIcon } from "../../assets/x_icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/search_icon.svg";

const Searchbox = () => {
  const { searchValue, showAutoComplete } = useSelector(
    (state) => ({
      searchValue: state.search.value,
      showAutoComplete: state.search.showAutoComplete,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const inputRef = useRef();
  const containerRef = useRef();

  useOutsideClick(containerRef, () => dispatch(setShowAutoComplete(false)));

  const debounce = (func, wait) => {
    let timeout;

    return (...args) => {
      const callback = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(callback, wait);
    };
  };

  const handleInputChange = debounce(
    (e) => dispatch(setSearchValue(e.target.value)),
    500
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setShowAutoComplete(false));
  };

  useEffect(() => {
    inputRef.current.value = searchValue;
    !searchValue.trim()
      ? dispatch(setShowAutoComplete(false))
      : dispatch(setShowAutoComplete(true));
  }, [searchValue, dispatch]);

  return (
    <div className={styles.searchbox} ref={containerRef}>
      <form className={styles.searchbox_form} onSubmit={handleSubmit}>
        <SearchIcon className={styles.search_icon} />
        <input
          type="text"
          ref={inputRef}
          onChange={handleInputChange}
          placeholder="Search By Name"
          className={styles.search_input}
          onClick={() => searchValue && dispatch(setShowAutoComplete(true))}
        />
        {searchValue && (
          <XIcon
            className={styles.x_icon}
            onClick={() => dispatch(setSearchValue(""))}
          />
        )}
      </form>
      {showAutoComplete && <AutoComplete inputRef={inputRef} />}
    </div>
  );
};

export default Searchbox;

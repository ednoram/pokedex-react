import React, { useState, useRef } from "react";
import { useSelector, shallowEqual } from "react-redux";

import DropdownItem from "./DropdownItem";
import styles from "./cards_per_page.module.scss";

import { useOutsideClick } from "../../hooks";
import { ReactComponent as RightArrow } from "../../assets/right_arrow.svg";

const CardsPerPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { paginationStep, searchValue } = useSelector(
    (state) => ({
      searchValue: state.search.value,
      paginationStep: state.pagination.step,
    }),
    shallowEqual
  );

  const containerRef = useRef();

  useOutsideClick(containerRef, () => setIsOpen(false));

  const switchIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return !searchValue ? (
    <div className={styles.items_per_page}>
      <p>Showing</p>
      <div
        ref={containerRef}
        onClick={switchIsOpen}
        className={styles.dropdown_item + " flex_space_between"}
      >
        <p>{paginationStep}</p>
        <RightArrow
          className={styles.dropdown_arrow}
          style={{ transform: isOpen ? "rotate(270deg)" : "rotate(90deg)" }}
        />
        <div
          className={styles.dropdown_div}
          style={{ display: isOpen ? "block" : "none" }}
        >
          <ul>
            <DropdownItem number="10" />
            <DropdownItem number="20" />
            <DropdownItem number="50" />
          </ul>
        </div>
      </div>
      <p>cards</p>
    </div>
  ) : null;
};

export default CardsPerPage;

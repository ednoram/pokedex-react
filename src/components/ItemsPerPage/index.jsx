import React, { useState, useRef } from "react";
import { useSelector, shallowEqual } from "react-redux";

import "./items_per_page.scss";
import DropdownItem from "./DropdownItem";

import { useOutsideClick } from "../../hooks";
import { ReactComponent as RightArrow } from "../../assets/right_arrow.svg";

const ItemsPerPage = () => {
  const { paginationStep, searchValue } = useSelector(
    (state) => ({
      paginationStep: state.pagination.step,
      searchValue: state.search.value,
    }),
    shallowEqual
  );

  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef();

  useOutsideClick(containerRef, () => setIsOpen(false));

  const switchIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    !searchValue && (
      <div
        ref={containerRef}
        onClick={switchIsOpen}
        className="items_per_page flex_space_between"
      >
        <p>{paginationStep}</p>
        <RightArrow
          className="dropdown_arrow"
          style={{ transform: isOpen ? "rotate(270deg)" : "rotate(90deg)" }}
        />
        <div
          className="dropdown_div"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <ul>
            <DropdownItem number="10" />
            <DropdownItem number="20" />
            <DropdownItem number="50" />
          </ul>
        </div>
      </div>
    )
  );
};

export default ItemsPerPage;

import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import styles from "./cards_per_page.module.scss";

import { setStep } from "../../actions";
import { selectPaginationStep } from "../../selectors";

const DropdownItem = ({ number }) => {
  const paginationStep = useSelector(selectPaginationStep);

  const dispatch = useDispatch();

  const num = Number(number);

  return (
    <li
      role="button"
      onClick={() => dispatch(setStep(num))}
      className={[
        styles.list_item,
        "flex_space_between",
        paginationStep === num ? styles.list_item_active : "",
      ].join(" ")}
    >
      <p>{num}</p>
    </li>
  );
};

DropdownItem.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DropdownItem.defaultProps = {
  number: NaN,
};

export default DropdownItem;

import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { setStep } from "../../actions/paginationActions";

const DropdownItem = ({ number }) => {
  const paginationStep = useSelector((state) => state.pagination.step);
  const dispatch = useDispatch();

  const num = Number(number);

  return (
    <li
      role="button"
      onClick={() => dispatch(setStep(num))}
      className={
        "list_item flex_space_between " +
        (paginationStep === num ? "list_item_active" : "")
      }
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

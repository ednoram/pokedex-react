import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./items_per_page.scss";

import { setStep } from "../../actions/paginationActions";

const ItemsPerPage = () => {
  const { step, searchValue } = useSelector((state) => ({
    step: state.pagination.step,
    searchValue: state.search.value,
  }));
  const dispatch = useDispatch();

  return (
    !searchValue && (
      <div className="items_per_page">
        <ul className="flexSpaceBetween">
          <li className={step === 10 ? "list_item active_item" : "list_item"}>
            <button onClick={() => dispatch(setStep(10))}>10</button>
          </li>
          <li className={step === 20 ? "list_item active_item" : "list_item"}>
            <button onClick={() => dispatch(setStep(20))}>20</button>
          </li>
          <li className={step === 50 ? "list_item active_item" : "list_item"}>
            <button onClick={() => dispatch(setStep(50))}>50</button>
          </li>
        </ul>
      </div>
    )
  );
};

export default ItemsPerPage;

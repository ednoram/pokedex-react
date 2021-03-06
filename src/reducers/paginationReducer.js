import produce from "immer";

const INITIAL_STATE = { start: 0, step: 20 };

const paginationReducer = produce((draft, { type, step, page, itemsCount }) => {
  switch (type) {
    case "NEXT_PAGE":
      if (draft.start < itemsCount - draft.step) {
        draft.start += draft.step;
      }
      break;
    case "PREV_PAGE":
      if (draft.start >= draft.step) {
        draft.start -= draft.step;
      }
      break;
    case "SET_PAGE":
      draft.start = (page - 1) * draft.step;
      break;
    case "SET_STEP":
      draft.step = step;
      while (draft.start % draft.step !== 0) {
        draft.start -= 10;
      }
      break;
    default:
      return;
  }
}, INITIAL_STATE);

export default paginationReducer;

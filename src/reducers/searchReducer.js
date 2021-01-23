import produce from "immer";

const INITIAL_STATE = { value: "", typing: false };

const searchReducer = produce((draft, action) => {
  switch (action.type) {
    case "CHANGE_VALUE":
      if (!draft.typing) {
        draft.value = action.text;
      }
      break;
    default:
      return;
  }
}, INITIAL_STATE);

export default searchReducer;

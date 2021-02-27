import produce from "immer";

const INITIAL_STATE = {
  value: "",
  typing: false,
  showAutoComplete: false,
};

const searchReducer = produce((draft, { type, text, showAutoComplete }) => {
  switch (type) {
    case "CHANGE_VALUE":
      if (!draft.typing) {
        draft.value = text;
      }
      break;
    case "SET_SHOW_AUTOCOMPLETE":
      draft.showAutoComplete = showAutoComplete;
      break;
    default:
      return;
  }
}, INITIAL_STATE);

export default searchReducer;

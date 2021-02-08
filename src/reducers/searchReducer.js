import produce from "immer";

const INITIAL_STATE = {
  value: "",
  typing: false,
  showAutoComplete: false,
};

const searchReducer = produce((draft, action) => {
  switch (action.type) {
    case "CHANGE_VALUE":
      if (!draft.typing) {
        draft.value = action.text;
      }
      break;
    case "SET_SHOW_AUTOCOMPLETE":
      draft.showAutoComplete = action.bool;
      break;
    default:
      return;
  }
}, INITIAL_STATE);

export default searchReducer;

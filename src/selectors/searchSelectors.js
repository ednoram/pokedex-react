import { createSelector } from "reselect";

const getSearchState = (state) => state.search;

export const selectSearchTyping = createSelector(
  getSearchState,
  (search) => search.typing
);

export const selectShowAutoComplete = createSelector(
  getSearchState,
  (search) => search.showAutoComplete
);

export const selectSearchValue = createSelector(getSearchState, (search) =>
  search.value.trim()
);

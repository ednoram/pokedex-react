export const setSearchValue = (text) => ({
  type: "CHANGE_VALUE",
  text: text,
});

export const setShowAutoComplete = (showAutoComplete) => ({
  type: "SET_SHOW_AUTOCOMPLETE",
  showAutoComplete: showAutoComplete,
});

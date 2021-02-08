export const changeSearchValue = (text) => ({
  type: "CHANGE_VALUE",
  text: text,
});

export const setShowAutoComplete = (bool) => ({
  type: "SET_SHOW_AUTOCOMPLETE",
  bool: bool,
});

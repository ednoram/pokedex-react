export const nextPage = (items_count) => ({
  type: "NEXT_PAGE",
  items_count: items_count,
});

export const prevPage = () => ({
  type: "PREV_PAGE",
});

export const setPage = (page) => ({
  type: "SET_PAGE",
  page: page,
});

export const setStep = (step) => ({
  type: "SET_STEP",
  step: step,
});

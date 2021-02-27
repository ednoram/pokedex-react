export const nextPage = (itemsCount) => ({
  type: "NEXT_PAGE",
  itemsCount: itemsCount,
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

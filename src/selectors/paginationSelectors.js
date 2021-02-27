import { createSelector } from "reselect";

const getPaginationState = (state) => state.pagination;

export const selectPaginationStep = createSelector(
  getPaginationState,
  (pagination) => pagination.step
);

export const selectPaginationStart = createSelector(
  getPaginationState,
  (pagination) => pagination.start
);

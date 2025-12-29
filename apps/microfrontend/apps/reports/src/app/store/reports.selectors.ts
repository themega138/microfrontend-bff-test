import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReportsState } from './reports.reducer';

export const selectReportsState = createFeatureSelector<ReportsState>('reports');

export const selectReportItems = createSelector(
  selectReportsState,
  (state) => state.items
);

export const selectReportsLoading = createSelector(
  selectReportsState,
  (state) => state.loading
);

export const selectReportsError = createSelector(
  selectReportsState,
  (state) => state.error
);

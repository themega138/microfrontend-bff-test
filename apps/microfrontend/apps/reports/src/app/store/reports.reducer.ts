import { createReducer, on } from '@ngrx/store';
import * as ReportsActions from './reports.actions';

export interface ReportsState {
  items: Array<{ name: string; description?: string }>;
  loading: boolean;
  error: string | null;
}

export const initialState: ReportsState = {
  items: [],
  loading: false,
  error: null,
};

export const reportsReducer = createReducer(
  initialState,
  on(ReportsActions.loadReports, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ReportsActions.loadReportsSuccess, (state, { items }) => ({
    ...state,
    items,
    loading: false,
  })),
  on(ReportsActions.loadReportsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

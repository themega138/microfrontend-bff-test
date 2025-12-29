import { createReducer, on } from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';

export interface DashboardState {
  message: string | null;
  loading: boolean;
  error: string | null;
}

export const initialState: DashboardState = {
  message: null,
  loading: false,
  error: null,
};

export const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.loadDashboard, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(DashboardActions.loadDashboardSuccess, (state, { message }) => ({
    ...state,
    message,
    loading: false,
  })),
  on(DashboardActions.loadDashboardFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

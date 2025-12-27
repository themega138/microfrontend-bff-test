import { createSelector } from '@ngrx/store';
import { ApiState } from './api.reducer';

interface RootState {
  api: ApiState;
}

export const selectApi = (state: RootState) => state.api;

export const selectGreeting = createSelector(selectApi, (state) => state.greeting);
export const selectItems = createSelector(selectApi, (state) => state.items);

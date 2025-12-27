import { createReducer, on } from '@ngrx/store';
import { loadGreetingSuccess, loadItemsSuccess } from './api.actions';

export interface ApiState {
  greeting: { message: string; timestamp: string } | null;
  items: Array<{ name: string; description?: string }>;
}

export const initialState: ApiState = {
  greeting: null,
  items: [],
};

export const apiReducer = createReducer(
  initialState,
  on(loadGreetingSuccess, (state, { greeting }) => ({ ...state, greeting })),
  on(loadItemsSuccess, (state, { items }) => ({ ...state, items })),
);

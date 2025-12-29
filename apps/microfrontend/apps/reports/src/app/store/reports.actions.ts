import { createAction, props } from '@ngrx/store';

export const loadReports = createAction('[Reports] Load');
export const loadReportsSuccess = createAction(
  '[Reports] Load Success',
  props<{ items: Array<{ name: string; description?: string }> }>()
);
export const loadReportsFailure = createAction(
  '[Reports] Load Failure',
  props<{ error: string }>()
);

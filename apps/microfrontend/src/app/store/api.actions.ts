import { createAction, props } from '@ngrx/store';

export const loadGreeting = createAction('[API] Load Greeting');
export const loadGreetingSuccess = createAction(
  '[API] Load Greeting Success',
  props<{ greeting: { message: string; timestamp: string } }>(),
);

export const loadItems = createAction('[API] Load Items');
export const loadItemsSuccess = createAction(
  '[API] Load Items Success',
  props<{ items: Array<{ name: string; description?: string }> }>(),
);

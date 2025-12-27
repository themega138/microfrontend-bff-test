import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { ApiService } from '../core/api.service';
import { loadGreeting, loadGreetingSuccess, loadItems, loadItemsSuccess } from './api.actions';

@Injectable()
export class ApiEffects {
  loadGreeting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadGreeting),
      mergeMap(() => this.apiService.getGreeting().pipe(map((greeting) => loadGreetingSuccess({ greeting })))),
    ),
  );

  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItems),
      mergeMap(() => this.apiService.getItems().pipe(map((items) => loadItemsSuccess({ items })))),
    ),
  );

  constructor(private readonly actions$: Actions, private readonly apiService: ApiService) {}
}

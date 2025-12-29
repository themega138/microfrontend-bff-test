import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as ReportsActions from './reports.actions';
import { ReportsService } from '../reports.service';

@Injectable()
export class ReportsEffects {
  loadReports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReportsActions.loadReports),
      mergeMap(() =>
        this.reportsService.fetchItems().pipe(
          map((items) => ReportsActions.loadReportsSuccess({ items })),
          catchError((error) =>
            of(
              ReportsActions.loadReportsFailure({
                error: error?.message ?? 'No se pudieron cargar los items',
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly reportsService: ReportsService
  ) {}
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as DashboardActions from './dashboard.actions';
import { DashboardService } from '../dashboard.service';

@Injectable()
export class DashboardEffects {
  loadDashboard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.loadDashboard),
      mergeMap(() =>
        this.dashboardService.fetchDummy().pipe(
          map((response) =>
            DashboardActions.loadDashboardSuccess({ message: response.message })
          ),
          catchError((error) =>
            of(
              DashboardActions.loadDashboardFailure({
                error: error?.message ?? 'No se pudo cargar el dummy',
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly dashboardService: DashboardService
  ) {}
}

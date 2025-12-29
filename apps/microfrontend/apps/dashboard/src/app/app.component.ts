import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DashboardActions from './store/dashboard.actions';
import {
  selectDashboardError,
  selectDashboardLoading,
  selectDashboardMessage,
} from './store/dashboard.selectors';

@Component({
  selector: 'microfrontend-dashboard',
  template: `
    <div class="card">
      <h2>Dashboard remoto</h2>
      <p>Este frontend consume el BFF con NgRx.</p>
      <p *ngIf="loading$ | async">Cargando datos...</p>
      <p *ngIf="message$ | async as message">
        Dummy: <span class="badge">{{ message }}</span>
      </p>
      <p *ngIf="error$ | async as error">Error: {{ error }}</p>
      <button (click)="reload()">Refrescar</button>
    </div>
  `,
})
export class AppComponent implements OnInit {
  message$ = this.store.select(selectDashboardMessage);
  loading$ = this.store.select(selectDashboardLoading);
  error$ = this.store.select(selectDashboardError);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.reload();
  }

  reload(): void {
    this.store.dispatch(DashboardActions.loadDashboard());
  }
}

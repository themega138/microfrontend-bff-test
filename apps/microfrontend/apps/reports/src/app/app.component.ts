import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ReportsActions from './store/reports.actions';
import {
  selectReportItems,
  selectReportsError,
  selectReportsLoading,
} from './store/reports.selectors';

@Component({
  selector: 'microfrontend-reports',
  template: `
    <div class="panel">
      <h2>Reports remoto</h2>
      <p>Este frontend consume la lista de items del BFF.</p>
      <button (click)="reload()">Actualizar lista</button>
      <p *ngIf="loading$ | async">Cargando items...</p>
      <p *ngIf="error$ | async as error">Error: {{ error }}</p>
      <ul>
        <li *ngFor="let item of items$ | async">
          <strong>{{ item.name }}</strong>
          <span *ngIf="item.description"> - {{ item.description }}</span>
        </li>
      </ul>
    </div>
  `,
})
export class AppComponent implements OnInit {
  items$ = this.store.select(selectReportItems);
  loading$ = this.store.select(selectReportsLoading);
  error$ = this.store.select(selectReportsError);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.reload();
  }

  reload(): void {
    this.store.dispatch(ReportsActions.loadReports());
  }
}

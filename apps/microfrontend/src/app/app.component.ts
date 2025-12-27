import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadGreeting, loadItems } from './store/api.actions';
import { selectGreeting, selectItems } from './store/api.selectors';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <h1>Microfrontend demo</h1>
      <section>
        <h2>Greeting</h2>
        <pre>{{ greeting$ | async | json }}</pre>
      </section>
      <section>
        <h2>Items</h2>
        <pre>{{ items$ | async | json }}</pre>
      </section>
      <app-dashboard></app-dashboard>
      <app-reports></app-reports>
    </main>
  `,
})
export class AppComponent implements OnInit {
  greeting$ = this.store.select(selectGreeting);
  items$ = this.store.select(selectItems);

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadGreeting());
    this.store.dispatch(loadItems());
  }
}

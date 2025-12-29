import { Component } from '@angular/core';

@Component({
  selector: 'microfrontend-root',
  template: `
    <header>
      <h1>NX Microfrontend Shell</h1>
      <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/reports">Reports</a>
      </nav>
    </header>
    <main>
      <div class="panel">
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
})
export class AppComponent {}

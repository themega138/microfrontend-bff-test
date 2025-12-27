import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <section>
      <h3>Dashboard Module</h3>
      <p>Este módulo consume el estado cargado desde el BFF.</p>
    </section>
  `,
})
export class DashboardComponent {}

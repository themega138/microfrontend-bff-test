import { Component } from '@angular/core';

@Component({
  selector: 'microfrontend-dashboard-entry',
  template: `
    <section>
      <h3>Dashboard remoto cargado via Module Federation</h3>
      <p>El shell carga este módulo desde el remote dashboard.</p>
    </section>
  `,
})
export class RemoteEntryComponent {}

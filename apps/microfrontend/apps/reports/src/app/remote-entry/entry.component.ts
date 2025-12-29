import { Component } from '@angular/core';

@Component({
  selector: 'microfrontend-reports-entry',
  template: `
    <section>
      <h3>Reports remoto cargado via Module Federation</h3>
      <p>El shell incluye este módulo remoto en /reports.</p>
    </section>
  `,
})
export class RemoteEntryComponent {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@nx/angular/mf';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule('dashboard', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      loadRemoteModule('reports', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}

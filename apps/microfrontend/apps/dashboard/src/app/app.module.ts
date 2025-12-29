import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { dashboardReducer } from './store/dashboard.reducer';
import { DashboardEffects } from './store/dashboard.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RemoteEntryModule } from './remote-entry/entry.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ dashboard: dashboardReducer }),
    EffectsModule.forRoot([DashboardEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    RemoteEntryModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

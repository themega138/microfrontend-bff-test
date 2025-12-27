import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ReportsModule } from './modules/reports/reports.module';
import { apiReducer } from './store/api.reducer';
import { ApiEffects } from './store/api.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    DashboardModule,
    ReportsModule,
    StoreModule.forRoot({ api: apiReducer }),
    EffectsModule.forRoot([ApiEffects]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { reportsReducer } from './store/reports.reducer';
import { ReportsEffects } from './store/reports.effects';
import { RemoteEntryModule } from './remote-entry/entry.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ reports: reportsReducer }),
    EffectsModule.forRoot([ReportsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    RemoteEntryModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdDashBoaredComponent } from './shared/components/prod-dash-boared/prod-dash-boared.component';
import { PordFormComponent } from './shared/components/pord-form/pord-form.component';
import { ProdTableComponent } from './shared/components/prod-table/prod-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdDashBoaredComponent,
    PordFormComponent,
    ProdTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

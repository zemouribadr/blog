import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }  from './shared/routing/app.routing';
import {APP_PROVIDERS} from './app.providers';
import { AppComponent } from './app.component';
import {APP_DECLARATIONS} from './app.declarations';



@NgModule({
  declarations: [
  AppComponent,
  APP_DECLARATIONS
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }

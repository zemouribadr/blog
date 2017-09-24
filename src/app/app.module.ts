import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {APP_PROVIDERS} from './app.providers';
import {APP_DECLARATIONS} from './app.declarations';

import { AdminModule }  from './admin/admin.module';

import { AppRoutingModule }  from './shared/routing/app.routing';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
  AppComponent,
  APP_DECLARATIONS
  ],
  imports: [
  BrowserModule,
  AdminModule,
  AppRoutingModule,
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }

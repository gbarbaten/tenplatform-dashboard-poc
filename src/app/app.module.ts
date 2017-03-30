import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule, combineReducers } from '@ngrx/store';

import { is_logged_in, jwt_auth } from './reducers';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot(combineReducers({ is_logged_in: is_logged_in, jwt_auth: jwt_auth }))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

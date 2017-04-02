import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule, provideStore } from '@ngrx/store';

import { is_logged_in, jwt_auth } from './reducers';
import { ApiService, LoginService } from './services';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ is_logged_in, jwt_auth })
  ],
  providers: [
    ApiService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

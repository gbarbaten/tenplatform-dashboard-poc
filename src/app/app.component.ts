import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginService } from './services/login.service';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _jwt_auth;
  private email;
  private password;

  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(
      private _store: Store<any>,
      private _api: LoginService
  ) {
      _store.select('jwt_auth').subscribe(jwt_auth => this._jwt_auth = jwt_auth);
  }

  login() {
      /** TODO: this should be done with 'subscribeOnError' but I don't
          know why it's not working. Seems that this method is not included
          in our rxjs lib **/
      this._api.loginUser(this.email, this.password).subscribe(resp => {
          // Login success
          console.log("Login subscribe!");
      }, err => {
        //TODO: show error message
        console.log('Something went wrong!!');
      });
  }

  logout() {
      this._store.dispatch({ type: 'LOGOUT' });
  }
}

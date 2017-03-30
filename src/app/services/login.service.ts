import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { ApiService } from './api.service';


@Injectable()
export class LoginService {
  _headers: Headers;
  _jwt_auth;

  constructor(
    private apiService: ApiService,
    private _store: Store<any>
  ) {
    this._headers = new Headers({
      'Content-Type': 'application/json'
    });
    this._store.select('jwt_auth').subscribe((jwt_auth:any) => {
      if(jwt_auth) {
        this._headers.set('Authorization', `JWT ${jwt_auth.access_token}`);
        this._jwt_auth = jwt_auth;
      }
      else
        this._headers.delete('Authorization');
    });

  }

  //loginUser(body: any): Observable<IUser> { //TODO: research TypeScript interfaces
  //https://github.com/ngrx/angular2-store-example/blob/master/src/app/users/models/users.ts
  loginUser(email:string, password:string): Observable<any> {
    let req = this.apiService.post('login/', {
      'type': 'staff',
      'email': email,
      'password': password,
    });

    req.subscribe(resp => this._store.dispatch({ type: 'LOGIN', payload: resp }));

    return req;
  }

}

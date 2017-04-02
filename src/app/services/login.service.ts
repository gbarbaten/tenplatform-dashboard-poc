import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { ApiService } from './api.service';


@Injectable()
export class LoginService {
  _headers: Headers;

  constructor(
    private apiService: ApiService,
    private _store: Store<any>
  ) {
    this._headers = new Headers({
      'Content-Type': 'application/json'
    });
    this._store.select('jwt_auth').subscribe((jwt_auth:any) => {
      console.log("get new token:", jwt_auth);
      if(jwt_auth) {
        this._headers.set('Authorization', `JWT ${jwt_auth.token}`);
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
    }, this._headers);

    req.subscribe(resp => this._store.dispatch({ type: 'LOGIN', payload: resp }));

    return req;
  }

}

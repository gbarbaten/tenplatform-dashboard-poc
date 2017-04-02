import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { environment } from '../../environments/environment';

const API_BASE_URL: string = `${environment.backend_path}v1/`;

@Injectable()
export class ApiService {

    constructor(private http: Http) {}

    private getUrl(api:string): string {
      return `${API_BASE_URL}${api}`;
    }

    /* GET */
    public get(api:string, params?: string, headers?:Headers): Observable<any> {
      const url = this.getUrl(api);

      return this.http.get(url)
        .map((response: Response) => response.json());
    }

    /* POST */
    public post(api:string, body?: any, headers?:Headers): Observable<any> {
      const myBody = JSON.stringify(body);
      const url = this.getUrl(api);
      const options = new RequestOptions({ headers: headers });
      return this.http.post(url, myBody, options)
        .map((response: Response) => response.json());
    }

    /* PATCH */
    public patch(api:string, body?: any): Observable<any> {
      const url = this.getUrl(api);
      const myBody = JSON.stringify(body);

      return this.http.patch(url, myBody)
        .map((response: Response) => response.json());
    }

    /* PUT */
    public put(api:string, body?: any): Observable<any> {
      const url = this.getUrl(api);
      const myBody = JSON.stringify(body);

      return this.http.put(url, myBody)
        .map((response: Response) => response.json());
    }

    /* DELETE */
    public delete(api:string): Observable<any> {
      const url = this.getUrl(api);

      return this.http.delete(url);
        // .map((response: Response) => response.json());
    }

}

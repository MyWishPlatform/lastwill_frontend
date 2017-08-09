import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RestApiService {
  private apiUrl = window.location.origin;
  private defaultHeaders = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    // 'Authorization': 'Basic cm9vdDp1N3RyYUgwbWU='
  };
  constructor(
    private http: Http,
  ) { }
  private createAuthorizationHeader(): Headers {
    const headers = new Headers(this.defaultHeaders);
    return headers;
  }
  public getCustomData(url: string, params: any): Observable<any> {
    return this.http.get(this.apiUrl + url, {
      search: params,
      headers: this.createAuthorizationHeader()
    })
               .map(this.extractData)
               .catch(this.handleError);
  }
  public getData(url: string): Observable<any> {
    return this.http.get(this.apiUrl + url, {
      headers: this.createAuthorizationHeader()
    })
               .map(this.extractData)
               .catch(this.handleError);
  }
  public postData(url: string, data?:{ }): Observable<any> {
    this.createAuthorizationHeader();
    return this.http.post(this.apiUrl + url, data, {
      headers: this.createAuthorizationHeader()
    })
               .map(this.extractData)
               .catch(this.handleError);
  }
  private extractData(res: Response) {
    const body = res.json();
    return body || { };
  }
  private handleError(err: Response | any) {
    console.log(err);
    return Observable.throw(err.toString());
  }
}

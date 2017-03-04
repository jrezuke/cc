import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Entry } from './entry';

@Injectable()
export class EntryService {
  apiUrl: string;
  entry: Observable<Entry>;

  constructor(private _http: Http) { }

  addEntry(entry: Entry){
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    let requestOpts = new RequestOptions();
    requestOpts.headers = headers;

    this.apiUrl = "http://localhost:12304/api/CalEntries";
    return this._http.post(this.apiUrl, JSON.stringify(entry), requestOpts)
      .map(res => res.json())
      .catch(this.handleError);
  }

   handleError(err: any) {
    console.log('sever error:', err);  // debug
    if (err instanceof Response) {
      return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
  }

}

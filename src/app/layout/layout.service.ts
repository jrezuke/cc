import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LayoutBarItem } from './layout-bar/layout-bar-item/layout-bar-item';

@Injectable()
export class LayoutService {
  state: Subject<string> = new Subject();
  state$ = this.state.asObservable();

  constructor(private _http: Http) { }

  setState(newState: string) {
    this.state.next(newState);
  }

  getMainBarItems(type: string): Observable<LayoutBarItem[]> {
    console.log('items:', type);
    let url  = '';
    if (type === 'main') {
      url = 'api/mainBarItems.json';
    }
    if (type === 'entry') {
      url = 'api/entryBarItems.json';
    }
    console.log('url', url);
    return this._http.get(url)
      .map(res => res.json())
      .catch(this.handleError);

  }

  handleError(err: any) {
        console.log('sever error:', err);  // debug
        if (err instanceof Response) {
          // return Observable.throw(err.json().error || 'backend server error');
          // if you're using lite-server, use the following line
          // instead of the line above:
          return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(err || 'backend server error');
    }


}

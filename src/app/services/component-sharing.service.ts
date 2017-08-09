import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class ComponentSharingService {
  private STORE: any = {};
  private _observer: Observer<any>;
  eventEmitted$: Observable<any>;
  constructor() {
    this.eventEmitted$ = new Observable(observer => this._observer = observer).share();
  }
  public getItemData(name: string) {
    return this.STORE[name];
  }
  public setItemData(name: string, value: any) {
    this.STORE[name] = value;
  }
  public eventHandler(name: string, eventData: any) {
    this._observer.next({name: name, data: eventData});
  }
  public getAllData() {
    return this.STORE;
  }
}

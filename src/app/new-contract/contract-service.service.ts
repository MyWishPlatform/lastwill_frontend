import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RestApiService } from '../services/rest-api.service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ContractServiceService {
  private contractUrl = '/get_balance/';
  constructor(
    private contractRest: RestApiService
  ) { }
  getWallet(number: string): Observable<any> {
    const reqParams = { 'address': number };
    return this.contractRest.getCustomData(this.contractUrl, reqParams);
  }
}

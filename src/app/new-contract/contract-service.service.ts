import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RestApiService } from '../services/rest-api.service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ContractServiceService {
  private contractUrl = '/get_balance/';
  private newContractUrl = '/create_contract/';
  constructor(
    private contractRest: RestApiService
  ) { }
  getWallet(number: string): Observable<any> {
    const reqParams = { 'address': number };
    return this.contractRest.getCustomData(this.contractUrl, reqParams);
  }
  createContract(data: object): Observable<any> {
    return this.contractRest.postData(this.newContractUrl, data);
  }
}

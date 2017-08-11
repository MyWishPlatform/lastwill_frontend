import { TestBed, inject } from '@angular/core/testing';

import { ContractServiceService } from './contract-service.service';
import { RestApiService } from '../services/rest-api.service';
import { ConnectionBackend, Http, HttpModule, RequestOptions } from '@angular/http';

describe('ContractServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContractServiceService,
        RestApiService,
        ConnectionBackend
      ],
      imports: [HttpModule]
    });
  });

  it('should init', inject([ContractServiceService], (service: ContractServiceService) => {
    expect(service).toBeTruthy();
  }));
});

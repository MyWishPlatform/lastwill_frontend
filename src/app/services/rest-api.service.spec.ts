import { TestBed, inject } from '@angular/core/testing';

import { RestApiService } from './rest-api.service';

describe('RestApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestApiService]
    });
  });

  it('should ...', inject([RestApiService], (service: RestApiService) => {
    expect(service).toBeTruthy();
  }));
});

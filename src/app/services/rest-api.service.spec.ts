import { TestBed, inject } from '@angular/core/testing';

import { RestApiService } from './rest-api.service';
import { HttpModule } from '@angular/http';

describe('RestApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestApiService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([RestApiService], (service: RestApiService) => {
    expect(service).toBeTruthy();
  }));
});

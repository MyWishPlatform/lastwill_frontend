import { TestBed, inject } from '@angular/core/testing';

import { ComponentSharingService } from './component-sharing.service';

describe('ComponentSharingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentSharingService]
    });
  });

  it('should ...', inject([ComponentSharingService], (service: ComponentSharingService) => {
    expect(service).toBeTruthy();
  }));
});

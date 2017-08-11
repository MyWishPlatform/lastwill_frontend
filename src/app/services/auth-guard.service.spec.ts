import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { UserLoginComponent } from '../user-login/user-login.component';
import { NewContractComponent } from '../new-contract/new-contract.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Step1Component } from '../new-contract/step-1/step-1.component';
import { Step2Component } from '../new-contract/step-2/step-2.component';
import { Step3Component } from '../new-contract/step-3/step-3.component';
import { Step4Component } from '../new-contract/step-4/step-4.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserLoginComponent,
        NewContractComponent,
        Step1Component,
        Step2Component,
        Step3Component,
        Step4Component
      ],
      providers: [AuthGuardService],
      imports: [
        HttpModule,
        AppRoutingModule,
        RouterModule,
        FormsModule,
        RouterTestingModule
      ]
    });
  });

  it('should create', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});

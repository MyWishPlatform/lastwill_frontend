import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContractComponent } from './new-contract.component';
import { Step1Component } from './step-1/step-1.component';
import { Step2Component } from './step-2/step-2.component';
import { Step3Component } from './step-3/step-3.component';
import { Step4Component } from './step-4/step-4.component';
import { FormsModule } from '@angular/forms';
import { ContractServiceService } from './contract-service.service';
import { RestApiService } from '../services/rest-api.service';
import { HttpModule } from '@angular/http';

describe('NewContractComponent', () => {
  let component: NewContractComponent;
  let fixture: ComponentFixture<NewContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewContractComponent,
        Step1Component,
        Step2Component,
        Step3Component,
        Step4Component
      ],
      imports: [
        FormsModule,
        HttpModule
      ],
      providers: [
        RestApiService,
        ContractServiceService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

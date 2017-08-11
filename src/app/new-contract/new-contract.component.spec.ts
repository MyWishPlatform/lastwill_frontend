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
  
  it('should generate empty ContractBuilder', () => {
    component.ngOnInit();
    const testContract = {
      'source': {},
      'destination': {},
      'conditions': {}
    };
    expect(JSON.stringify(component.sourceWallet) === JSON.stringify(testContract)).toBe(true);
  });
  
  it('should update source in contract', () => {
    const testSource = {
      'wallet': 'test-wallet',
      'amount': 'test-amount',
      'balance': 'test-balance'
    };
    component.handleSourceUpdated(testSource);
    expect(component.sourceWallet.source === testSource).toBe(true);
  });
  
  it('should update destination in contract', () => {
    const testDestination = [
      {
        'address': 'test-address',
        'percent': 'test-percent',
        'email': 'test-email'
      }
    ];
    component.handleDestinyUpdated(testDestination);
    expect(JSON.stringify(component.sourceWallet.destination) === JSON.stringify(testDestination)).toBe(true);
  });
  
  it('should update conditions in contract', () => {
    const testConditions = {
      'checkInterval': 'test-interval',
      'duration': 'test-duration'
    };
    component.handleConditionsUpdated(testConditions);
    expect(JSON.stringify(component.sourceWallet.conditions) === JSON.stringify(testConditions)).toBe(true);
  });
  
  it('should update step in component', () => {
    const step = 'test-step';
    component.handleStepUpdated(step);
    expect(component.step === step).toBe(true);
  });
  
});

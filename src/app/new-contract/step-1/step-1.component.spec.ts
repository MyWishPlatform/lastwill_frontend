import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1Component } from './step-1.component';
import { FormsModule } from '@angular/forms';
import { ContractServiceService } from '../contract-service.service';
import { RestApiService } from '../../services/rest-api.service';
import { HttpModule } from '@angular/http';

describe('Step1Component', () => {
  let component: Step1Component;
  let fixture: ComponentFixture<Step1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1Component ],
      imports: [
        HttpModule,
        FormsModule
      ],
      providers: [
        RestApiService,
        ContractServiceService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should emit update source without getting balance', () => {
    const testSource = {
      'wallet': 'test-wallet',
      'amount': 'test-amount',
      'balance': 'test-balance'
    };
    component.source = JSON.stringify(testSource);
    component.sourceUpdated.subscribe(s => {
      expect(s).toEqual(JSON.stringify(testSource));
    });
    component.handleSource(false);
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3Component } from './step-3.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ContractServiceService } from '../contract-service.service';
import { RestApiService } from '../../services/rest-api.service';

describe('Step3Component', () => {
  let component: Step3Component;
  let fixture: ComponentFixture<Step3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step3Component ],
      imports: [
        FormsModule,
        HttpModule
      ],
      providers: [
        ContractServiceService,
        RestApiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should emit update conditions', () => {
    const testConditions = {
      'checkInterval': 'test-interval',
      'duration': 'test-duration'
    };
    component.conditions = JSON.stringify(testConditions);
    component.conditionsUpdated.subscribe(c => {
      expect(c).toEqual(JSON.stringify(testConditions));
    });
    component.conditionsUpdated.emit(JSON.stringify(testConditions));
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2Component } from './step-2.component';
import { FormsModule } from '@angular/forms';

describe('Step2Component', () => {
  let component: Step2Component;
  let fixture: ComponentFixture<Step2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step2Component ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should add wallet to array', () => {
    component.ngOnInit();
    component.addWallet();
    expect(component.destination.length).toBe(2);
  });
  
  it('should remove wallet to array', () => {
    component.ngOnInit();
    component.addWallet();
    component.removeWallet(0);
    expect(component.destination.length).toBe(1);
  });
  
  it('should emit update destination', () => {
    const testDestination = [
      {
        'address': 'test-address',
        'percent': 'test-percent',
        'email': 'test-email'
      }
    ];
    component.destination = JSON.stringify(testDestination);
    component.destinyUpdated.subscribe(d => {
      expect(d).toEqual(JSON.stringify(testDestination));
    });
    component.handleDestination();
  });
  
});

import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { NewContractComponent } from './new-contract/new-contract.component';
import { FormsModule } from '@angular/forms';
import { Step1Component } from './new-contract/step-1/step-1.component';
import { Step2Component } from './new-contract/step-2/step-2.component';
import { Step3Component } from './new-contract/step-3/step-3.component';
import { Step4Component } from './new-contract/step-4/step-4.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserLoginComponent,
        NewContractComponent,
        Step1Component,
        Step2Component,
        Step3Component,
        Step4Component
      ],
      imports: [
        AppRoutingModule,
        RouterModule,
        FormsModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have a title 'Last Will'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Last Will');
  }));

  it('should render link with image', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a img.nav--logo'));
  }));
});

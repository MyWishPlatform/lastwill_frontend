import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './services/auth-guard.service';
import { NewContractComponent } from './new-contract/new-contract.component';
import { Step1Component } from './new-contract/step-1/step-1.component';
import { Step2Component } from './new-contract/step-2/step-2.component';
import { Step3Component } from './new-contract/step-3/step-3.component';
import { ComponentSharingService } from 'app/services/component-sharing.service';
import { RestApiService } from './services/rest-api.service';
import { ContractServiceService } from './new-contract/contract-service.service';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    NewContractComponent,
    Step1Component,
    Step2Component,
    Step3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService, ComponentSharingService, RestApiService, ContractServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

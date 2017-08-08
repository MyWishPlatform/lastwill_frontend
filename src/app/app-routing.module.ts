import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NewContractComponent } from './new-contract/new-contract.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: 'contract', component: NewContractComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

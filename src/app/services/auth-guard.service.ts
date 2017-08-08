import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
//import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router
  ) {
  }
  canActivate() {
    console.log('canActivate called');
    //return this.authRest.getCurrentUser().map((res)=>{
    //  return true;
    //}, (err)=>{
    //  return this.router.navigate(['auth']);
    //});
    return true;
  }
}

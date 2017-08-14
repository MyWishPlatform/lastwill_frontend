import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from './user.interface';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  @Input() user: IUser;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = {
      login: 'lastwill',
      password: 'lastwill'
    };
  }
  login(login: string, password: string): void {
    this.router.navigate(['/contract']);
  }
}

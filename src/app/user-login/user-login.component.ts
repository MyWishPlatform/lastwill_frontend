import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  @Input() user: {
    login,
    password
  };
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
     console.log(this.user);
    this.router.navigate(['/contract']);
  }
}

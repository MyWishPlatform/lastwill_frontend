import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.scss']
})
export class Step1Component implements OnInit {
  private source;

  constructor() { }

  ngOnInit() {
    this.source = [
      {
        'wallet': 'wallet1',
        'amount': 456,
        'balance': 123
      }
    ];
  }
  //addWallet(): void {
  //  const item = {
  //    'wallet': 'wallet' + Math.round(Math.random() * 100),
  //    'amount': Math.round(Math.random() * 100),
  //    'balance': Math.round(Math.random() * 100),
  //  };
  //  this.source.push(item);
  //}

}

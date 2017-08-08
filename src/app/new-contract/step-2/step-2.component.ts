import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-2',
  templateUrl: './step-2.component.html',
  styleUrls: ['./step-2.component.scss']
})
export class Step2Component implements OnInit {
  private destination;
  constructor() { }
  ngOnInit() {
    this.destination = [
      {
        'wallet': 'wallet1',
        'amount': 456,
        'notification': 'admin@admin.ico'
      },
      {
        'wallet': 'wallet2',
        'amount': 789,
        'notification': 'admin@admin.ico'
      }
    ];
  }
  addWallet(): void {
    const item = {
      'wallet': 'wallet' + Math.round(Math.random() * 100),
      'amount': Math.round(Math.random() * 100),
      'notification': 'admin@admin.ico'
    };
    this.destination.push(item);
  }

}

// TODO make global model

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-2',
  templateUrl: './step-2.component.html',
  styleUrls: ['./step-2.component.scss']
})
export class Step2Component implements OnInit {
  private destination;
  @Output() destinyUpdated = new EventEmitter();
  constructor() { }
  ngOnInit() {
    this.destination = [
      {
        'wallet': 'wallet1',
        'amount': 456,
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
  saveDestination() {
    this.destinyUpdated.emit(this.destination);
  }

}

// TODO make global model

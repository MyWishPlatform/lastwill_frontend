import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.scss']
})
export class Step1Component implements OnInit {
  @Input() source = {};
  @Output() sourceUpdated = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.source = {
        'wallet': 'wallet1',
        'amount': 456,
        'balance': 123
      };
  }
  handleSource() {
    this.sourceUpdated.emit(this.source);
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

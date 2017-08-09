import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-2',
  templateUrl: './step-2.component.html',
  styleUrls: ['./step-2.component.scss']
})
export class Step2Component implements OnInit {
  private destination;
  @Input() wallet: Object;
  @Output() destinyUpdated = new EventEmitter();
  constructor() { }
  ngOnInit() {
    this.destination = [
      {
        'address': '',
        'percent': '',
        'email': ''
      }
    ];
  }
  addWallet(): void {
    const item = {
      'address': '',
      'percent': '',
      'email': ''
    };
    this.destination.push(item);
  }
  removeWallet(index) {
    this.destination.splice(index, 1);
  }
  handleDestination() {
    this.destinyUpdated.emit(this.destination);
  }

}

// TODO make global model

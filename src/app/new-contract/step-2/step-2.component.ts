import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHeirs, ISourceContract } from '../contract.interface';

@Component({
  selector: 'app-step-2',
  templateUrl: './step-2.component.html',
  styleUrls: ['./step-2.component.scss']
})
export class Step2Component implements OnInit {
  public destination: IHeirs[];
  private step = 'step2';
  @Input() wallet: ISourceContract;
  @Output() destinyUpdated = new EventEmitter();
  @Output() nextStep = new EventEmitter();
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
  saveStep() {
    this.step = 'step3';
    this.nextStep.emit(this.step);
  }
  removeWallet(index) {
    this.destination.splice(index, 1);
  }
  handleDestination() {
    this.destinyUpdated.emit(this.destination);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHeirs, ISourceContract } from '../contract.interface';
import { Heirs } from 'app/new-contract/contract.class';

@Component({
  selector: 'app-step-2',
  templateUrl: './step-2.component.html',
  styleUrls: ['./step-2.component.scss']
})
export class Step2Component implements OnInit {
  public destination: IHeirs[];
  public step = 'step2';
  @Input() wallet: ISourceContract;
  @Output() destinyUpdated = new EventEmitter();
  @Output() nextStep = new EventEmitter();
  constructor() { }
  ngOnInit() {
    this.destination = [new Heirs()];
  }
  addWallet(): void {
    const item = new Heirs();
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

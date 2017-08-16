import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgClass } from '@angular/common';
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
  public heirsInvalid = [];
  public noticeChecked = [];
  @Input() wallet: ISourceContract;
  @Output() destinyUpdated = new EventEmitter();
  @Output() nextStep = new EventEmitter();
  constructor() { }
  ngOnInit() {
    this.destination = [new Heirs()];
    this.noticeChecked = Array(this.destination.length).fill(true);
  }
  addWallet(): void {
    const item = new Heirs();
    this.destination.push(item);
    this.noticeChecked.push(true);
  }
  saveStep() {
    this.resetValidation();
    this.validateHeirs();
    if (this.heirsInvalid.length === 0) {
      this.step = 'step3';
      this.nextStep.emit(this.step);
    }
  }
  removeWallet(index) {
    this.destination.splice(index, 1);
    this.noticeChecked.splice(index, 1);
  }
  handleDestination() {
    this.destinyUpdated.emit(this.destination);
  }
  resetValidation() {
    this.heirsInvalid = [];
  }
  validateHeirs() {
    const heirsInvalidArr = [];
    for (let x = 0; x < this.destination.length; x++) {
      if (this.destination[x].address.length < 1) {
        heirsInvalidArr[x] = heirsInvalidArr[x] || {};
        heirsInvalidArr[x]['address'] = false;
      }
      if (!this.destination[x].percent || this.destination[x].percent.toString() === '0') {
        heirsInvalidArr[x] = heirsInvalidArr[x] || {};
        heirsInvalidArr[x]['percent'] = false;
      }
    }
    this.heirsInvalid = heirsInvalidArr;
  }

}

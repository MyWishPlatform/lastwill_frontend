import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.scss']
})
export class NewContractComponent implements OnInit {
  public sourceWallet;
  private resultContract;
  public step;
  constructor() { }
  ngOnInit() {
    this.sourceWallet = {
      'source': {},
      'destination': {},
      'conditions': {}
    };
    this.step = 'step1';
  }
  handleStepUpdated(step) {
    this.step = step;
  }
  handleSourceUpdated(wallet) {
    this.sourceWallet.source = wallet;
  }
  handleDestinyUpdated(destiny) {
    this.sourceWallet.destination = destiny;
  }
  handleConditionsUpdated(conditions) {
    this.sourceWallet.conditions = conditions;
  }
  handleContractCreated(contract) {
    this.resultContract = contract;
  }
}

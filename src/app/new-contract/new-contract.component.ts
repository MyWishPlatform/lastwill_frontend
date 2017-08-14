import { Component, Input, OnInit } from '@angular/core';
import { ISourceContract, ISourceWallet } from './contract.interface';

@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.scss']
})
export class NewContractComponent implements OnInit {
  public sourceWallet: ISourceContract;
  private resultContract: ISourceContract;
  public step;
  constructor() { }
  ngOnInit() {
    this.sourceWallet = {
      'source': {
        'wallet': '',
        'amount': '',
        'balance': 0
      },
      'destination': [
        {
          'address': '',
          'percent': '',
          'email': ''
        }
      ],
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

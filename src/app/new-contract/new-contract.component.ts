import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.scss']
})
export class NewContractComponent implements OnInit {
  private sourceWallet;
  constructor() { }
  ngOnInit() {
    this.sourceWallet = {
      'source': {},
      'destination': {}
    };
  }
  sendContract() {
    console.log(this.sourceWallet);
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
}

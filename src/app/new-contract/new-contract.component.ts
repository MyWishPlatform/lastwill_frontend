import { Component, Input, OnInit } from '@angular/core';
import { IConditions, IHeirs, IResultContract, ISourceContract, ISourceWallet } from './contract.interface';
import { SourceContract } from './contract.class';

@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.scss']
})
export class NewContractComponent implements OnInit {
  public sourceWallet: ISourceContract;
  private resultContract: string;
  public step;
  constructor() { }
  ngOnInit() {
    this.sourceWallet = new SourceContract();
    this.step = 'step1';
  }
  handleStepUpdated(step: string) {
    this.step = step;
  }
  handleSourceUpdated(wallet: ISourceWallet) {
    this.sourceWallet.source = wallet;
  }
  handleDestinyUpdated(destiny: IHeirs[]) {
    this.sourceWallet.destination = destiny;
  }
  handleConditionsUpdated(conditions: IConditions) {
    this.sourceWallet.conditions = conditions;
  }
  handleContractCreated(contract: string) {
    this.resultContract = contract;
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { ContractServiceService } from '../contract-service.service';
import { ISourceContract, ISourceWallet } from '../contract.interface';
import { SourceWallet } from '../contract.class';

@Component({
  selector: 'app-step-1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.scss']
})
export class Step1Component implements OnInit {
  @Input() source: ISourceWallet;
  @Input() wallet: ISourceContract;
  @Output() sourceUpdated = new EventEmitter();
  @Output() nextStep = new EventEmitter();
  private walletTimeout;
  public isValid = {
    'wallet': true,
    'amount': true,
    'balance': true
  };
  public spinner;
  public step = 'step1';
  constructor(
    private ContractService: ContractServiceService
  ) {
  }

  ngOnInit() {
    this.source = new SourceWallet();
  }
  getWalletData(address: string) {
    return this.ContractService.getWallet(address).subscribe((res) => {
      this.source['balance'] = +(res.result / Math.pow(10, 18)).toFixed(5);
    },
      (err) => {
        console.error(err);
      });
  }
  handleSource(getBalance) {
    this.sourceUpdated.emit(this.source);
    if (!getBalance) return;
    this.spinner = true;
    clearTimeout(this.walletTimeout);
    this.walletTimeout = setTimeout(() => {
      this.getWalletData(this.source['wallet']);
      this.spinner = false;
    }, 3000);
  }
  saveStep() {
    if (this.validateStep1()) {
      this.step = 'step2';
      this.nextStep.emit(this.step);
    }
  }
  resetValidation() {
    this.isValid.wallet = true;
    this.isValid.amount = true;
    this.isValid.balance = true;
  }
  validateStep1() {
    this.resetValidation();
    if (this.source.wallet.length < 1) {
      this.isValid.wallet = false;
    }
    if (!this.source.amount || this.source.amount.toString() === '0') {
      this.isValid.amount = false;
    }
    if (!this.source.balance) {
      this.isValid.balance = false;
    }
    return this.isValid.wallet && this.isValid.amount && this.isValid.balance;
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

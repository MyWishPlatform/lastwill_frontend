import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContractServiceService } from '../contract-service.service';
import { ISourceContract, ISourceWallet } from '../contract.interface';

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
  private spinner;
  private step = 'step1';
  constructor(
    private ContractService: ContractServiceService
  ) {
  }

  ngOnInit() {
    this.source = {
        'wallet': '',
        'amount': '',
        'balance': 0
      };
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
    this.step = 'step2';
    this.nextStep.emit(this.step);
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

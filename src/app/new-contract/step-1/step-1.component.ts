import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContractServiceService } from '../contract-service.service';

@Component({
  selector: 'app-step-1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.scss']
})
export class Step1Component implements OnInit {
  @Input() source = {};
  @Output() sourceUpdated = new EventEmitter();
  private walletTimeout;
  private spinner;
  constructor(
    private ContractService: ContractServiceService
  ) {
  }

  ngOnInit() {
    this.source = {
        'wallet': '',
        'amount': '',
        'balance': ''
      };
  }
  getWalletData(number: string) {
    return this.ContractService.getWallet(number).subscribe((res) => {
      console.log(res);
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
  //addWallet(): void {
  //  const item = {
  //    'wallet': 'wallet' + Math.round(Math.random() * 100),
  //    'amount': Math.round(Math.random() * 100),
  //    'balance': Math.round(Math.random() * 100),
  //  };
  //  this.source.push(item);
  //}

}

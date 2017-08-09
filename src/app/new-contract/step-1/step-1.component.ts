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
        'wallet': 'wallet1',
        'amount': 0,
        'balance': 0
      };
  }
  getWalletData(number: string) {
    return this.ContractService.getWallet(number).subscribe((res) => {
      console.log(res);
    },
      (err) => {
        console.error(err);
      });
  }
  handleSource() {
    this.spinner = true;
    this.sourceUpdated.emit(this.source);
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

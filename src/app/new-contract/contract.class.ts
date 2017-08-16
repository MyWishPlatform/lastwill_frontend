import { IConditions, IHeirs, ISourceWallet } from './contract.interface';

export class SourceContract {
  'source': ISourceWallet;
  'destination': IHeirs[];
  'conditions': IConditions;
  
  constructor() {
    this.source = new SourceWallet();
    this.destination = [new Heirs()];
    this.conditions = new Conditions();
  }
}

export class ResultContract {
  'address': string;
  'heirs': IHeirs[];
  'conditions': IConditions;
  
  constructor(address: string, heirs: IHeirs[], conditions: IConditions) {
    this.address = address;
    this.heirs = heirs;
    this.conditions = conditions;
  }
}

export class SourceWallet {
  'wallet': string;
  'amount': string;
  'balance': number;
  
  constructor(wallet: string = '', amount: string = '', balance: number = undefined) {
    this.wallet = wallet;
    this.amount = amount;
    this.balance = balance;
  }
  
}

export class Heirs {
  'address': string;
  'percent': number;
  'email': string;
  
  constructor(address: string = '', percent: number = undefined, email: string = '') {
    this.address = address;
    this.percent = percent;
    this.email = email;
  }
}

export class Conditions {
  'checkInterval': number;
  'duration': number;
  
  constructor(checkInterval: number = undefined, duration: number = undefined) {
    this.checkInterval = checkInterval;
    this.duration = duration;
  }
}

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
  
  constructor() {
  
  }
  
}

export class Heirs {
  'address': string;
  'percent': string;
  'email': string;
  
  constructor() {
  
  }
}

export class Conditions {
  'checkInterval': number;
  'duration': number;
  
  constructor() {
  
  }
}

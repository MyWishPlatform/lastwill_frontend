export interface ISourceContract {
  'source': ISourceWallet;
  'destination': IHeirs[];
  'conditions': IConditions;
}

export interface IResultContract {
  'address': string;
  'heirs': IHeirs[];
  'conditions': IConditions;
}

export interface ISourceWallet {
  'wallet': string;
  'amount': string;
  'balance': number;
}

export interface IHeirs {
  'address': string;
  'percent': number;
  'email': string;
}

export interface IConditions {
  'checkInterval': number;
  'duration': number;
}

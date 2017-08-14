export interface ISourceContract {
  'source': ISourceWallet;
  'destination': IHeirs[];
  'conditions': object;
}

export interface ISourceWallet {
  'wallet': string;
  'amount': string;
  'balance': number;
}

export interface IHeirs {
  'address': string;
  'percent': string;
  'email': string;
}

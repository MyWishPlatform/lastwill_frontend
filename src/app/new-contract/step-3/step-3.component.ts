import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContractServiceService } from '../contract-service.service';

@Component({
  selector: 'app-step-3',
  templateUrl: './step-3.component.html',
  styleUrls: ['./step-3.component.scss']
})
export class Step3Component implements OnInit {
  @Input() conditions;
  @Input() wallet: Object;
  @Output() conditionsUpdated = new EventEmitter();
  @Output() nextStep = new EventEmitter();
  @Output() contractCreated = new EventEmitter();
  private step = '';
  private conditionsNormalized;
  protected SECONDS = 2592000;
  constructor(
    private contractRest: ContractServiceService
  ) { }

  ngOnInit() {
    this.conditions = {
      'checkInterval': '',
      'duration': ''
    };
    this.conditionsNormalized = {};
  }
  sendContract() {
    const newContract = {
      'address': this.wallet['source'].wallet,
      'heirs': this.wallet['destination'],
      'conditions': this.wallet['conditions']
    };
    /////
    const contract = '// —---------- MODIFIERS —---------\n' +
      '    modifier onlyTarget() {\n' +
      '        require(isTarget());\n' +
      '        _;\n' +
      '    }\n' +
      '\n' +
      '    modifier onlyAdmin() {\n' +
      '        require(lastWillAccount == msg.sender);\n' +
      '        _;\n' +
      '    }\n' +
      '\n' +
      '    modifier onlyTargetOrAdmin() {\n' +
      '        require(targetUser == msg.sender || lastWillAccount == msg.sender);\n' +
      '        _;\n' +
      '    }\n' +
      '\n' +
      '}';
    this.contractCreated.emit(contract);
    this.step = 'contract';
    this.nextStep.emit(this.step);
    //this.contractRest.createContract(newContract).subscribe((res) => {
    //  this.contractCreated.emit(res.contract);
    //  this.step = 'contract';
    //  this.nextStep.emit(this.step);
    //}, (err) => {
    //  console.error(err);
    //} );
  }
  normalizeConditions() {
    this.conditionsNormalized.duration = this.conditions.duration * this.SECONDS;
    this.conditionsNormalized.checkInterval = this.conditions.checkInterval * this.SECONDS;
  }
  handleConditions() {
    this.normalizeConditions();
    this.conditionsUpdated.emit(this.conditionsNormalized);
  }
}


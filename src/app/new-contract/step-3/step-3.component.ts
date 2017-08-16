import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { ContractServiceService } from '../contract-service.service';
import { IConditions, IResultContract, ISourceContract } from '../contract.interface';
import { Conditions, ResultContract } from '../contract.class';

@Component({
  selector: 'app-step-3',
  templateUrl: './step-3.component.html',
  styleUrls: ['./step-3.component.scss']
})
export class Step3Component implements OnInit {
  @Input() conditions: IConditions;
  @Input() wallet: ISourceContract;
  @Output() conditionsUpdated = new EventEmitter();
  @Output() nextStep = new EventEmitter();
  @Output() contractCreated = new EventEmitter();
  public isValid = {
    'checkInterval': true,
    'duration': true
  };
  private step = '';
  private conditionsNormalized: IConditions;
  protected SECONDS = 2592000;
  constructor(
    private contractRest: ContractServiceService
  ) { }

  ngOnInit() {
    this.conditions = new Conditions();
    this.conditionsNormalized = {
      'checkInterval': 0,
        'duration': 0
    };
  }
  sendContract() {
    this.resetValidation();
    if (this.validateStep3()) {
      const newContract = new ResultContract(
        this.wallet['source'].wallet,
        this.wallet['destination'],
        this.wallet['conditions']
      );
  
      //const contract = '// —---------- MODIFIERS —---------\n' +
      //  '    modifier onlyTarget() {\n' +
      //  '        require(isTarget());\n' +
      //  '        _;\n' +
      //  '    }\n' +
      //  '\n' +
      //  '    modifier onlyAdmin() {\n' +
      //  '        require(lastWillAccount == msg.sender);\n' +
      //  '        _;\n' +
      //  '    }\n' +
      //  '\n' +
      //  '    modifier onlyTargetOrAdmin() {\n' +
      //  '        require(targetUser == msg.sender || lastWillAccount == msg.sender);\n' +
      //  '        _;\n' +
      //  '    }\n' +
      //  '\n' +
      //  '}';
      //this.contractCreated.emit(contract);
      //this.step = 'contract';
      //this.nextStep.emit(this.step);
      this.contractRest.createContract(newContract).subscribe((res) => {
        this.contractCreated.emit(res.contract);
        this.step = 'contract';
        this.nextStep.emit(this.step);
      }, (err) => {
        console.error(err);
      } );
      
    }
  }
  
  resetValidation() {
    this.isValid.checkInterval = true;
    this.isValid.duration = true;
  }
  validateStep3() {
    this.resetValidation();
    if (!this.conditions.checkInterval || this.conditions.checkInterval.toString() === '0') {
      this.isValid.checkInterval = false;
    }
    if (!this.conditions.duration || this.conditions.duration.toString() === '0') {
      this.isValid.duration = false;
    }
    return this.isValid.checkInterval && this.isValid.duration;
  }
  
  normalizeConditions(): void {
    this.conditionsNormalized.duration = this.conditions.duration * this.SECONDS;
    this.conditionsNormalized.checkInterval = this.conditions.checkInterval * this.SECONDS;
  }
  handleConditions(): void {
    this.normalizeConditions();
    this.conditionsUpdated.emit(this.conditionsNormalized);
  }
}


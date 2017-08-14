import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  normalizeConditions(): void {
    this.conditionsNormalized.duration = this.conditions.duration * this.SECONDS;
    this.conditionsNormalized.checkInterval = this.conditions.checkInterval * this.SECONDS;
  }
  handleConditions(): void {
    this.normalizeConditions();
    this.conditionsUpdated.emit(this.conditionsNormalized);
  }
}


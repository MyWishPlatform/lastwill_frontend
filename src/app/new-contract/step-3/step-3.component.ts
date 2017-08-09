import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-3',
  templateUrl: './step-3.component.html',
  styleUrls: ['./step-3.component.scss']
})
export class Step3Component implements OnInit {
  @Input() conditions;
  @Input() wallet: Object;
  @Output() conditionsUpdated = new EventEmitter();
  private conditionsNormalized;
  protected SECONDS = 2592000;
  constructor() { }

  ngOnInit() {
    this.conditions = {
      'duration': 0,
      'uptime': 0
    };
    this.conditionsNormalized = {};
  }
  sendContract() {
    console.log(this.wallet);
  }
  normalizeConditions() {
    this.conditionsNormalized.duration = this.conditions.duration * this.SECONDS;
    this.conditionsNormalized.uptime = this.conditions.uptime * this.SECONDS;
  }
  handleConditions() {
    this.normalizeConditions();
    this.conditionsUpdated.emit(this.conditionsNormalized);
  }
}


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-3',
  templateUrl: './step-3.component.html',
  styleUrls: ['./step-3.component.scss']
})
export class Step3Component implements OnInit {
  @Input() conditions;
  @Output() conditionsUpdated = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.conditions = {
      'duration': 10,
      'uptime': 3
    };
  }
  saveConditions() {
    this.conditionsUpdated.emit(this.conditions);
  }
}

// TODO make contract cost

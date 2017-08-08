import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-3',
  templateUrl: './step-3.component.html',
  styleUrls: ['./step-3.component.scss']
})
export class Step3Component implements OnInit {
  private conditions = {
    'duration': 10,
    'uptime': 3
  };
  constructor() { }

  ngOnInit() {
  }
}

// TODO make contract cost

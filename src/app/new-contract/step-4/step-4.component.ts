import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-4',
  templateUrl: './step-4.component.html',
  styleUrls: ['./step-4.component.scss']
})
export class Step4Component implements OnInit {
  @Input() contract;
  constructor() {  }

  ngOnInit() {
  }

}

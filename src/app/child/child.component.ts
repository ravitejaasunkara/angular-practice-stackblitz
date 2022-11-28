import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.valueFromChild.emit('Hello From child');
  }
  @Input() valueFromParent;
  @Output() valueFromChild = new EventEmitter();
  sendTheValueToParent() {}
}

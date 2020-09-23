import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-parent-dynamic',
  templateUrl: './parent-dynamic.component.html',
  styleUrls: ['./parent-dynamic.component.scss'],
})
export class ParentDynamicComponent implements OnInit {
  @Input() widget;

  @Input() index: number;

  @Input()
  resizeEvent: EventEmitter<GridsterItem>;
  constructor() {}

  ngOnInit(): void {}
}

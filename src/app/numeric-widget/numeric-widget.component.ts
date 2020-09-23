import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeric-widget',
  templateUrl: './numeric-widget.component.html',
  styleUrls: ['./numeric-widget.component.scss'],
})
export class NumericWidgetComponent implements OnInit, OnDestroy {
  amount = 750;
  intervalRef: number;

  constructor() {}

  ngOnInit(): void {
    this.intervalRef = setInterval(
      () => (this.amount = this.amount + Math.floor(10 * Math.random())),
      800
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalRef);
  }
}

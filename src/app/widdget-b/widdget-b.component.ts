import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import * as CanvasJS from '../helper/canvasjs.min';
import { GridsterItem } from 'angular-gridster2';
import { Subscription } from 'rxjs';

import { pieChartData } from '../mock-data';

@Component({
  selector: 'app-widdget-b',
  templateUrl: './widdget-b.component.html',
  styleUrls: ['./widdget-b.component.scss'],
})
export class WiddgetBComponent implements AfterViewInit, OnDestroy {
  pieChartData = pieChartData;
  @Input()
  resizeEvent: EventEmitter<GridsterItem>;

  @Input() index: number;

  resizeSub: Subscription;

  constructor() {}

  ngAfterViewInit(): void {
    const chart = new CanvasJS.Chart(`pie-chart-${this.index}`, {
      theme: 'light2',
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Monthly Expense',
      },
      data: [
        {
          type: 'pie',
          showInLegend: true,
          toolTipContent: '<b>{name}</b>: ${y} (#percent%)',
          indexLabel: '{name} - #percent%',
          dataPoints: this.pieChartData,
        },
      ],
    });

    chart.render();

    this.resizeSub = this.resizeEvent.subscribe(() => {
      chart.render();
    });
  }

  ngOnDestroy(): void {
    this.resizeSub.unsubscribe();
  }
}

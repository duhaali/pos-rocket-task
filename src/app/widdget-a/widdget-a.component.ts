import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { Subscription } from 'rxjs';
import * as CanvasJS from '../helper/canvasjs.min';

import { barChartData } from '../mock-data';

@Component({
  selector: 'app-widdget-a',
  templateUrl: './widdget-a.component.html',
  styleUrls: ['./widdget-a.component.scss'],
})
export class WiddgetAComponent implements AfterViewInit, OnDestroy {
  @Input()
  resizeEvent: EventEmitter<GridsterItem>;

  @Input() index: number;

  resizeSub: Subscription;

  saleData = barChartData;
  constructor() {}

  ngAfterViewInit(): void {
    const chart = new CanvasJS.Chart(`bar-chart-${this.index}`, {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Basic Column Chart in Angular',
      },
      data: [
        {
          type: 'column',
          dataPoints: [
            { y: 71, label: 'Apple' },
            { y: 55, label: 'Mango' },
            { y: 50, label: 'Orange' },
            { y: 65, label: 'Banana' },
            { y: 95, label: 'Pineapple' },
            { y: 68, label: 'Pears' },
            { y: 28, label: 'Grapes' },
            { y: 34, label: 'Lychee' },
            { y: 14, label: 'Jackfruit' },
          ],
        },
      ],
    });

    chart.render();

    this.resizeSub = this.resizeEvent.subscribe((widget) => {
      chart.render();
    });
  }

  ngOnDestroy(): void {
    this.resizeSub.unsubscribe();
  }
}

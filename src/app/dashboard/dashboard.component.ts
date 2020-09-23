import { Component, EventEmitter, OnInit } from '@angular/core';
import {
  GridsterConfig,
  GridsterItem,
  GridType,
  DisplayGrid,
  CompactType,
} from 'angular-gridster2';
import { initialWidgets, widgetTypes } from '../helper/init';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  options: GridsterConfig;
  widgets: Array<GridsterItem>;
  widgetTypes = widgetTypes;
  selectedWidget;
  resizeEvent: EventEmitter<GridsterItem> = new EventEmitter<GridsterItem>();

  constructor() {
    this.selectedWidget = this.widgetTypes[0].id;
  }

  ngOnInit(): void {
    this.options = {
      gridType: GridType.Fixed,
      compactType: CompactType.None,
      minCols: 16,
      maxCols: 20,
      minRows: 5,
      maxRows: 12,
      defaultItemCols: 4,
      defaultItemRows: 4,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      swap: true,
      displayGrid: DisplayGrid.None,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      setGridSize: true,
      margin: 4,
      itemResizeCallback: (item) => {
        this.resizeEvent.emit(item);
      },
    };
    this.widgets = initialWidgets;
  }

  addWiddget(): void {
    this.widgets.push({
      x: 0,
      y: 0,
      rows: 2,
      cols: 2,
      type: this.selectedWidget,
    });
  }
}

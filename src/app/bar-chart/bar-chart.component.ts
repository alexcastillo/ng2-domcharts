import { Component, Input } from '@angular/core';

@Component({
  selector: 'bar-chart',
  templateUrl: 'bar-chart.component.html',
  styleUrls: ['bar-chart.component.css']
})
export class BarChartComponent {

  constructor() { }

  @Input() data;
  @Input() orientation;

  getScale(value) {
    const axis = this.orientation === 'vertical' ? 'Y' : 'X';
    return `scale${ axis }(${ value })`;
  }

}
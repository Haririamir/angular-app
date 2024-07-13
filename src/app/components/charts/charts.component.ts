import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  chart: any;

  @Input() name: string = '';
  chartOptions: any = {};

  ngOnInit(): void {
    this.chartOptions = {
      theme: 'light2',
      animationEnabled: true,
      zoomEnabled: true,
      title: {
        text: this.name,
      },
      axisY: {
        labelFormatter: (e: any) => {
          var suffixes = ['', 'K', 'M', 'B', 'T'];

          var order = Math.max(
            Math.floor(Math.log(e.value) / Math.log(1000)),
            0
          );
          if (order > suffixes.length - 1) order = suffixes.length - 1;

          var suffix = suffixes[order];
          return '$' + e.value / Math.pow(1000, order) + suffix;
        },
      },
      data: [
        {
          type: 'line',
          xValueFormatString: 'YYYY',
          yValueFormatString: '$#,###.##',
          dataPoints: [
            { x: new Date(1980, 0, 1), y: 2500582120 },
            { x: new Date(1981, 0, 1), y: 2318922620 },
            { x: new Date(1982, 0, 1), y: 2682595570 },
            { x: new Date(1983, 0, 1), y: 3319952630 },
            { x: new Date(1984, 0, 1), y: 3220180980 },
            { x: new Date(1985, 0, 1), y: 4627024630 },
            { x: new Date(1986, 0, 1), y: 6317198860 },
            { x: new Date(1987, 0, 1), y: 7653429640 },
            { x: new Date(1988, 0, 1), y: 9314027340 },
            { x: new Date(1989, 0, 1), y: 11377814830 },
            { x: new Date(1990, 0, 1), y: 9379751620 },
          ],
        },
      ],
    };
  }
}

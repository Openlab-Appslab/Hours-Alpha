import { Component, OnInit } from '@angular/core';
import { productSales, ProductSalesMulti } from 'src/app/products';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { 
    Object.assign(this,{productSales, ProductSalesMulti})
  }

  ngOnInit(): void {
  }

  //This whole component is just a template for basic chart settings :)

  productSales: any[];
  productSalesMulti: any[];

  view: [number, number] = [700, 370];
  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };
  schemeType: string = 'ordinal'; //ordinal or linear
  gradient: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  legendTitle: string = 'Products';
  legendTitleMulti: string = 'Months';
  legendPosition: string = 'right'; //right or below
  legend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Sales';
  yAxisLabel: string = 'Products';
  animations: boolean = true;
  showGridLines: boolean = true;
  showDataLabel: boolean = true;
  barPadding: number = 5;
  tooltipDisabled: boolean = true;
  roundEdges: boolean = true;
}
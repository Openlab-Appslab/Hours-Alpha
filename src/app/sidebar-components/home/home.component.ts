import { Component, Input, NgModule, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { monthSalary } from './charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = '';

  input_value: number = 0;
  actual_value: number = 0;
  

  AdValue(){
    this.actual_value = this.actual_value + +this.input_value;
  }

  SumValue(){
    return this.name;
  }

  
  constructor() { Object.assign(this,{monthSalary})}

  ngOnInit(): void {
  }

}

import { Component, NgModule, OnInit } from '@angular/core';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { monthSalary } from './charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = 'Ahoj';

  SumValue(){
    return this.name;
  }

  
  constructor() { Object.assign(this,{monthSalary})}

  ngOnInit(): void {
  }

}

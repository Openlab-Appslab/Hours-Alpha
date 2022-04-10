import { Component, NgModule, OnInit } from '@angular/core';
import { monthSalary } from './charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor() { Object.assign(this,{monthSalary})}

  ngOnInit(): void {
  }

}

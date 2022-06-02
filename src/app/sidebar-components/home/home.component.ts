import { Component, Input, NgModule, OnInit } from '@angular/core';
import { monthSalary } from './charts';
import { HoursService } from 'src/app/service/hours.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly hoursService: HoursService,
  ) { Object.assign(this,{monthSalary})}

  name = '';

  input_value: number;
  actual_value: number = 0;

  AdValue(){
    this.actual_value = this.actual_value + +this.input_value;
  }

  register(): void { 
    const sendHours = this.actual_value;
      this.hoursService.sendHours(sendHours)
        .subscribe((result) => {
          console.log(result);
        })
  }

  SumValue(){
    return this.name;
  }

  ngOnInit(): void {
  }

}

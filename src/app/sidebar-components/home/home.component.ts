import { Component, Input, NgModule, OnInit } from '@angular/core';
import { monthSalary } from './charts';
import { HoursService } from 'src/app/service/hours.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly hoursService: HoursService,
    private cookies: CookieService,
  ) { Object.assign(this,{monthSalary})}

  workPlace: string = '';

  input_value: number = 0;
  actual_value: number = 0;

  AdValue(){
    this.actual_value = this.actual_value + +this.input_value;
    // console.log("adValue works")
  }

  sendEmployeeInfo(): void { 
    const workPlace = this.workPlace;
    const numberOfHours = this.actual_value;

    location.reload();

      this.hoursService.sendEmployeeInfo(workPlace, numberOfHours)
        .subscribe((result) => {
          console.log(result);
        })
  }

  workPlaceWrite(){
    // console.log("haha")
    console.log(this.workPlace);
  }

  ngOnInit(): void {
  }
}

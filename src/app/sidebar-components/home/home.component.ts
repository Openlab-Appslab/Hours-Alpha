import { Component, Input, NgModule, OnInit } from '@angular/core';
import { monthSalary } from './charts';
import { HoursService } from 'src/app/service/hours.service';
import { CookieService } from 'ngx-cookie-service';
import { productSales, ProductSalesMulti } from 'src/app/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly hoursService: HoursService,
    private cookies: CookieService,
  ) { 
    Object.assign(this,{monthSalary})
    Object.assign(this,{productSales, ProductSalesMulti})
  }

  productSales: any;
  productSalesMulti: any;

  workPlace: string = '';
  id: number;
  test: number;

  totalWorkedHours: number = 0;

  input_value: number = 0;
  actual_value: number = 0;

  AdValue(){
    this.actual_value = this.actual_value + +this.input_value;
    // console.log("adValue works")
  }

  sendEmployeeInfo(): void { 
    const workPlace = this.workPlace;
    const numberOfHours = this.actual_value;

      this.hoursService.sendEmployeeInfo(workPlace, numberOfHours)
  }

  workPlaceWrite(){
    // console.log("haha")
    console.log(this.workPlace);
  }

  ngOnInit(): void {
    this.hoursService.getHours(this.id).subscribe(response=> {
      console.log("ngOnInit hours response");
      this.totalWorkedHours = response;
      this.cookies.set("displayWorkedHours",this.totalWorkedHours.toString());
    })

    // this.hoursService.getHours(this.id).subscribe(test => this.test = test)
  }

  displayWorkedHours = this.cookies.get('displayWorkedHours');
}
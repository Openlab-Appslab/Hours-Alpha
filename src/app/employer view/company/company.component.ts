import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companyName: string = "";
  numberOfEmployees: number = 0;
  totalHours: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  selectedMenu:any = 'Home';

  ngOnInit(): void {
  }

  goTo(paramText: string){
    this.selectedMenu = paramText;
  }

}

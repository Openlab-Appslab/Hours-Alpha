import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { HomeComponent } from '../sidebar-components/home/home.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  static SumValue(): any {
    throw new Error('Method not implemented.');
  }

  constructor(
    private readonly authService: AuthService,
  ) { }

  selectedMenu:any = 'Home';

  name = 'Ahoj';

  ngOnInit(): void {
  }

  goTo(paramText: string){
    this.selectedMenu = paramText;
  }
}

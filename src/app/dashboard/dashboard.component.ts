import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { CookieService } from 'ngx-cookie-service';

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
    private cookies: CookieService,
  ) { }

  selectedMenu:any = 'Home';

  role = this.cookies.get('');
  firstName = this.cookies.get('firstName');
  lastName = this.cookies.get('lastName');

  ngOnInit(): void {
  }

  goTo(paramText: string){
    this.selectedMenu = paramText;
  }

  clickLogOut(){
    this.authService.logout();
    location.reload();
  }
}

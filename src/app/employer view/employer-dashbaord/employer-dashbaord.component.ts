import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-employer-dashbaord',
  templateUrl: './employer-dashbaord.component.html',
  styleUrls: ['./employer-dashbaord.component.css']
})
export class EmployerDashbaordComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private cookies: CookieService,
  ) { }

  role = this.cookies.get('');
  firstName = this.cookies.get('firstName');
  lastName = this.cookies.get('lastName');

  clickLogOut(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}

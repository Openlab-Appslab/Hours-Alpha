import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {
 
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  loginGroup = new FormGroup({ 
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  public checkedEmployer: boolean;

  public onCheckedEmployer(value: boolean){
    this.checkedEmployer = value;
  }

  login(): void {
    if(this.loginGroup.valid) {
      const email = this.loginGroup.value.email;
      const password = this.loginGroup.value.password;

      if(this.checkedEmployer == true){
        this.authService.login(email, password)
        .subscribe(() => this.router.navigateByUrl('/emp_dashboard'))
      }
      // else if(this.checkedEmployer == false){
      else{
        this.authService.login(email, password)
        .subscribe(() => this.router.navigateByUrl('/dashboard'));
      }
    } 
  }
}

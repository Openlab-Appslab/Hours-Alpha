import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.css']
})
export class JoinPageComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  signUpGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required),
  })

  public checkedEmployer: boolean = false;

  public onCheckedEmployer(value: boolean){
    this.checkedEmployer = value;
  }

  register(): void {
    // if(this.signUpGroup.valid) {
      const firstName = this.signUpGroup.value.firstName;
      const lastName = this.signUpGroup.value.lastName;
      const email = this.signUpGroup.value.email;
      const password = this.signUpGroup.value.password;
      const stateEmployer = this.checkedEmployer;
      console.log("tu to ide");
      
      this.authService.register(firstName, lastName, email, password, stateEmployer)
        .subscribe((stateEmployer) => {
          if(stateEmployer == true){
            this.router.navigate(['/emp_dashboard'])
            console.log("asdad");

          }
          else if(stateEmployer == false){
            this.router.navigate(['/dashboard'])
          };
        })
    // } 
  }
}
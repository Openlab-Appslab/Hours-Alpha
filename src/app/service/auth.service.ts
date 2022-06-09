import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { LoginResponse } from '../login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string ='';

  constructor(
    private readonly http: HttpClient,
    private cookies: CookieService,
  ) { }

  getToken(): string {
    return this.token;
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

  sendEmail: string = '';

  employerString: string = '';

  login(email: string, password: string): Observable<LoginResponse> {
    const info = btoa(`${email}:${password}`);
    const sendEmail = email;

    this.cookies.set('email', email);
    this.cookies.set('password', password);

    const token = `Basic ${info}`;
    const options = {
      headers: new HttpHeaders({
        Authorization: token,
        'X-Requested-With' : 'XMLHttpRequest'
      }),
      withCredentials: true
    };
    return this.http.get<LoginResponse>('http://localhost:8080/Auth/login', options).pipe(
      tap(() => this.token = token),
    );    
  }

  register(firstName: string, lastName: string, email: string, password: string, stateEmployer: boolean): Observable<any> {
    this.cookies.set('firstName', firstName);
    this.cookies.set('lastName', lastName);
  
    if(stateEmployer == true){
      this.employerString = 'true';
    }
    else{
      this.employerString = 'false';
    }
    this.cookies.set('stateEmployer', this.employerString);

      return this.http.post('http://localhost:8080/noAuth/registration', {
      email,
      firstName,
      lastName,
      password,
      stateEmployer,
    }, httpOptions);
  }

  logout(): void {
    this.token = '';
  }

  sendSupport (problem:string){

    
    let authString = `${this.cookies.get("username")}:${this.cookies.get("password")}`

    fetch('http://localhost:8080/both/support' + problem, {
      method: 'GET',
      headers: new Headers({
      'Authorization': 'Basic '+btoa(authString), 
      'Content-Type': "application/json; charset=utf8",
    }),

    })
    .then(() => {
      console.log('Success send support!');
    })
    .catch((error) => {
      console.error('Error:' , error);
    });
  }  
}
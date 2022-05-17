import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

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

  login(email: string, password: string): Observable<any> {
    const info = btoa(`${email}:${password}`);

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
    return this.http.get('http://localhost:8080/Auth/Login', options).pipe(
      tap(() => this.token = token)
    );
  }

  register(firstName: string, lastName: string, email: string, password: string, stateEmployer: boolean): Observable<any> {
    this.cookies.set('firstName', firstName);
    this.cookies.set('lastName', lastName);

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
}
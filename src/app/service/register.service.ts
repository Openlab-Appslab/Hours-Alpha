import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  token: string;

  getToken(): string {
    return this.token;
  }

  isRegistered(): boolean {
    return !!this.token;
  }

  register(firstName: string, lastName: string, email: string, finalpassword: string): Observable<any> {
    const info = btoa(`${firstName}:${lastName}:${email}:${finalpassword}`);
    const token = `Basic ${info}`;
    const options = {
      headers: new HttpHeaders({
        Authorization: token,
        'X-Requested-With' : 'XMLHttpRequest'
      }),
      withCredentials: true
    };
    return this.httpClient.get('http://localhost:8080/Auth/Login', options).pipe(
      tap(() => this.token = token)
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  users : User[] | undefined;

  getUsers() {
    return this.http.get<any>('be').subscribe(
      response => {
        console.log(response);
        this.users = response;
      }
    );
  }
}

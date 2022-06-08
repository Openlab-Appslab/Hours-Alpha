import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HoursService {

  constructor(
    private readonly http: HttpClient,
    private cookies: CookieService,
  ) { }

  sendEmployeeInfo(workPlace: string, numberOfHours: number){

    let authString = `${this.cookies.get("email")}:${this.cookies.get("password")}`

    this.cookies.set('workPlace', workPlace);

    fetch('http://localhost:8080/employee/addWorkInfo' +workPlace + "/" + numberOfHours, {
      method: 'POST',
      headers: new Headers({
      'Authorization': 'Basic '+btoa(authString), 
      'Content-Type': "application/json; charset=utf8",
    }),
    // body: JSON.stringify(name, problem),
    })
    .then(() => {
      console.log('Success!');
      // location.reload();
    })
    .catch((error) => {
      console.error('Error:' , error);
    });
  }  

  getHours(numberOfHours: number){
    return this.http.get<any>('http://localhost:8080/employee/showAllWorkInfo' + numberOfHours)

  //   let authString = `${this.cookies.get("email")}:${this.cookies.get("password")}`

  //   fetch('http://localhost:8080/employee/addWorkInfo' + numberOfHours, {
  //     method: 'GET',
  //     headers: new Headers({
  //     'Authorization': 'Basic '+btoa(authString), 
  //     'Content-Type': "application/json; charset=utf8",
  //   }),
  //   // body: JSON.stringify(name, problem),
  //   })
  //   .then(() => {
  //     console.log('Successfully got hours!');
  //     // location.reload();
  //   })
  //   .catch((error) => {
  //     console.error('Error:' , error);
  //   });
  // }
  }
}
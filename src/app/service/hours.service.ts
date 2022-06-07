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

  sendEmployeeInfo(workPlace: string, numberOfHours: number): Observable<any>{
    // this.cookies.set('numberOfHours', numberOfHours);
    this.cookies.set('workPlace', workPlace);
    
    return this.http.post('http://localhost:8080/Employee/addWorkInfo', {
      numberOfHours,
      workPlace,
    }, httpOptions);
  }

  // public addUser(): Observable<> {
  //   return this.http.post<>('${this.apiServerUrl}/user/add');
  // }
}

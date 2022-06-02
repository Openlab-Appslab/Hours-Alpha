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

  sendHours(sendHours: number): Observable<any>{
    return this.http.post('http://localhost:8080/hodinky', {
      sendHours,
    }, httpOptions);
  }
}

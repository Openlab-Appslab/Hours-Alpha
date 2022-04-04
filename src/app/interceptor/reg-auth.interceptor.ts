import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class RegAuthInterceptor implements HttpInterceptor {

  constructor(
    private readonly registerService: RegisterService,
    private readonly router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.registerService.isRegistered()) {
      request = request.clone({
        headers: new HttpHeaders({
          Authorization: this.registerService.getToken()
        })
      });
    }
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (this.registerService.isRegistered() && err.status === 401) {
          this.router.navigateByUrl('/login');
        }
        throw err;
      })
    );
  }
}

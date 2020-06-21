import { Login } from './../_models/login.model';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService implements HttpInterceptor {
  currentUser: Login;
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.currentUser.token
        },
      });
    }
    return next.handle(req);
  }

}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'bb66438cd6msh57b582e0931f165p171a97jsn26109b71f688',
      'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    });
    const GUID = 'f4179b26-21ac-432c-bcd8-cb4bc6e50981'
    const modifiedRequest = request.clone({
      headers
    })
    return next.handle(modifiedRequest);
  }
}
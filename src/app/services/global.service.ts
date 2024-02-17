import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private apiUrl = 'https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'bb66438cd6msh57b582e0931f165p171a97jsn26109b71f688',
    'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
  });
  constructor(private http: HttpClient) {}

  fetchData(day:object): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

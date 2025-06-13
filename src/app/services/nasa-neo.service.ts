import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaNeoService {
  private apiKey = 'QTTS03PDMPdxempOBPbguScXUYgLqEyHLqvsQkNA';
  private baseUrl = '/neo';

  constructor(private http: HttpClient) {}

  getFeed(startDate: string, endDate: string): Observable<any> {
    const url = `${this.baseUrl}/feed?start_date=${startDate}&end_date=${endDate}&api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  lookupAsteroid(asteroidId: string): Observable<any> {
    const url = `${this.baseUrl}/neo/${asteroidId}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  browseAsteroids(): Observable<any> {
    const url = `${this.baseUrl}/neo/browse?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
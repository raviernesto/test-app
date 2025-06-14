import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NasaApodService {
  private apiKey = 'DEMO_KEY'; // Replace with your NASA API key if needed
  private baseUrl = 'https://api.nasa.gov/planetary/apod';

  constructor(private http: HttpClient) {}

  /**
   * Get Astronomy Picture of the Day for a specific date
   */
  getApod(date?: string): Observable<any> {
    let url = `${this.baseUrl}?api_key=${this.apiKey}`;
    if (date) {
      url += `&date=${date}`;
    }
    return this.http.get(url);
  }

  /**
   * Get a random set of APOD images
   */
  getRandomApods(count: number = 1): Observable<any> {
    const url = `${this.baseUrl}?api_key=${this.apiKey}&count=${count}`;
    return this.http.get(url);
  }

  /**
   * Get APOD images for a date range
   */
  getApodsByDateRange(startDate: string, endDate: string): Observable<any> {
    const url = `${this.baseUrl}?api_key=${this.apiKey}&start_date=${startDate}&end_date=${endDate}`;
    return this.http.get(url);
  }
}

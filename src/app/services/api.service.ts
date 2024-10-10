import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast';

  private http = inject(provideHttpClient);

  constructor (private httpClient: HttpClient){}

  public getWeather (latitude: number, longitude: number): Observable<any> {
    const params = {
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      hourly: 'temperature_2m',
    }
    return this.httpClient.get<any>(this.apiUrl,  { params })

  }


}
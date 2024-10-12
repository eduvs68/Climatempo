import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Geometry } from '../models/geometry';
import { WeatherData } from '../models/weather-data';
import { OpenCageResponse } from '../models/open-cage-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private openCageUrl = "https://api.opencagedata.com/geocode/v1/json";
  private openCageKey = "4cada8233efa4cc6bfb2ff847a52a798";
  private meteoUrl = 'https://api.open-meteo.com/v1/forecast';

  private weatherData: WeatherData = {};


  constructor (private http: HttpClient){}

  public getClimateByGeometry(place: string): Observable<WeatherData>{
    this.http.get<OpenCageResponse>(`${this.openCageUrl}?q=${place}&key=${this.openCageKey}`)
             .subscribe((response: OpenCageResponse) => {
                const geometry: Geometry = response.results[0]?.geometry;
            
                (geometry) ? this.getWeather(geometry.lat, geometry.lng).subscribe(data => this.weatherData = data) :
                             console.log("Erro na chamada da api OpenCage");
              });

    return of(this.weatherData);
  }

  public getWeather(latitude: number, longitude: number): Observable<WeatherData>{
    const params = {
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      hourly: 'temperature_2m',
    }

    return this.http.get(this.meteoUrl, { params });
  }
}
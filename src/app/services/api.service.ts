import { provideHttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Geoloc } from '../models/geoloc';
import { Meteo } from '../models/meteo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private openCageUrl = "https://api.opencagedata.com/geocode/";
  private openCageKey = "4cada8233efa4cc6bfb2ff847a52a798";
  private meteoUrl = 'https://api.open-meteo.com/v1/forecast';
  
  private http = inject(provideHttpClient);

  public getPlaceLocation (place : string): Observable<Meteo>{

    const geoloc: Geoloc = this.http.get(`${this.openCageUrl}?q=${place}&key=${this.openCageKey}`);

    return this.getWeather(geoloc.latitude, geoloc.longitude);
  }
  
  public getWeather (latitude: number, longitude: number): Observable<Meteo>{
    const params = {
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      hourly: 'temperature_2m',
    }

    return this.http.get(this.meteoUrl, { params });
  }
}
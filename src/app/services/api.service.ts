import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meteo } from '../models/meteo';
import { Results } from '../models/results';
import { Annotations } from '../models/annotations';
import { Geometry } from '../models/geometry';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private openCageUrl = "https://api.opencagedata.com/geocode/v1/json";
  private openCageKey = "4cada8233efa4cc6bfb2ff847a52a798";
  private meteoUrl = 'https://api.open-meteo.com/v1/forecast';
  
  private results: Geometry = {
            lat : 0,
            lng : 0
}

  constructor (private http: HttpClient){}

  public getPlaceLocation (place : string): Observable<Geometry>{

    this.http.get<Geometry>(`${this.openCageUrl}?q=${place}&key=${this.openCageKey}`)
    .subscribe((data: Geometry) => this.results = data);

    return this.getWeather(this.results.lat, this.results.lng);
  }

  
  public getWeather (lat: number, lng: number): Observable<Meteo>{
    const params = {
      latitude: lat.toString(),
      longitude: lng.toString(),
      hourly: `temperature_2m`,
    }

    return this.http.get(this.meteoUrl, { params });
  }
}


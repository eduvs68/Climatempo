import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Meteo } from '../models/meteo';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  private meteo: Meteo | undefined;


  constructor (private apiService: ApiService){}

  public getWeather (this.meteo){
    this.apiService.getWeather(meteo.latitude, meteo.longitude).subscribe((data) => {
      
    })
  }
}
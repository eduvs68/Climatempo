import { Component, Inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherData } from '../../models/weather-data';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'] // Corrigido de 'styleUrl' para 'styleUrls'
})
export class UserInputComponent {

  @Input() userInput: string ='';
  
  weatherData: WeatherData = {};
  
  constructor (private service: ApiService){}


public getClimateByGeometry(): void {
  this.service.getClimateByGeometry(this.userInput).subscribe({
    next: (weather: WeatherData) => {
      // this.weatherData.latitude = weather.latitude;
      // this.weatherData.longitude = weather.longitude;
      // this.weatherData.elevation = weather.elevation;
      // this.weatherData.timezone = weather.timezone;
      // this.weatherData.timezone_abbreviation = weather.timezone_abbreviation;
       this.weatherData.hourly = weather.hourly;
       this.weatherData.hourly_units = weather.hourly_units;
    },
  });
  console.log(this.weatherData);
}

}
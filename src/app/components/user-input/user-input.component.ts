import { Component, Inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meteo } from '../../models/meteo';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'] // Corrigido de 'styleUrl' para 'styleUrls'
})
export class UserInputComponent {

  @Input() userInput?: string;

  private service = Inject(ApiService);

  public meteoInstance: Meteo = {};

public getPlaceLocation(): void {
  this.service.getPlaceLocation(this.userInput).subscribe({
    next: (meteo: Meteo) => {
      // this.meteoInstance.latitude = meteo.latitude;
      // this.meteoInstance.longitude = meteo.longitude;
      // this.meteoInstance.elevation = meteo.elevation;
      // this.meteoInstance.timezone = meteo.timezone;
      // this.meteoInstance.timezone_abbreviation = meteo.timezone_abbreviation;
       this.meteoInstance.hourly = meteo.hourly;
       this.meteoInstance.hourly_units = meteo.hourly_units;
    },
  });
}

}
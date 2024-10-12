import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meteo } from '../../models/meteo';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @Input() userInput: string = '';
  public meteoInstance: Meteo = {};

  constructor(private service: ApiService) {}

  public getPlaceLocation(): void {
    if (!this.userInput) {
      alert('Por favor, insira o nome de uma cidade.');
      return;
    }

    // Primeira requisição: obtém latitude e longitude com base no nome da cidade
    this.service.getPlaceLocation(this.userInput).subscribe({
      next: (geoData: any) => {
        const lat = geoData.results[0].annotations.DMS.lat;
        const lon = geoData.results[0].annotations.DMS.lng;

        // Segunda requisição: usando latitude e longitude para obter a previsão do tempo
        this.service.getWeather(lat, lon).subscribe({
          next: (meteo: Meteo) => {
            this.meteoInstance = meteo;
          },
          error: (err) => {
            console.error('Erro ao obter a previsão do tempo:', err);
          }
        });
      },
      error: (err) => {
        console.error('Erro ao obter as coordenadas da cidade:', err);
      }
    });
  }
}

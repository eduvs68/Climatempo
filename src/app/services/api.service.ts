import { provideHttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api/v1/anl/synoptic/locale/:BR?token=f93a6e1551282a41d16ec3eea06bb9bc';
  private apiTemperature = '/api/v1/climate/temperature/locale/:id?token=f93a6e1551282a41d16ec3eea06bb9bc'

private http = inject(provideHttpClient);


}


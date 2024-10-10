import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { UserInputComponent } from "./components/user-input/user-input.component";
import { ShowResultsComponent } from "./components/show-results/show-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserInputComponent, HttpClientModule, ShowResultsComponent],  // Import HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{}
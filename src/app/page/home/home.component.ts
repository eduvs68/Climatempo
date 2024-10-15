import { Component } from '@angular/core';
import { UserInputComponent } from "../../components/user-input/user-input.component";
import { ShowResultsComponent } from "../../components/show-results/show-results.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserInputComponent, ShowResultsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor() {

  }

}

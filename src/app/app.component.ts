import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserInputComponent, HttpClientModule],  // Import HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDetails();
  }

  public fetchDetails() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(
      (resp: any) => {
        console.log(resp);
        this.data = resp;
      }
    )
  }
}

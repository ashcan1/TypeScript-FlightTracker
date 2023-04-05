import { Component } from '@angular/core';
import { RootObject } from './Model/Flight';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flightTracker';
  data!: RootObject;
}

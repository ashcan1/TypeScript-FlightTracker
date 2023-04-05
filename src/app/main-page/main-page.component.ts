import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Flight } from '../Model/Flight';
import { FlightServiceService } from './flight-service.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
  data = new MatTableDataSource<Flight>();
  displayedColumns: string[] = ['departure', 'arrival', 'scheduledTime', 'airline', 'flightNumber'];



  constructor(private apiService: FlightServiceService) {}


  fetchData(): void {
    this.apiService.getDataFromApi().subscribe(
      (response) => {
        console.log('Fetched data:', response);
        this.data = new MatTableDataSource<Flight>(response.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}

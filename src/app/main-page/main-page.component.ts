import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Flight } from '../Model/Flight';
import { FlightServiceService } from './flight-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
  data = new MatTableDataSource<Flight>();
  displayedColumns: string[] = ['departure', 'arrival', 'countdown', 'airline', 'flightNumber'];



  constructor(private apiService: FlightServiceService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchData();
  }


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
  getTimeRemaining(scheduledTime: string): string {
    const now = new Date();
    const scheduledDate = new Date(scheduledTime);
    const timeDiff = scheduledDate.getTime() - now.getTime();

    if (timeDiff <= 0) {
      return '0s';
    }

    const seconds = Math.floor((timeDiff / 1000) % 60);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);


    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  getCountdown(scheduledTime: string) {
    return interval(1000).pipe(map(() => {
      const countdown = this.getTimeRemaining(scheduledTime);
      this.cd.detectChanges(); // manually trigger change detection
      return countdown;
    }));
}

}


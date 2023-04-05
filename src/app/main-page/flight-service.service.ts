import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight, RootObject } from '../Model/Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  private baseUrl = "https://localhost:7218/Flight";
  constructor(private http: HttpClient) {}

  getDataFromApi(): Observable<any> {
    return this.http.get<RootObject>(`${this.baseUrl}`);
  }
}

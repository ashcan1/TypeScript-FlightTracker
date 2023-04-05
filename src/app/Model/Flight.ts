export interface RootObject {
  Success: boolean;
  Data: Data[];
}

export interface Data {
  Type: string;
  Status: string;
  Departure: Departure;
  Arrival: Arrival;
  Airline: Airline;
  Flight: Flight;
  Codeshared: Codeshared;
}

export interface Departure {
  IataCode: string;
  IcaoCode: string;
  Delay: number;
  ScheduledTime: string;
  EstimatedTime: string;
  ActualTime: string;
  EstimatedRunway: string;
  ActualRunway: string;
  Gate: string;
}

export interface Arrival {
  IataCode: string;
  IcaoCode: string;
  Terminal: string;
  Baggage: string;
  Gate: string;
  Delay: number;
  ScheduledTime: string;
  EstimatedTime: string;
}

export interface Airline {
  Name: string;
  IataCode: string;
  IcaoCode: string;
}

export interface Flight {
  Number: string;
  IataNumber: string;
  IcaoNumber: string;
}

export interface Codeshared {
  Airline: Airline;
  Flight: Flight;
}

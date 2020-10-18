import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './models/car';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private apiUrl: string = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl + 'cars', { responseType: 'json' });
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(this.apiUrl + 'cars/' + `${id}`, { responseType: 'json' });
  }
}

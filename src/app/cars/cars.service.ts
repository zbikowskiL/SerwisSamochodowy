import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './models/car';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private apiUrl: string = 'http://localhost:3000/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
    
  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl + 'cars', { responseType: 'json' });
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(this.apiUrl + 'cars/' + `${id}`, { responseType: 'json' });
  }

  addCar(data: Car) : Observable<Car> {
   return this.http.post<Car>(this.apiUrl + 'cars/', data, this.httpOptions);
  }

  updateCar(id: number, data) : Observable<Car>{
    return this.http.put<Car>(this.apiUrl + 'cars/' + `${id}`, data, this.httpOptions);
  }

  deleteCar(id: number) : Observable<Car> {
    return this.http.delete<Car>(this.apiUrl + 'cars/' + `${id}`, {responseType: 'json'});
  }
} 

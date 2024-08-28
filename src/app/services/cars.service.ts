import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor( private http:HttpClient) { }
  getFourCars() : Observable<any>{
    return this.http.get<any>("https://freetestapi.com/api/v1/cars?limit=4")
  }
  getAllCars() : Observable<any>{
    return this.http.get<any>('https://freetestapi.com/api/v1/cars')
  }
  getCarById(id:string) : Observable<any>{
    return this.http.get<any>(`https://freetestapi.com/api/v1/cars/${id}`)
  }
}

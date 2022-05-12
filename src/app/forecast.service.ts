import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CurrentWeather, Forecast } from './forecast';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  public currentForecast = new BehaviorSubject<Forecast>(null);

  apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Tallinn&units=metric&appid=ce60013986dfcb3ebf13accf07bbb9f9';

  constructor(private http: HttpClient) { }

  getCurrentWeather() {
    this.http.get<Forecast>(this.apiUrl).pipe(
      tap(res => {
        this.currentForecast.next(res)
      })
    ).subscribe();
  }
}
